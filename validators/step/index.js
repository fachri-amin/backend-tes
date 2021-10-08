const Joi = require('joi');

module.exports = {
    addStep: async (req, res, next) => {
        const payload = req.body;

        const addStepSchema = Joi.object({
            step_number: Joi.number()
                .required()
                .messages({
                    'any.required':'Step number is required'
                }),
            description: Joi.string()
                .required()
                .messages({
                    'any.required':'Step description is required'
                }),
            timer: Joi.number()
                .required()
                .messages({
                    'any.required':'Step timer is required'
                }),
            step_ingredients_ingredient_id: Joi.array()
                .items(Joi.number()),
            step_ingredients_amount: Joi.array()
                .items(Joi.number()),
            step_ingredients_unit: Joi.array()
                .items(Joi.string().max(25))
        });

        try {
            await addStepSchema.validateAsync(payload, {abortEarly: false});
            if(req.file){
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