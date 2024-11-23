const express = require('express');
const recipecontroller = require('../controller/recipecontroller');

const router = express.Router();


router.get('/', recipecontroller.getAllRecipes);
router.post('/', recipecontroller.createRecipe);
router.get('/:id', recipecontroller.getRecipeById);
router.put('/:id', recipecontroller.updateRecipe);
router.delete('/:id', recipecontroller.deleteRecipe);

module.exports = router;