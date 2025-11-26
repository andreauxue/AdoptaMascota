# AdoptaMascota
Desarrollo de aplicación web para Diseño de Interfaces de Usuario 2026-1

## Equipo Slytherin: 

- Leslie Geronimo Soto: 320032848 - lesliegeronimo
- Ximena Andrade Luviano: 320249150 - xim28-25
- Israel Rivera: 320490747 - Orbitalx1
- Ariadna Beatríz Pérez Aparicio: 320215122 - AriadnaPA 
- Angel Moisés Gónzalez Corrales: 32034619 - MoisesAGC
- Ui Chul Shin: 314630810 - shucshin
- Roberto Samuel Sanchez Rosas: 318355159 - samuelsrosas

Adopta un Amigo es una plataforma web desarrollada para facilitar el proceso de adopción de mascotas, integrando diseño, experiencia de usuario y comunicación en tiempo real con el backend. La idea es que cualquier persona pueda interactuar con la plataforma de forma sencilla y acceder a información real sobre animales disponibles para adopción.

El funcionamiento general se basa en:

1. **Autenticación de usuarios:**  
   Los usuarios pueden registrarse y posteriormente iniciar sesión mediante un sistema de autenticación basado en sesiones de Django. Una vez autenticados, su sesión se mantiene activa mediante cookies y localStorage, lo que permite personalizar la interfaz y dar acceso a funcionalidades, como publicar mascotas.

2. **Visualización dinámica de mascotas:**  
   En la galería, el frontend realiza una petición GET a la API de Django REST usando fetch(). Esta petición devuelve un JSON con todas las mascotas disponibles en la base de datos. React toma esa información y la renderiza dinámicamente, permitiendo mostrar foto, nombre, edad, tipo y otros atributos.  
   Esto significa que si en el backend se registra una nueva mascota, aparecerá automáticamente en el frontend sin necesidad de modificar nada.

3. **Publicación de nuevas mascotas:**  
   Cuando un usuario autenticado quiere registrar una mascota, llena un formulario en React que valida los datos y luego envía una petición POST al endpoint correspondiente.
   Si el backend acepta la información, la mascota se registra en la base de datos y el frontend actualiza la galería para mostrarla de inmediato.

4. **Flujo completo Frontend ↔ Backend:**  
   Toda la lógica de comunicación entre ambas partes se realiza mediante la API de Django REST Framework. React se encarga de manejar cada estado visual (cargando, error, éxito), mientras que Django administra la base de datos, la autenticación, las rutas y la lógica del sistema.  

En esta entrega intentamos conseguir una aplicación verdaderamente funcional, ya que ahora la información proviene directamente del backend.
