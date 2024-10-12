import type { PixelDTO } from './dtos/pixel.dto.js';
import type { Pixel } from '../domain/model/pixel.model.js';
import { colorPixel } from '../domain/behavior/color-pixel.behavior.js';
import { getColors, getGridSize } from '../domain/model/grid.model.js';
import { getCurrentGrid } from '../domain/behavior/get-current-grid.behavior.js';

export const resolvers = {
  Query: {
    pixelGrid: async () => {
      return {
        size: getGridSize(),
        colors: getColors(),
        cells: getCurrentGrid()
      };
    }
  },
  Mutation: {
    colorPixel: async (_: never, pixelDTO: PixelDTO): Promise<PixelDTO> => {
      // TODO missing schema validation - use Zod

      // convert DTO into model, here that the same structure, let's keep it here for the exercice
      // with an IP limitation, the model would be a merge of the DTO and the IP
      const pixel: Pixel = { ...pixelDTO };

      // call the domain
      await colorPixel(pixel);

      // return saved value, here input = output
      return pixelDTO;
    }
  }
};
