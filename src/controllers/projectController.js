const project = require("../models/projectModel");
const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 4000}`;

const fs = require('fs');
const path = require('path');

async function listProjects(req, res) {
  try {
    const projectList = await project.getAll();

    const projectListWithFullUrl = projectList.map((p) => {
      return {
        ...p,
        imagen_obra: `${baseUrl}/${p.imagen_obra}`,
        imagen_personaje: `${baseUrl}/${p.imagen_personaje}`
      };
    });

    res.json({
      success: true,
      results: projectListWithFullUrl,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error al obtener los proyectos" });
  }
}


// Función auxiliar para guardar imagen base64 en disco
function saveBase64Image(base64String, folder = 'uploads') {
  try {
    // Extraer el tipo y la extensión del base64
    const matches = base64String.match(/^data:image\/([a-zA-Z]+);base64,(.+)$/);
    if (!matches) throw new Error('Formato de imagen no válido');

    const ext = matches[1];
    const data = matches[2];
    const buffer = Buffer.from(data, 'base64');

    // Crear nombre único
    const fileName = `${Date.now()}-${Math.round(Math.random() * 1e9)}.${ext}`;
    const dirPath = path.join(__dirname, '..', 'public', folder);

    // Crear carpeta si no existe
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    const filePath = path.join(dirPath, fileName);

    // Guardar archivo
    fs.writeFileSync(filePath, buffer);

    return `${folder}/${fileName}`; // ruta relativa para guardar en BD
  } catch (error) {
    console.error('Error al guardar imagen:', error);
    throw error; // Re-lanzamos el error para que lo gestione el caller
  }
}

async function createMovie(req, res) {
  try {
    const projectData = req.body;

    // Si la imagen_obra es base64, guardarla y actualizar ruta
    if (projectData.imagen_obra && projectData.imagen_obra.startsWith('data:image/')) {
      projectData.imagen_obra = saveBase64Image(projectData.imagen_obra);
    }
    // Igual para imagen_personaje
    if (projectData.imagen_personaje && projectData.imagen_personaje.startsWith('data:image/')) {
      projectData.imagen_personaje = saveBase64Image(projectData.imagen_personaje);
    }

    const insertId = await project.addMovie(projectData);

    res.status(201).json({ 
      message: 'Project added successfully', 
      id: insertId, 
      success: true, 
      cardURL: `${baseUrl}/project/${insertId}`
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add project' });
  }
}

async function getProjectById(req, res) {
  try {
    const { id } = req.params;
    const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 4000}`;

    const projectData = await project.getById(id);

    if (!projectData) {
      return res.status(404).json({ success: false, message: "Obra no encontrada" });
    }

    // Afegir URL completa a les imatges
    projectData.imagen_obra = `${baseUrl}/${projectData.imagen_obra}`;
    projectData.imagen_personaje = `${baseUrl}/${projectData.imagen_personaje}`;
    //res.json({ success: true, results: projectData });

    // Renderiza la vista show.ejs y le pasa los datos
    res.render("show", { proyecto: projectData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error al obtener la obra" });
  }
}

module.exports = { listProjects, createMovie, getProjectById };

