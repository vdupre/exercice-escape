import type { GridEntity } from '../../infrastructure/entities/grid.entity.js';
import type { Pixel } from './pixel.model.js';

// because of the exercice context without complex business object, the structure of the model and the entity are identical
// it might feel a bit overkill to split into 2 concepts for the sake of DDD structure
// here is a compromise to avoid code duplication,
// as the domain is allowed to know the infrastructure (the opposite is not true), the model type copy the infra one
export type Grid = GridEntity;

const SIZE = 10;

export const generateEmptyGrid = (): Grid =>
  Array.from({ length: SIZE }, () => Array(10).fill(null));

export const getGridSize = () => SIZE;

export const updateGridWithPixel = (grid: Grid, pixel: Pixel): Grid => {
  const { x, y, color } = pixel;
  let newGrid = structuredClone(grid);

  // security: should happen thanks for the application layer validation, but just in case
  if (newGrid[x] === undefined || newGrid[x][y] === undefined) {
    throw new Error('Invalid pixel coordinates');
  }

  newGrid[x][y] = color;

  return newGrid;
};
