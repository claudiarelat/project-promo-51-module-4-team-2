**Estructura del proyecto**

📂 node_modules/          # Dependencias instaladas (se generan con npm install)
📂 public/                # Archivos estáticos accesibles al navegador
   📂 images/             # Las imágenes (portadas, personajes)
📂 src/                   # Código fuente de la API
   ├── index.js           # Configuración principal de Express
   ├── routes/            # Rutas de la API
   ├── controllers/       # Controladores
   ├── models/            # Modelos 
   └── db                 # Conexión a la base de datos
📂 views/                 # Vistas (plantilla EJS)
.env                      # Variables de entorno
.gitignore                # Archivos y carpetas a ignorar en Git
package-lock.json         # Generado por npm para versiones exactas
package.json              # Configuración del proyecto y dependencias
README.md                 # Documentación del proyecto
