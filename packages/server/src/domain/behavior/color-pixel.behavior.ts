import { initGridIsNeeded } from './init-grid-if-needed.behavior.js';
import { updateGridWithPixel, type Grid } from '../model/grid.model.js';
import type { Pixel } from '../model/pixel.model.js';
import {
  readGrid,
  saveGrid
} from '../../infrastructure/storage/file.storage.js';

export const colorPixel = async (pixel: Pixel) => {
  await initGridIsNeeded();

  let grid: Grid = await readGrid();

  const updatedGrid = updateGridWithPixel(grid, pixel);

  saveGrid(updatedGrid);
};
