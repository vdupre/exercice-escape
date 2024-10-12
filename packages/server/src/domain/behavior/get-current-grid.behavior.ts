import type { Grid } from '../model/grid.model.js';
import { readGrid } from '../../infrastructure/storage/file.storage.js';
import { initGridIsNeeded } from './init-grid-if-needed.behavior.js';

export const getCurrentGrid = async (): Promise<Grid> => {
  await initGridIsNeeded();
  return readGrid();
};
