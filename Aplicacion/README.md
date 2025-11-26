# Equipo Slytherin

**Integrantes:**

- Leslie Geronimo Soto — 320032848 — *lesliegeronimo*  
- Ximena Andrade Luviano — 320249150 — *xim28-25*  
- Israel Rivera — 320490747 — *Orbitalx1*  
- Patrick A. C. Martínez Rodríguez — 726000986 — *Mexidis*  
- Ariadna Beatríz Pérez Aparicio — 320215122 — *AriadnaPA*  
- Angel Moisés Gónzalez Corrales — 32034619 — *MoisesAGC*  
- Ui Chul Shin — 314630810 — *shucshin*  
- Roberto Samuel Sanchez Rosas — 318355159 — *samuelsrosas*  

---

# Pasos para correr el proyecto

---

## Backend (Django)

> **IMPORTANTE:** Todos los comandos deben ejecutarse dentro de la carpeta  
> **`Aplicacion/adopta_amigo`**



Crea y activa un entorno virtual de Python:

```bash
python -m venv venv
venv\Scripts\activate
```

En Linux o macOS:

```bash
python3 -m venv venv
source venv/bin/activate
```


Instala los requerimientos necesarios:

```bash
pip install -r requirements.txt
```
Crea las migraciones y aplica los cambios:

```bash
python manage.py makemigrations
python manage.py migrate
```

Cargar Mascotas Iniciales (Base de Datos Precargada)

```bash
python manage.py loaddata mascotas_iniciales.json
```
Creación de usuario administrador

```bash
python manage.py createsuperuser
```

Ejecución del servidor backend

```bash
python manage.py runserver
```

El backend estará disponible en:

```
http://127.0.0.1:8000/
```

---
## Frontend

> **IMPORTANTE:** Todos los comandos deben ejecutarse dentro de la carpeta  
> **`Aplicacion/frontend`**

Instala las dependencias del proyecto React:

```bash
npm install
```

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

El frontend se ejecutará por defecto en:

```
http://127.0.0.1:5173/
```
