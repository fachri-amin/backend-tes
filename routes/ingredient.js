const express = require('express');
const router = express.Router();

//controller
const ingredientController = require('../controllers/ingredient');

// validators
const ingredientValidator = require('../validators/ingredient');

// utils
const uploadFile = require('../utils/uploadFile');

router.use('/add', uploadFile('img'));
router.use('/add', ingredientValidator.addIngredient);
router.post('/add', ingredientController.addIngredient);

module.exports = router;