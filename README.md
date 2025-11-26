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
- **TailwindCSS** para estilos  
- **React Router** para navegación  

---

## 🚀 **Instrucciones para ejecutar el proyecto**

Este proyecto contiene un backend en Django REST Framework y un frontend en React + Vite.

Dentro de Aplicacion/:

pip install -r requirements.txt

Instalamos aparte esto:
pip install djangorestframework
pip install django-cors-headers
npm install react-icons
npm install react-router-dom
npm install lucide-react


Luego, entrar a la carpeta del backend: cd adopta_amigo

python manage.py makemigrations
python manage.py migrate


## Importante: Agregar datos iniciales en Django Admin

En http://127.0.0.1:8000/admin
, agregar los siguientes valores necesarios:

Energias:Muy Activo,Moderado, Tranquilo

Especies:Tortuga,Perro,Hamster, Gato, Erizo, Conejo

Géneros: Macho, Hembra

Tamaños:Chico,Mediano,Grande

Esto es necesario para que el frontend pueda mostrar los detalles correctamente.

Luego dentro de la adopta_amigo hacemos:

python manage.py runserver

Se puede abrir:
http://127.0.0.1:8000/

:::::::::::::::::::::::::::::::::::: 
En otra terminal, dentro de:
AdoptaMascota/Aplicacion/frontend


Ejecutar:

npm install
npm install react-icons
npm install react-router-dom
npm install lucide-react
npm run dev


Abrimos:
http://localhost:5173/

