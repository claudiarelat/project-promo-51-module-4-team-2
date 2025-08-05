const project = require("../models/projectModel.js");
	async function listProjects(req, res) {
	//pide los datos
	try {
    const projectList = await project.getAll();
	res.json ({
		success: true, results: projectList
	})
	} catch (error) {
        res.status(500).json({ success: false, message: "Error al obtener los proyectos" });
	}
}
	module.exports = { listProjects }