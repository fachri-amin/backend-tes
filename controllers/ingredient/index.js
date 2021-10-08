const { 
    Ingredient,
    IngredientCategoryIngredient,
    sequelize
} = require('../../models');

module.exports = {
    addIngredient: async (req, res) => {
        const payload = req.body;

        const transaction = await sequelize.transaction();

        try {
            const ingredient = await Ingredient.create({
                name: payload.name,
                color: payload.color,
                img: 'uploads/'+req.file.filename
            }, {transaction});

            for(let i; i<payload.ingredient_categories; i++){
                const ingredient_categories = await IngredientCategoryIngredient.create({
                    ingredient_id: ingredient.id,
                    ingredient_category_id: payload.ingredient_categories[i]
                })
            }

            await transaction.commit();

            res.json({message: 'Success add new ingredient!'});
        }
        catch (err) {
            console.log(err);
            await transaction.rollback();
            res.json({message: 'Failed to add new ingredient!'})
        }
    }
}