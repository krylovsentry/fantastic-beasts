'use strict';

const graphql = require('graphql');
const beastType = require('./beast/beast');

const schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Query',
        fields: {
            beast: beastType,
            beasts: {
                type: new graphql.GraphQLList(beastType.type),
                resolve: beastType.resolve
            }
        }
    })
});

module.exports = schema;