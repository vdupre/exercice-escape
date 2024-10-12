import { promises as fs } from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import type { GridEntity } from '../entities/grid.entity.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../../../storage/pixel-grid.json');

export const isGridInitialized = async (): Promise<boolean> => {
    try {
        await fs.access(filePath, fs.constants.W_OK);
        return true;
    } catch {
        return false;
    }
}

export const saveGrid = async (grid: GridEntity): Promise<void> =>  {
    await fs.writeFile(filePath, JSON.stringify(grid));
}

export const readGrid = async (): Promise<GridEntity> => {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
};
