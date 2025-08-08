const express = require('express');
const router = express.Router();
const controller = require('../controllers/projectController');

router.get('/list', controller.listProjects); 
router.post('/add', controller.createMovie);
// router.get('/details/:id', controller);


module.exports = router;