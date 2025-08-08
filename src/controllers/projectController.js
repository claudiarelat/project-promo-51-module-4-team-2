const project = require("../models/projectModel");

async function listProjects(req, res) {
  //pide los datos
  try {
    const projectList = await project.getAll();
    res.json({
      success: true,
      results: projectList,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error al obtener los proyectos" });
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
