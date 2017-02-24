'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    username: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    },
    recipes: [{
        name: {
            type: String
        },
        description: {
            type: String
        }
    }]
});

module.exports = mongoose.model('User', userModel);
