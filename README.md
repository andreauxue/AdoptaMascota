# Pawly 🐾

Plataforma web para facilitar la adopción responsable de animales. Conecta a personas interesadas en adoptar con refugios y dueños que publican mascotas, priorizando una experiencia accesible, clara y empática.

## Objetivos
- Visualizar y publicar mascotas disponibles para adopción (datos simulados por ahora).
- Implementar una navegación fluida entre vistas: inicio, login, registro, galería y formulario de publicación.
- Garantizar diseño responsivo, coherente con la identidad visual de Pawly.

## Beneficios
- Promueve la adopción responsable, facilitando el contacto entre adoptantes y refugios.
- Plataforma accesible desde distintos dispositivos (desktop y móvil).
- Interacción simple: los usuarios pueden explorar y publicar mascotas fácilmente.

## Restricciones (entrega actual)
- Sin conexión real a la API (flujo visual y datos simulados).
- Autenticación básica, sin manejo avanzado de roles o permisos.
- Alcance acotado a un prototipo funcional según lineamientos de clase.

## Stakeholders
| Rol               | Descripción / Interés                                                     |
|-------------------|---------------------------------------------------------------------------|
| Usuario adoptante | Busca adoptar una mascota de forma simple y transparente.                 |
| Refugio / Dueño   | Publica mascotas y gestiona información de adopción.                      |
| Equipo de dev     | Diseña e implementa la interfaz y futura integración con el backend.      |
| Profesor/Evaluador| Verifica objetivos, calidad de diseño y funcionamiento del sistema.       |

## Ejecución

### Frontend (Vite + React + Tailwind)
```bash
cd Aplicacion/frontend
npm install
npm run dev
```
Rutas principales: `/` (Inicio), `/login`, `/register`, `/galeria`, `/agregar`, `/logout`.

### Backend (Django) — opcional para esta entrega
```bash
cd Aplicacion/adopta_amigo
python -m venv venv
source venv/bin/activate  # o venv\Scripts\activate en Windows
pip install -r ../requirements.txt
python manage.py migrate
python manage.py runserver
```

## Estructura (parcial)
```
Aplicacion/
  frontend/        # Vite + React + Tailwind (UI)
  adopta_amigo/    # Proyecto Django (API, no obligatorio en esta entrega)
```

## Convenciones de commits

| Tipo         | Significado                                                                                  | Ejemplo                                               |
| ------------ | -------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **feat**     | Nueva funcionalidad (feature) que se agrega al proyecto.                                     | `feat(ui): agregar Galería y tarjetas de mascotas`    |
| **fix**      | Corrección de un error existente.                                                            | `fix(login): corregir validación de contraseña vacía` |
| **docs**     | Cambios en la documentación (README, comentarios, etc.).                                     | `docs: actualizar instrucciones de ejecución`         |
| **style**    | Cambios de formato o estilo del código (indentación, comas, espacios) sin alterar la lógica. | `style: aplicar formato con prettier`                 |
| **refactor** | Reestructuración del código sin cambiar su comportamiento.                                   | `refactor(card): simplificar props del componente`    |
| **perf**     | Mejoras de rendimiento.                                                                      | `perf(list): optimizar renderizado de tarjetas`       |
| **test**     | Agregar o modificar pruebas unitarias/integración.                                           | `test(ui): añadir casos para componentes`             |
| **build**    | Cambios que afectan el sistema de compilación o dependencias (npm, pip, Docker, etc.).       | `build(tailwind): configurar paleta brand`            |
| **ci**       | Cambios en integración continua (GitHub Actions, Jenkins, etc.).                             | `ci: ajustar pipeline para test en staging`           |
| **chore**    | Tareas menores o de mantenimiento (sin afectar código fuente ni lógica).                     | `chore: actualizar dependencias del proyecto`         |
| **revert**   | Deshacer un commit previo.                                                                   | `revert: revertir feat(ui): nueva navbar`             |

## Integrantes
- Ui Chul Shin — @shucshin
