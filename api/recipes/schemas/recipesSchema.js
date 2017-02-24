'use strict';

const Joi = require('joi');

const recipesSchema = {
    deleteRecipes: {
        params: {
            id: Joi.string()
                .required()
                .description('id of the recipes being removed')
        }
    },
    getRecipes: {
        params: {
            username: Joi.string()
                .required()
                .description('Username that will create recipes')
        }
    },
    getRecipe: {
        params: {
            username: Joi.string()
                .required()
                .description('Username that will create recipes'),
            id: Joi.string()
                .required()
                .description('id of the recipes getting selected')
        }
    },
    postRecipes: {
        params: {
            username: Joi.string()
                .required()
                .description('Username that will create recipes')
        },
        payload: {
            name: Joi.string().min(2).max(30).required().description('Name of the recipes for the API'),
            description: Joi.string().description('Description for the recipes')
        }
    },
    updateRecipes: {
        params: {
            id: Joi.string()
                .required()
                .description('id of the recipes being added')
        },
        payload: {
            name: Joi.string().min(2).max(30).required().description('Name of the recipes for the API'),
            description: Joi.string().description('Description for the recipes')
        }
    }
};

module.exports = recipesSchema;
