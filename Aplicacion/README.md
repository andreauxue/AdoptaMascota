# Pasos para correr el Backend

La primera vez que corras el Backend, debes estar dentro de la carpeta Aplicacion. 

```bash
cd Aplicacion
```

Una vez ahí, elimina la carpeta `venv`:

- En Windows (CMD)
    ```bash
    rmdir /s /q venv
    ```

- En Windows (PowerShell)
    ```bash
    Remove-Item -Recurse -Force venv
    ```

- En Linux / macOS
    ```bash
    rm -rf venv
    ```


Crea el entorno virtual:

- En Windows (CMD/PowerShell)
    ```bash
    python -m venv venv
    ```

- En Linux / macOS
    ```bash
    python3 -m venv venv
    ```


Activa el entono virtual:

```bash
venv\Scripts\activate
```

Instala los requerimientos:

```bash
pip install -r requirements.txt
```

Ve al proyecto:

```bash
cd adopta_amigo
```

Haz las migraciones:

```bash
python manage.py makemigrations
```

```bash
python manage.py migrate
```

Crea un usuario administrador. Guarda los datos que vas a ingresar:

```bash
python manage.py createsuperuser
```

Inicia el servidor:

```bash
python manage.py runserver
```

Accede al panel de administración:

```
http://127.0.0.1:8000/admin/
```

En el panel, se te solicitarán datos del usuario administrador que hiciste.