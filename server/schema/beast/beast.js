'use strict';

const graphql = require('graphql');

const beastType = new graphql.GraphQLObjectType({
    name: 'BeastType',
    fields: {
        id: {
            type: graphql.GraphQLString
        },
        name: {
            type: graphql.GraphQLString
        },
        img: {
            type: graphql.GraphQLString
        },
        desc: {
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
        return {
            id: '55565',
            name: 'Alizor of Westacottus',
            img: 'https://vignette.wikia.nocookie.net/harrypotter/images/7/71/Alizor_of_Westacottus.jpg/revision/latest/window-crop/width/200/x-offset/39/y-offset/0/window-width/462/window-height/461?cb=20100624142303',
            desc: 'The Alizor of Westacottus was a magical creature with a rotund body, long, spindly limbs, large feet, large, round ears and a long, pointed nose. This creature was covered in The Monster Book of Monsters, and was therefore included in the third-year Care of Magical Creatures curriculum at Hogwarts School of Witchcraft and Wizardry under Professor Rubeus Hagrid.'
        };
    }
};