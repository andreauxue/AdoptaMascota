# Pasos para correr el proyecto

Ve a la Aplicación:

```bash
cd Aplicacion
```

Elimina la carpeta venv:

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


Crea la carpeta venv:

- En Windows (CMD/PowerShell)
    ```bash
    python -m venv venv
    ```

- En Linux / macOS
    ```bash
    python3 -m venv venv
    ```


Crea un entorno virtual:

```bash
python -m venv venv
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
python manage.py migrate
```

Crea un usuario administrador:

```bash
python manage.py createsuperuser
```

Inicia el servidor:

```bash
python manage.py runserver
```

Accede al panel de administración en:

```
http://127.0.0.1:8000/admin/
```
