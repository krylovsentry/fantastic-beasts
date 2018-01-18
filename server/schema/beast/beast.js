'use strict';

const graphql = require('graphql');
const client = require('./beast.client');
const get = require('lodash.get');

const beastType = new graphql.GraphQLObjectType({
    name: 'BeastType',
    fields: {
        title: {
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
        if (get(args, 'id')) {
            return client.getBeast(args.id);
        } else {
            return client.getBeasts();
        }
    }
};