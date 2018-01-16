'use strict';

const graphql = require('graphql');
const client = require('./beast.client');
const get = require('lodash.get');

const beastType = new graphql.GraphQLObjectType({
    name: 'BeastType',
    fields: {
        items : {
            type: graphql.GraphQLString
        }
    }
});

module.exports = {
    type: beastType,
    args: {
        id: {
            type: graphql.GraphQLInt
        }
    },
    resolve: (root, args) => {
        return client.getBeast(args.id);
    }
};