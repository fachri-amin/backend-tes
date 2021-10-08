const Joi = require('joi');

module.exports = {
    addRecipe: async (req, res, next) => {
        const payload = req.body;

        const addRecipeSchema = Joi.object({
            name: Joi.string()
                .required()
                .max(255)
                .messages({
                    'any.required':'Recipe name is required',
                    'string.max':'Recipe name max length is 255'
                }),
            description: Joi.string()
                .required()
                .messages({
                    'any.required':'Description is required'
                }),
            author: Joi.string()
                .required()
                .max(45)
                .messages({
                    'any.required':'Author name is required',
                    'string.max':'Author name max length is 45',
                }),
            categories: Joi.array()
                .items(Joi.number().required())
                .required()
                .messages({
                    'array.includes':'Categories not valid',
                    'any.required':'Categories are required'
                }),
            step_number: Joi.array()
                .items(
                    Joi.number()
                    .required()
                    .messages({
                        'any.required':'Steps number are required'
                    }))
                .required()
                .messages({
                    'any.required':'Steps number are required'
                }),
            step_description: Joi.array()
                .items(
                    Joi.string()
                    .required()
                    .messages({
                        'any.required':'Steps description are required'
                    }))
                .required()
                .messages({
                    'any.required':'Steps description are required'
                }),
            step_timer: Joi.array()
                .items(
                    Joi.number()
                    .required()
                    .messages({
                        'any.required':'Steps timer are required'
                    }))
                .required()
                .messages({
                    'any.required':'Steps timer are required'
                }),
            step_ingredients_step_id: Joi.array()
                .items(Joi.number()),
            step_ingredients_ingredient_id: Joi.array()
                .items(Joi.number()),
            step_ingredients_amount: Joi.array()
                .items(Joi.number()),
            step_ingredients_unit: Joi.array()
                .items(Joi.string().max(25))
        });

        try {
            await addRecipeSchema.validateAsync(payload, {abortEarly: false});
            if(req.files){
                next();
            }
            else {
                res.json({message: 'Step Image is required'});
            }
        }
        catch (err) {
            res.json(err)
        }
    }
}