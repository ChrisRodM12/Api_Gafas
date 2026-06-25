# 👓 Proyecto: Api_Gafas

## 📌 Descripción
El proyecto **Api_Gafas** es una aplicación backend desarrollada en **Node.js** que implementa una **API RESTful** para la gestión de información relacionada con gafas.  
Su propósito es ofrecer endpoints que permitan realizar operaciones **[CRUD](ca://s?q=CRUD_en_APIs)** (crear, leer, actualizar y eliminar) sobre los datos de productos, integrando validaciones y vistas dinámicas mediante **[EJS](ca://s?q=Plantillas_EJS_en_Node.js)**.

---

## ⚙️ Tecnologías utilizadas
- **Node.js** → Entorno de ejecución principal.  
- **JavaScript** → Lenguaje de programación base.  
- **EJS** → Motor de plantillas para renderizar vistas dinámicas.  
- **Schemas** → Definición y validación de estructuras de datos.  
- **dotenv** → Manejo de variables de entorno para configuración segura.  

---

## 📂 Estructura del Repositorio
- **`index.js`** → Punto de entrada de la aplicación.  
- **`routes/`** → Define las rutas y endpoints de la API.  
- **`models/`** → Modelos de datos (estructura de las gafas).  
- **`schemas/`** → Validaciones y reglas de consistencia de datos.  
- **`views/`** → Plantillas EJS para renderizar información en páginas web.  
- **`libs/`** → Librerías auxiliares para lógica de negocio.  
- **`.env`** → Configuración de variables de entorno (ej. conexión a base de datos).  

---

## 🚀 Funcionalidades principales
- **[Gestión de gafas](ca://s?q=Gestion_de_productos_en_APIs)**: Registro, consulta, actualización y eliminación de productos.  
- **[Validación de datos](ca://s?q=Validacion_de_datos_en_APIs)**: Uso de esquemas para asegurar integridad en la información.  
- **[Renderizado dinámico](ca://s?q=Renderizado_dinamico_con_EJS)**: Vistas que muestran datos de manera interactiva.  
- **[Configuración flexible](ca://s?q=Configuracion_con_dotenv)**: Variables de entorno para despliegue seguro.  

---

## 📌 Ejemplo de Endpoints (hipotéticos)
```http
GET /api/gafas
