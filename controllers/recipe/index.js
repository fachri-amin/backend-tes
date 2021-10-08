const { 
    Recipe, 
    sequelize,
    User,
    RecipeCategoryRecipe,
    Step,
    StepIngredients,
} = require('../../models');

module.exports = {
    getAll: async (req, res) => {
        const recipes = await Recipe.findAll();
        res.json({data: recipes});
    },
    addRecipe: async (req, res) => {
        const payload = req.body;

        const transaction = await sequelize.transaction();

        try {
            const author = await User.create({
                name: payload.author,
            }, {transaction});
            
            const recipe = await Recipe.create({
                name: payload.name,
                description: payload.description,
                author_id: author.id
            }, {transaction});

            for(let i=0; i<payload.categories.length; i++){
                const recipeCategoryRecipe = await RecipeCategoryRecipe.create({
                    recipe_id: recipe.id,
                    recipe_category_id: payload.categories[i]
                }, {transaction});
            }

            for(let i=0; i<payload.step_number.length; i++){
                const step = await Step.create({
                    step_number: payload.step_number[i],
                    description: payload.step_description[i],
                    timer: payload.step_timer[i],
                    image: 'uploads/'+req.files[i].filename,
                }, {transaction});
            }

            if(payload.step_ingredients_step_id){
                for(let i=0; i<payload.step_ingredients_step_id.length; i++){
                    const step_ingredients = await StepIngredients.create({
                        step_id: payload.step_ingredients_step_id[i],
                        recipe_id: recipe.id,
                        amount: payload.step_ingredients_amount[i],
                        unit: payload.step_ingredients_unit[i]
                    }, {transaction})
                }
            }

            await transaction.commit();

            res.json({message: 'Success add new recipe!'});

        }
        catch (err) {
            console.log(err);
            await transaction.rollback();
            res.json({message: 'Failed to add new recipe!'})
        }
    }
}