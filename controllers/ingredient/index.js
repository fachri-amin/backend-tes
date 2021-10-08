const { Ingredient } = require('../../models');

module.exports = {
    addIngredient: async (req, res) => {
        const payload = req.body;

        const ingredient = await Ingredient.create({
            name: payload.name,
            color: payload.color,
            img: 'uploads/'+req.file.path
        });

        if(ingredient instanceof Ingredient){
            res.json({message: 'Success add new ingredient!'})
        }
        else {
            res.json({message: 'Failed to add new ingredient!'})
        }
    }
}