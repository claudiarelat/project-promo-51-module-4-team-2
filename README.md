# 🎬 GirlFlix  
Proyecto creado por **Push Sisters**  

**GirlFlix** es una aplicación web donde cada usuaria puede subir una "claqueta" (tarjeta personalizada) con su película o serie favorita, compartir sus gustos y descubrir recomendaciones de otras personas.  

---

## ✨ Funcionalidades principales  
📽️ **Subida de claqueta personalizada** con:  
  *  Título de la pieza audiovisual  
  *  Frase estrella  
  *  Enlace a una página de reseñas (IMDb, FilmAffinity, etc.)  
  *  Plataforma donde puede verse (Netflix, Prime, etc.)  
  *  Género  
  *  Sinopsis  

👤 **Personaje favorito**:  
  *  Nombre del personaje  
  *  Rol en la historia  
  *  Imagen del personaje  

🖼️ **Multimedia**:  
  *  Portada de la película/serie  
  *  Imagen del personaje favorito  
  *  Imagen y claqueta por defecto si no se sube ninguna  

🧹 Botón para borrar tu claqueta  
🔁 Las claquetas se actualizan en tiempo real  
💡 Explora recomendaciones de otras usuarias  
🌐 Favicon personalizado  

---

## 🛠️ Tecnologías utilizadas  

### **Frontend**  
- ⚛️ React  
- 🎨 SASS  
- ⚡ Vite para bundling y desarrollo rápido  
- 📂 Ubicado en la carpeta [`web/`](web/)  
- 🌍 Deploy: [https://girlflix.onrender.com/#/proyectos](https://girlflix.onrender.com/#/proyectos)  

### **Backend**  
- 🟢 Node.js  
- 🚀 Express  
- 💾 MySQL para base de datos  
- 🛠️ Arquitectura MVC (Model-View-Controller)  
- 📂 Ubicado en la carpeta [`src/`](src/) con la siguiente estructura:  

```plaintext
src/
├── controllers/                  # Controladores de lógica de negocio
│   └── projectController.js
├── db/                           # Conexión y scripts de base de datos
│   ├── connection.js
│   └── mysqldump.sql
├── models/                       # Modelos de datos
│   └── project
