type Grid = Record<number, Record<number, string | null>>;

const SIZE = 10;


// TEMP in memory grid
// TODO instead save a stringify JSON somewher on the server
let inMemoryGrid: Grid = Array.from({ length: SIZE }, () => Array(10).fill(null));

export const getGridSize = () => SIZE;

export const getCurrentGrid = async (): Promise<Grid> => {
    return inMemoryGrid;
};

export const updateGrid = async (newGrid: Grid): Promise<void> => {
    inMemoryGrid = newGrid;
};