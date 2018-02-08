'use strict';

import request from 'superagent';

const path = '/graphql';
const queryParam = '?graphqlQuery=';

function getQuery(beastId) {
    return `
    {
        beast(id: ${beastId}) {
            id
            name
            description
            image
        }
    }
    `;
}

function getBeast(beastId) {
    return request.get(path + queryParam + getQuery(beastId));
}

export default getBeast;