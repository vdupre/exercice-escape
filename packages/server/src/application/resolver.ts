import { createPubSub } from 'graphql-yoga';
import type { PixelDTO } from './dtos/pixel.dto.js';
import type { Pixel } from '../domain/model/pixel.model.js';
import { colorPixel } from '../domain/behavior/color-pixel.behavior.js';
import { getCurrentGrid, getGridSize } from '../infrastructure/grid-storage.js';

export const pubsub = createPubSub<{
    hello: [string];
  }>();

export const resolvers = {
    Query: {
      hello: () => 'world',
      pixelGrid: async () => {
        return {
          size: getGridSize(),
          cells: getCurrentGrid()
        };
      },
    },
    Mutation: {
        colorPixel: async (_: never, pixelDTO: PixelDTO) => {
            // TODO missing schema validation - use Zod

            // convert dto into model, here that the same structure, let's keep it here for the exercice
            const pixel: Pixel = pixelDTO; 

            await colorPixel(pixel);
        }
    },
    Subscription: {
      hello: {
        subscribe: () => pubsub.subscribe('hello'),
        resolve: (payload: any) => payload
      }
    }
  }

