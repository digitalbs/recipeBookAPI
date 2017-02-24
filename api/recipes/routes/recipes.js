'use strict';

const bcrypt = require('bcrypt');
const Boom = require('boom');
const Recipes = require('../model/Recipes');
const User = require('../../users/model/User');
const recipesSchema = require('../schemas/recipesSchema');
const Joi = require('joi');
const Promise = require('bluebird');

module.exports = [{
    method: 'GET',
    path: '/{username}/recipes',
    config: {
        description: 'Get all recipes',
        notes: ['Gets all recipes in Database'],
        handler: (req, res) => {
            User
                .findOne({
                    username: req.params.username
                })
                .exec((err, user) => {
                    if (err) {
                        throw Boom.badRequest(err);
                    }

                    res(user.recipes || []).code(200);
                });
        },
        tags: ['api'],
        auth: {
            scope: ['recipes_{params.username}']
        },
        validate: recipesSchema.getRecipes
    }
}, {
    method: 'POST',
    path: '/{username}/recipes',
    config: {
        description: 'Create a recipes',
        notes: ['This endpoint will create a recipes.'],
        handler: (req, res) => {
            User
                .findOne({
                    username: req.params.username
                }).exec((err, user) => {

                user.recipes.push({
                    name: req.payload.name,
                    description: req.payload.description
                });

                user.save((err, user) => {
                    if (err) {
                        throw Boom.badRequest(err);
                    }

                    res({
                        name: req.payload.name,
                        description: req.payload.description
                    }).code(201);
                });
            });

        },
        tags: ['api'],
        auth: {
            scope: ['recipes_{params.username}']
        },
        validate: recipesSchema.postRecipes
    }
}];
