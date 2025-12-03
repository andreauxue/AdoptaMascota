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

## ✅ Mejoras y Correcciones Implementadas

Esta sección detallamos las principales correcciones y mejoras realizadas en el proyecto para asegurar un buen flujo y una mejor experiencia:

1.  **Redirección de Inicio Corregida:**
    * **Antes:** Al abrir la URL principal (`http://localhost:5173/`), la primera pantalla mostrada era **Inicio (Home)**, lo cual permitía el acceso a la galería de mascotas sin iniciar sesión, lo cual es un comportamiento incorrecto.
    * **Ahora:** Al cargar la IP, la aplicación redirige al usuario directamente a la pantalla de **Login**, forzando su autenticación.

2.  **Flujo de Registro de Usuario Optimizado:**
    * **Antes:** Tras completar el registro de un nuevo usuario, el sistema lo enviaba inmediatamente a la galería de mascotas.
    * **Ahora:** Al registrar un nuevo usuario, el sistema lo devuelve al **Login** para que ingrese sus credenciales y sea validado correctamente.

3.  **Visibilidad de Opciones en la Navbar Dinámica:**
    * **Antes:** Las opciones privadas de la Navbar (ej. "Ver Galería de Mascotas") eran visibles incluso en las vistas de **Login** o **Crear Cuenta**, permitiendo un acceso no autorizado.
    * **Ahora:** Si la vista actual es **Login** o **Crear Cuenta**, las opciones de navegación privadas se ocultan. Una vez que la sesión ha sido iniciada, todas las opciones permitidas son visibles.

4.  **Funcionalidad de Cerrar Sesión Establecida:**
    * **Corrección:** Debido a conflictos en *merges* en una entrega anterior, la función de Cerrar Sesión había sido omitida a pesar de que si la implementamos. Ahora esta funcionalidad ha sido validada y corregida.

5.  **Mejora en la Pantalla de Bienvenida (Home):**
    * **Mejora:** En la pestaña de **Inicio (Home)**, se agregó un mensaje personalizado que da la bienvenida al usuario utilizando su username.

6.  **Mejora en la Interacción del Footer:**
    * **Mejora:** Al hacer clic en los iconos de las redes sociales en el *footer*, se simula el comportamiento de una aplicación real, redirigiendo a los logins de cada plataforma. Esto se implementa como un ejemplo funcional, simulando que nos llevan a las redes sociales de MatchPaw.

7.  **Carga Correcta de Datos de Detalle de Mascota:**
    * **Corrección:** Se solucionó un error en la vista de detalles de una mascota específica donde los datos se cargaban erróneamente, resultando en campos con el valor **N/A**. **Ahora, la carga de datos es correcta** y todos los detalles específicos de cada mascota se muestran apropiadamente.

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


💻 Frontend (React + Vite)

Desde:

AdoptaMascota/Aplicacion/frontend

1️⃣ Instalar dependencias necesarias
npm install react-icons
npm install react-router-dom
npm install lucide-react

2️⃣ Ejecutar frontend
npm run dev


Abrir:
👉 http://localhost:5173/

