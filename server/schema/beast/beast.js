'use strict';

const graphql = require('graphql');
const client = require('./beast.client');

const beastType = new graphql.GraphQLObjectType({
    name: 'BeastType',
    fields: {
        id: {
            type: graphql.GraphQLString
        },
        title: {
            type: graphql.GraphQLString
        },
        thumbnail: {
            type: graphql.GraphQLString
        },
        abstract: {
            type: graphql.GraphQLString
        }
    }
});

const categoryType

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