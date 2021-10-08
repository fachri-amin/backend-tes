const express = require('express');
const router = express.Router();

//controller
const stepController = require('../controllers/step');

// validators
const stepValidator = require('../validators/step');

// utils
const uploadFile = require('../utils/uploadFile');

router.use('/add/:recipeId', uploadFile('image'));
router.use('/add/:recipeId', stepValidator.addStep);
router.post('/add/:recipeId', stepController.addStep);

module.exports = router;