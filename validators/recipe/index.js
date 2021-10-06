const { JSONCookies } = require('cookie-parser');
const Joi = require('joi');

module.exports = {
    addRecipe: async (req, res, next) => {
        const data = req.body;

        const addRecipeSchema = Joi.object({
            name: Joi.string()
                .required()
                .max(255)
                .message({
                    'any.required':'Recipe name is required',
                    'string.max':'Recipe name max length is 255'
                }),
            description: Joi.string()
                .required()
                .message({
                    'any.required':'Description is required'
                }),
            author: Joi.string()
                .required()
                .max(45)
                .message({
                    'any.required':'Author name is required',
                    'string.max':'Author name max length is 45',
                }),
            categories: Joi.array()
                .items(Joi.number().required())
                .required()
                .message({
                    'array.includes':'Categories not valid',
                    'any.required':'Categories are required'
                }),
            steps: Joi.array()
                .required()
                .message({
                    'any.required':'Steps are required'
                }),
            
        })
    }
}