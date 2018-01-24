'use strict';

import request from 'superagent';

const path = '/graphql';
const queryParam = '?graphqlQuery=';

function getQuery() {
    return `
    {
        beasts {
            id
            name
            description
            image
        }
    }
    `;
}

function getBeasts() {
    return request.get(path + queryParam + getQuery());
}

export default getBeasts;