// TODO better use graphql codegen or pothos if I had more time to setup it
export const schema = `
    type Query {
        pixelGrid: PixelGrid
    },

    type Mutation {
        colorPixel(color: String!, x: Int!, y: Int!): Pixel
    },

    type Pixel {
        x: Int!
        y: Int!
        color: String
    },

    scalar Color,
    
    type PixelGrid {
        size: Int!
        cells: [[Color]]
    }
`;
