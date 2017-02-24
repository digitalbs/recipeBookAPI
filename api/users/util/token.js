'use strict';

const jwt = require('jsonwebtoken');
const secret = require('../../../config').secret;

function createToken(user) {
    let scopes = [];

    scopes.push(`recipes_${user.username}`);

    //check if user object passed in
    //has admin set to true, if so set scopes to admin
    if (user.admin) {
        scopes.push('admin');
    }



    //sign JWT
    return jwt.sign({
        id: user._id,
        username: user.username,
        scope: scopes
    }, secret, {
        algorithm: 'HS256',
        expiresn: '1h'
    });
}

module.exports = createToken;
