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

## ✅ Mejoras y Correcciones Implementadas

Esta sección detalla los problemas clave resueltos en el desarrollo:

* **1. Redirección Inicial Corregida:** Ahora redirige correctamente a la pantalla de **Login** al inicio, en lugar de cargar directamente la página de Inicio sin autenticación.
* **2. Flujo de Registro Mejorado:** Tras el registro de usuario, se retorna al **Login** para validar la sesión correctamente, en lugar de enviar directamente a la galería.
* **3. Navbar Dinámica:** La barra de navegación ahora oculta opciones privadas en los estados de "Login" / "Crear cuenta" y las muestra según el rol una vez que el usuario ha iniciado sesión.
* **4. Cerrar Sesión Estable:** Funcionalidad de cierre de sesión completamente corregida y operativa.
* **5. Pantalla de Inicio Personalizada:** La pestaña Home da la bienvenida al usuario utilizando su nombre de usuario.
* **6. Footer Funcional:** Los íconos en el footer simulan dirigir a los logins de las redes sociales.
* **7. Datos de Detalle de Mascota:** Se corrigió un error que mostraba campos como "N/A" en la pantalla de detalles de la mascota.
