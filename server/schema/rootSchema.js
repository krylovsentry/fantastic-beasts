'use strict';

const graphql = require('graphql');
const beastType = require('./beast/beast');

const schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Query',
        fields: {
            beast: beastType
        }
    })
});

module.exports = schema;