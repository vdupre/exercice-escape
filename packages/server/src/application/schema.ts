// TODO better use codegen if I had more time to setup it
export const schema = `
    type Query {
        hello: String
    },

    type Mutation {
        colorPixel(color: String!, x: Int!, y: Int!): Pixel
    },

    type Subscription {
        hello: String
    },

    type Pixel {
        x: Int!
        y: Int!
        color: String
    }
`;