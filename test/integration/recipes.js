'use strict';

const Code = require('code');
const Lab = require('lab');
const expect = Code.expect;
const lab = exports.lab = Lab.script();
const User = require('../../api/recipes/model/Recipes');
const sinon = require('sinon');

//BDD
const describe = lab.describe;
const it = lab.it;
const before = lab.before;
const after = lab.after;

//pull in hapi server
const Server = require('../../server.js');
let apiResponse = null;

describe('Recipes: ', () => {

});
