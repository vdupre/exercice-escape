import type { PixelGrid } from '$lib/types/grid';
import { subscribe } from './client';

export const onGridChanged = (callback: (newCells: PixelGrid['cells']) => void) => {
	subscribe('subscription { gridUpdated }', (responseStr: string) => {
		const response = JSON.parse(responseStr);
		const newCells = response.data.gridUpdated;

		callback(newCells);
	});
};
