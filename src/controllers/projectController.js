const project = require("../models/projectModel");
const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 4000}`;
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

async function createMovie(req, res) {
  try {
    const projectData = req.body;

    const insertId = await project.addMovie(projectData);

    res.status(201).json({ message: 'Project added successfully', id: insertId, success: true, cardURL: baseUrl+'/project/'+insertId});
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

