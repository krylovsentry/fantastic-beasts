'use strict';

const request = require('request-promise');
const Promise = require('bluebird');

const BASE_PATH = 'http://harrypotter.wikia.com/api/v1/Articles/';

function getBeast(id) {
    return request({
        uri: BASE_PATH + 'AsSimpleJson?id=' + id.toString(),
        json: true
    }).then((beastDescription) => {
        return beastDescription.sections;
    });
}

//Category of beasts (e.g. Beasts, Phoenixes)
function getBeasts(limit = 200) {
    return request({
        uri: BASE_PATH + 'List?expand=1&category=Beasts&limit=200',
        json: true
    });
}

module.exports = {
    getBeast,
    getBeasts
};