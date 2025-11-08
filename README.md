# Huellitas en Casa 🐾 

**Huellitas en Casa** es na plataforma web diseñada para conectar mascotas que buscan un hogar con personas interesadas en adoptar. 
El objetivo principal es fomentar la adopción responsable y brindar una experiencia amigable y accesible para los usuarios.

---

## Tecnologías Utilizadas

- **React + Vite**
- **TailwindCSS**
- **React Router DOM**
- **JavaScript (ES6+)**

---

## Integrantes del equipo — Gryffindor

- Anaya Pérez Ulises Josué (ulisessap)
- Díaz Reyes Lilith Jaquelin (jackDiazz)
- García López Francisco Daniel (D-GaLo)
- Osorio Morales Fernanda Ameyalli (FernandaOsorioMorales)
- Sautto Ramírez Seldon (seldon1128)
- Tapia Sánchez Oscar (OscarTapiaS)
- Vázquez Reyes Jesús Elías (JesusEVR)

## Cómo ejecutar el proyecto

Por ahora, solo es funcional la interfaz de la aplicación, por lo que necesitamos posicionarnos en la carpeta ```frontend``` del proyecto. Para ello, se ejecutan los siguientes comandos:

```
cd AdoptaMascota
cd Aplicacion
cd frontend
```

Posteriomente, se ejecutan los siguientes comandos dentro dicha carpeta:

```
npm install
npm run dev
```

Finalmente, se accede a ```http://localhost:5173/``` desde el navegador web para visualizar la interfaz.
  

### Tipos principales de commits

| Tipo         | Significado                                                                                  | Ejemplo                                               |
| ------------ | -------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **feat**     | Nueva funcionalidad (feature) que se agrega al proyecto.                                     | `feat(api): agregar endpoint de registro de usuario`  |
| **fix**      | Corrección de un error existente.                                                            | `fix(login): corregir validación de contraseña vacía` |
| **docs**     | Cambios en la documentación (README, comentarios, etc.).                                     | `docs: actualizar instrucciones de despliegue`        |
| **style**    | Cambios de formato o estilo del código (indentación, comas, espacios) sin alterar la lógica. | `style: aplicar formato con prettier`                 |
| **refactor** | Reestructuración del código sin cambiar su comportamiento.                                   | `refactor(user): simplificar lógica de validación`    |
| **perf**     | Mejoras de rendimiento.                                                                      | `perf(query): optimizar consulta SQL`                 |
| **test**     | Agregar o modificar pruebas unitarias/integración.                                           | `test(api): añadir casos para endpoints de usuarios`  |
| **build**    | Cambios que afectan el sistema de compilación o dependencias (npm, pip, Docker, etc.).       | `build(docker): actualizar imagen base a python:3.12` |
| **ci**       | Cambios en integración continua (GitHub Actions, Jenkins, etc.).                             | `ci: ajustar pipeline para test en staging`           |
| **chore**    | Tareas menores o de mantenimiento (sin afectar código fuente ni lógica).                     | `chore: actualizar dependencias del proyecto`         |
| **revert**   | Deshacer un commit previo.                                                                   | `revert: revertir feat(api): agregar autenticación`   |
