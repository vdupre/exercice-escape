type Grid = Record<number, Record<number, string | null>>;

// TEMP in memory grid
let inMemoryGrid: Grid = Array.from({ length: 10 }, () => Array(10).fill(null));

export const getCurrentGrid = async (): Promise<Grid> => {
    return inMemoryGrid;
};

export const updateGrid = async (newGrid: Grid): Promise<void> => {
    inMemoryGrid = newGrid;
};