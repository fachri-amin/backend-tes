const express = require('express');
const router = express.Router();

//controller
const recipeController = require('../controllers/recipe');

// validators
const recipeValidator = require('../validators/recipe');

// utils
const uploadFile = require('../utils/uploadFile');

router.get('/all', recipeController.getAll);
router.post('/add', uploadFile('step_image', true), recipeController.addRecipe);

module.exports = router;