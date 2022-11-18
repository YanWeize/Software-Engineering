var express = require('express');
var router = express.Router();
const Project = require('../controllers/projects.controller.js');

router.get('/', Project.findAll);
//router.get('/:title', Project.findByTitle);
//router.get('/:acronym', Project.findByAcronym);
//router.get('/:donor', Project.findByDonor);
//router.get('/:keyword', Project.findByKeyWord);
router.get('/:id', Project.findById);


module.exports = router;