const project = require("../models/projectModel");

async function listProjects(req, res) {
  try {
    const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 4000}`;
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

    res.status(201).json({ message: 'Project added successfully', id: insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add project' });
  }
}

module.exports = { listProjects, createMovie };

