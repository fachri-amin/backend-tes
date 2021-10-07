const Joi = require('joi');

module.exports = {
    addSteps: Joi.object()
        .keys({
            step_number: Joi.number(),
            description: Joi.string(),
            timer: Joi.number(),
            image: Joi.string().max(100),
            step_ingredients: Joi.array()
                .items(
                    Joi.object()
                        .keys({
                            ingredient_id: Joi.number(),
                            amount: Joi.number(),
                            unit: Joi.string().max(25)
                        })
                )
        })
}