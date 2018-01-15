'use strict';

const request = require('request-promise');
const Promise = require('bluebird');

const BASE_PATH = 'http://harrypotter.wikia.com/api/v1/Articles/';

function getBeast(id) {
    return ({
        uri: BASE_PATH + 'AsSimpleJson?id=' + id.toString(),
        json: true
    });
}

function getBeasts() {
    
}

module.exports = {
    getBeast
};