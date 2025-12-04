#!/bin/bash

# Script para probar los endpoints de autenticación
# Uso: ./test_auth_endpoints.sh

# Colores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Archivo para guardar cookies
COOKIE_FILE="test_cookies.txt"

# URL base de la API
BASE_URL="http://127.0.0.1:8005/api/auth"

echo -e "${YELLOW}================================================${NC}"
echo -e "${YELLOW}Testing Authentication Endpoints${NC}"
echo -e "${YELLOW}================================================${NC}"
echo ""

# Test 1: Registro de Usuario
echo -e "${GREEN}[Test 1] Registro de Usuario${NC}"
echo "POST $BASE_URL/register/"
echo ""

REGISTER_RESPONSE=$(curl -s -X POST $BASE_URL/register/ \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser'$(date +%s)'",
    "email": "test'$(date +%s)'@email.com",
    "password": "password123",
    "rol": "adoptante"
  }')

echo "$REGISTER_RESPONSE" | python3 -m json.tool
echo ""
echo -e "${YELLOW}------------------------------------------------${NC}"
echo ""

# Extraer username del response para usarlo en login
USERNAME=$(echo "$REGISTER_RESPONSE" | python3 -c "import sys, json; print(json.load(sys.stdin)['user']['username'])" 2>/dev/null)

# Test 2: Login
echo -e "${GREEN}[Test 2] Login${NC}"
echo "POST $BASE_URL/login/"
echo ""

LOGIN_RESPONSE=$(curl -s -X POST $BASE_URL/login/ \
  -H "Content-Type: application/json" \
  -c $COOKIE_FILE \
  -d '{
    "username": "'$USERNAME'",
    "password": "password123"
  }')

echo "$LOGIN_RESPONSE" | python3 -m json.tool
echo ""
echo -e "Cookies guardadas en: $COOKIE_FILE"
echo ""
echo -e "${YELLOW}------------------------------------------------${NC}"
echo ""

# Test 3: Obtener Usuario Actual
echo -e "${GREEN}[Test 3] Obtener Usuario Actual${NC}"
echo "GET $BASE_URL/user/"
echo ""

USER_RESPONSE=$(curl -s -X GET $BASE_URL/user/ \
  -b $COOKIE_FILE)

echo "$USER_RESPONSE" | python3 -m json.tool
echo ""
echo -e "${YELLOW}------------------------------------------------${NC}"
echo ""

# Test 4: Logout
echo -e "${GREEN}[Test 4] Logout${NC}"
echo "POST $BASE_URL/logout/"
echo ""

# Extraer CSRF token de las cookies
if [ -f "$COOKIE_FILE" ]; then
    CSRF_TOKEN=$(grep csrftoken $COOKIE_FILE | awk '{print $7}')

    if [ -n "$CSRF_TOKEN" ]; then
        LOGOUT_RESPONSE=$(curl -s -X POST $BASE_URL/logout/ \
          -H "X-CSRFToken: $CSRF_TOKEN" \
          -b $COOKIE_FILE)

        echo "$LOGOUT_RESPONSE" | python3 -m json.tool
    else
        echo -e "${RED}Error: No se pudo obtener el CSRF token${NC}"
    fi
else
    echo -e "${RED}Error: Archivo de cookies no encontrado${NC}"
fi

echo ""
echo -e "${YELLOW}------------------------------------------------${NC}"
echo ""

# Test 5: Verificar que logout funcionó
echo -e "${GREEN}[Test 5] Verificar que logout funcionó${NC}"
echo "GET $BASE_URL/user/ (debería retornar 401)"
echo ""

VERIFY_RESPONSE=$(curl -s -w "\nHTTP Status: %{http_code}" -X GET $BASE_URL/user/ \
  -b $COOKIE_FILE)

echo "$VERIFY_RESPONSE"
echo ""
echo -e "${YELLOW}------------------------------------------------${NC}"
echo ""

# Limpiar
rm -f $COOKIE_FILE
echo -e "${GREEN}✓ Tests completados${NC}"
echo -e "${GREEN}✓ Archivo de cookies eliminado${NC}"
echo ""
echo -e "${YELLOW}================================================${NC}"
