'use strict';

const request = require('request-promise');
const Promise = require('bluebird');

const BASE_PATH = 'http://harrypotter.wikia.com/api/v1/Articles/';

function getBeast(id) {
    return request({
        uri: BASE_PATH + 'Details?ids=' + id.toString() + '&abstract=500&width=200&height=200',
        json: true
    }).then((beastDescription) => {
        return {
            id: id,
            name: beastDescription.items[id.toString()].title,
            description: beastDescription.items[id.toString()].abstract,
            image: beastDescription.items[id.toString()].thumbnail
        };
    });
}

//Category of beasts (e.g. Beasts, Phoenixes)
function getBeasts(limit = 200) {
    return request({
        uri: BASE_PATH + 'List?expand=1&category=Beasts&limit=200',
        json: true
    }).then((beasts) => {
        return beasts.items.map((item) => {
            return {
                id: item.id,
                name: item.title,
                description: item.abstract,
                image: item.thumbnail
            }
        })
    });
}

module.exports = {
    getBeast,
    getBeasts
};