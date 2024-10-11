import { getCurrentGrid, updateGrid } from "../../infrastructure/grid-storage.js";
import type { Pixel } from "../model/pixel.model.js";

export const colorPixel = async (pixel: Pixel) => {
    // get current values
    let grid: Record<number, Record<number, string | null>> = await getCurrentGrid();

    // update grid
    // @ts-ignore see TODO in the resolver for the missing validation
    grid[pixel.x][pixel.y] = pixel.color;

    // save new values
    updateGrid(grid);
};