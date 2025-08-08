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

async function getMovieById(req, res) {
	const id = parseInt(req.params.id, 10); // validación simple
  
	if (Number.isNaN(id)) {
	  return res.status(400).json({ success: false, message: "El id debe ser un número" });
	}
  
	try {
	  const movie = await project.getById(id);
	  if (!movie) {
		return res.status(404).json({ success: false, message: "Película no encontrada" });
	  }
	  res.json({ success: true, result: movie });
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ success: false, message: "Error al buscar la película" });
	}
  }
  
  module.exports = { listProjects, createMovie, getMovieById };