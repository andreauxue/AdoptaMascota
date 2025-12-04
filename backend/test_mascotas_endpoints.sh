#!/bin/bash

# Script para probar los endpoints de mascotas
# Uso: ./test_mascotas_endpoints.sh

# Colores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Archivos
COOKIE_FILE="test_cookies.txt"
TEST_IMAGE="test_mascota.jpg"

# URLs
BASE_URL="http://127.0.0.1:8005/api"

echo -e "${YELLOW}================================================${NC}"
echo -e "${YELLOW}Testing Mascotas Endpoints${NC}"
echo -e "${YELLOW}================================================${NC}"
echo ""

# Crear imagen de prueba si no existe
if [ ! -f "$TEST_IMAGE" ]; then
    echo -e "${YELLOW}Creando imagen de prueba...${NC}"
    # Crear una imagen de 100x100 píxeles
    convert -size 100x100 xc:blue "$TEST_IMAGE" 2>/dev/null || \
    echo "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" | base64 -d > "$TEST_IMAGE"
    echo -e "${GREEN}✓ Imagen de prueba creada${NC}\n"
fi

# Test 1: Listar Mascotas (Público)
echo -e "${GREEN}[Test 1] Listar Mascotas (Público)${NC}"
echo "GET $BASE_URL/mascotas/"
echo ""

curl -s $BASE_URL/mascotas/ | python3 -m json.tool | head -n 30
echo "..."
echo ""
echo -e "${YELLOW}------------------------------------------------${NC}"
echo ""

# Test 2: Obtener Mascota Específica (Público)
echo -e "${GREEN}[Test 2] Obtener Mascota Específica${NC}"
echo "GET $BASE_URL/mascotas/1/"
echo ""

curl -s $BASE_URL/mascotas/1/ | python3 -m json.tool
echo ""
echo -e "${YELLOW}------------------------------------------------${NC}"
echo ""

# Test 3: Login como Publicador
echo -e "${GREEN}[Test 3] Login como Publicador${NC}"
echo "POST $BASE_URL/auth/login/"
echo ""

# Intentar con usuario existente
LOGIN_RESPONSE=$(curl -s -X POST $BASE_URL/auth/login/ \
  -H "Content-Type: application/json" \
  -c $COOKIE_FILE \
  -d '{
    "username": "publicador1",
    "password": "password123"
  }')

echo "$LOGIN_RESPONSE" | python3 -m json.tool

# Si falla, crear usuario
if echo "$LOGIN_RESPONSE" | grep -q "error"; then
    echo -e "\n${YELLOW}Usuario no existe, creando...${NC}\n"

    REGISTER_RESPONSE=$(curl -s -X POST $BASE_URL/auth/register/ \
      -H "Content-Type: application/json" \
      -d '{
        "username": "publicador1",
        "email": "publicador1@test.com",
        "password": "password123",
        "rol": "publicador"
      }')

    echo "$REGISTER_RESPONSE" | python3 -m json.tool

    # Login después de registrar
    curl -s -X POST $BASE_URL/auth/login/ \
      -H "Content-Type: application/json" \
      -c $COOKIE_FILE \
      -d '{
        "username": "publicador1",
        "password": "password123"
      }' | python3 -m json.tool
fi

echo ""
echo -e "${YELLOW}------------------------------------------------${NC}"
echo ""

# Obtener CSRF token
CSRF_TOKEN=$(grep csrftoken $COOKIE_FILE | awk '{print $7}')

# Test 4: Obtener Especies (para usar en creación)
echo -e "${GREEN}[Test 4] Obtener Especies Disponibles${NC}"
echo "GET $BASE_URL/especies/"
echo ""

ESPECIES=$(curl -s $BASE_URL/especies/)
echo "$ESPECIES" | python3 -m json.tool
ESPECIE_ID=$(echo "$ESPECIES" | python3 -c "import sys, json; data=json.load(sys.stdin); print(data[0]['id'] if data else 1)" 2>/dev/null || echo "1")
echo ""
echo -e "${YELLOW}Usando especie_id: $ESPECIE_ID${NC}"
echo ""
echo -e "${YELLOW}------------------------------------------------${NC}"
echo ""

# Test 5: Crear Mascota (Requiere Auth + Publicador)
echo -e "${GREEN}[Test 5] Crear Mascota (Requiere Publicador)${NC}"
echo "POST $BASE_URL/mascotas/"
echo ""

CREATE_RESPONSE=$(curl -s -X POST $BASE_URL/mascotas/ \
  -H "X-CSRFToken: $CSRF_TOKEN" \
  -b $COOKIE_FILE \
  -F "nombre=Firulais Test" \
  -F "descripcion=Perro de prueba creado por script" \
  -F "edad=5" \
  -F "especie_id=$ESPECIE_ID" \
  -F "vacunado=true" \
  -F "imagen=@$TEST_IMAGE")

echo "$CREATE_RESPONSE" | python3 -m json.tool

MASCOTA_ID=$(echo "$CREATE_RESPONSE" | python3 -c "import sys, json; print(json.load(sys.stdin)['id'])" 2>/dev/null || echo "")

echo ""
echo -e "${YELLOW}------------------------------------------------${NC}"
echo ""

if [ -n "$MASCOTA_ID" ]; then
    # Test 6: Actualizar Mascota (Requiere ser Dueño)
    echo -e "${GREEN}[Test 6] Actualizar Mascota (PATCH)${NC}"
    echo "PATCH $BASE_URL/mascotas/$MASCOTA_ID/"
    echo ""

    UPDATE_RESPONSE=$(curl -s -X PATCH $BASE_URL/mascotas/$MASCOTA_ID/ \
      -H "X-CSRFToken: $CSRF_TOKEN" \
      -b $COOKIE_FILE \
      -F "descripcion=Descripción actualizada por script de prueba")

    echo "$UPDATE_RESPONSE" | python3 -m json.tool
    echo ""
    echo -e "${YELLOW}------------------------------------------------${NC}"
    echo ""

    # Test 7: Logout y Login como Adoptante
    echo -e "${GREEN}[Test 7] Login como Adoptante${NC}"

    # Logout
    curl -s -X POST $BASE_URL/auth/logout/ \
      -H "X-CSRFToken: $CSRF_TOKEN" \
      -b $COOKIE_FILE > /dev/null

    # Registrar adoptante si no existe
    curl -s -X POST $BASE_URL/auth/register/ \
      -H "Content-Type: application/json" \
      -d '{
        "username": "adoptante1",
        "email": "adoptante1@test.com",
        "password": "password123",
        "rol": "adoptante"
      }' > /dev/null 2>&1

    # Login como adoptante
    ADOPTANTE_LOGIN=$(curl -s -X POST $BASE_URL/auth/login/ \
      -H "Content-Type: application/json" \
      -c $COOKIE_FILE \
      -d '{
        "username": "adoptante1",
        "password": "password123"
      }')

    echo "$ADOPTANTE_LOGIN" | python3 -m json.tool

    NEW_CSRF=$(grep csrftoken $COOKIE_FILE | awk '{print $7}')
    echo ""
    echo -e "${YELLOW}------------------------------------------------${NC}"
    echo ""

    # Test 8: Adoptar Mascota
    echo -e "${GREEN}[Test 8] Adoptar Mascota${NC}"
    echo "POST $BASE_URL/mascotas/$MASCOTA_ID/adoptar/"
    echo ""

    ADOPT_RESPONSE=$(curl -s -X POST $BASE_URL/mascotas/$MASCOTA_ID/adoptar/ \
      -H "X-CSRFToken: $NEW_CSRF" \
      -b $COOKIE_FILE)

    echo "$ADOPT_RESPONSE" | python3 -m json.tool
    echo ""
    echo -e "${YELLOW}------------------------------------------------${NC}"
    echo ""

    # Test 9: Verificar Estado de la Mascota
    echo -e "${GREEN}[Test 9] Verificar Mascota Adoptada${NC}"
    echo "GET $BASE_URL/mascotas/$MASCOTA_ID/"
    echo ""

    curl -s $BASE_URL/mascotas/$MASCOTA_ID/ | python3 -m json.tool
    echo ""
    echo -e "${YELLOW}------------------------------------------------${NC}"
    echo ""

    # Test 10: Intentar Eliminar (Debe Fallar - Adoptante no es Dueño)
    echo -e "${GREEN}[Test 10] Intentar Eliminar como Adoptante (Debe Fallar)${NC}"
    echo "DELETE $BASE_URL/mascotas/$MASCOTA_ID/"
    echo ""

    DELETE_FAIL=$(curl -s -w "\nHTTP Status: %{http_code}" -X DELETE $BASE_URL/mascotas/$MASCOTA_ID/ \
      -H "X-CSRFToken: $NEW_CSRF" \
      -b $COOKIE_FILE)

    echo "$DELETE_FAIL"
    echo ""
    echo -e "${YELLOW}------------------------------------------------${NC}"
    echo ""
fi

# Limpiar
rm -f $COOKIE_FILE
echo -e "${GREEN}✓ Tests completados${NC}"
echo -e "${GREEN}✓ Archivos temporales eliminados${NC}"
echo ""
echo -e "${YELLOW}================================================${NC}"
