const {
    Recipe,
    StepIngredients,
    Step,
    sequelize
} = require('../../models');

module.exports = {
    addStep: async (req, res) => {
        const payload = req.body;
        const recipeId = req.params.recipeId;
        
        const transaction = await sequelize.transaction();

        try {
            const step = await Step.create({
                recipeId: recipeId,
                step_number: payload.step_number,
                description: payload.description,
                timer: payload.timer,
                image: 'uploads/'+req.file.filename
            }, {transaction});

            if(payload.step_ingredients_ingredient_id){
                for(let i=0; i<payload.step_ingredients_ingredient_id.length; i++){
                    const step_ingredients = await StepIngredients.create({
                        step_id: step.id,
                        recipe_id: recipeId,
                        ingredient_id: payload.step_ingredients_ingredient_id[i],
                        amount: payload.step_ingredients_amount[i],
                        unit: payload.step_ingredients_unit[i]
                    }, {transaction})
                }
            }

            await transaction.commit();

            res.json({message: 'Success add new step!'});
        }
        catch (err) {
            console.log(err);
            await transaction.rollback();
            res.json({message: 'Failed to add new step!'});
        }
    }
}