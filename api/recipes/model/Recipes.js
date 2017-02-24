'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipesModel = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('recipes', recipesModel);
