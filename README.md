# AdoptaMascota

# 🐾 MatchPaw — Plataforma de Adopción de Mascotas

MatchPaw es una plataforma diseñada para conectar personas, familias e instituciones interesadas en adoptar mascotas con refugios y particulares que buscan dar en adopción a perros y gatos.  
Nuestro objetivo es facilitar, modernizar y hacer más humano el proceso de adopción responsable.

---

## 👥 **Integrantes del Equipo**

| Nombre Completo | Usuario de GitHub |
|-----------------|-------------------|
| Karen Cristóbal Morales | [NerakCM](https://github.com/NerakCM) |
| Rodrigo Galeana Vidaurri | [RodrigoGV11](https://github.com/RodrigoGV11) |
| Juan Daniel Barrera Holan | [Daniiel314](https://github.com/Daniiel314) |
| Diego Castro Rendón | [DiegoCastroRendon](https://github.com/DiegoCastroRendon) |
| Bruno Fernando Ortiz Amaya | [BrunsO27](https://github.com/BrunsO27) |
| Juan Ramón Franco Anaya  | [Juan-FA](https://github.com/Juan-FA) |
| Patrick Alberto Camilo Martínez Rodríguez | [Mexidis](https://github.com/Mexidis) |

---

## 🐶 **Descripción del Proyecto**

MatchPaw permite:

- Visualizar mascotas disponibles mediante una galería.
- Registrar mascotas con información detallada (tamaño, energía, raza, género, etc.).
- Iniciar sesión, registrar cuentas de usuario y Cerrar Sesión.

Está construido con:

- **React + Vite** para el frontend
- **Django + Django REST Framework** para el backend
- **TailwindCSS** para estilos  
- **React Router** para navegación  

---

## 🚀 **Instrucciones para ejecutar el proyecto**

### Backend

1. Activamos el entorno virtual:
   
  source venv/bin/activate

3. Instalar dependencias del backend
   Dentro de la carpeta Aplicacion/ hacemos los siguientes comando en terminal
   - pip install -r requirements.txt

   Adicionalmente instalamos:
   - pip install djangorestframework
   - pip install django-cors-headers

4. Vamos a la carpeta del Backend: cd adopta_amigo
   
5. Aplicamos migraciones:
   - python manage.py makemigrations
   - python manage.py migrate

6. Creamos un superusuario con el comando: python manage.py createsuperuser

7. Iniciamos Servidor backend:
   - python manage.py runserver

8. Para poder ir al panel de adminitración vamos a:
   - http://127.0.0.1:8000/admin

#### Datos precargados importantes
En db.sqlite3 ya se incluyen nuestros valores iniciales que el frontend necesita:

Energías:
  - Muy Activo
  - Moderado
  - Tranquilo

Especies:
  - Tortuga
  - Perro
  - Hámster
  - Gato
  - Erizo
  - Conejo
  - Perico

Géneros:
  - Macho
  - Hembra

Tamaños:
  - Chico
  - Mediano
  - Grande
