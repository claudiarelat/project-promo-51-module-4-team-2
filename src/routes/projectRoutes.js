const express = require('express');
const router = express.Router();

router.get('/list', controller); 
router.post('/add', controller);
router.get('/details/:id', controller);


