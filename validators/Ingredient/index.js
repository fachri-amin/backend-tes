const Joi = require('joi');

module.exports = {
    addIngredient: async (req, res, next) => {
        const payload = req.body;
        
        const addIngredientSchema = Joi.object({
            name: Joi.string()
            .required()
            .max(45)
                .messages({
                    'any.required':'Ingredient name is required',
                    'string.max':'Ingredient name max length is 45'
                }),
                color: Joi.number()
                .required()
                .messages({
                    'any.required':'Ingredient color is required',
                })
            });
            
        try {
            await addIngredientSchema.validateAsync(payload, {abortEarly: false});
            if(req.file){
                if(req.file.fieldname == 'img'){
                    next();
                }
                else {
                    res.json({message: "Ingredient image is required"})
                }
            }
            else {
                res.json({message: "Ingredient image is required"})
            }
        }
        catch (err) {
            res.json(err)
        }
    }
}