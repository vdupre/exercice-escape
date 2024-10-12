import { isGridInitialized, saveGrid } from "../../infrastructure/storage/file.storage.js";
import { generateEmptyGrid, type Grid } from "../model/grid.model.js";

export const initGridIsNeeded = async (): Promise<void> => {
    // already exists, do nothing
    if (await isGridInitialized()) {
        return;
    }
        
    // generate and save a new grid
    const emptyGrid: Grid = generateEmptyGrid();
    await saveGrid(emptyGrid);
};