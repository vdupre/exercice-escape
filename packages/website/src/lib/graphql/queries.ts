import type { PixelGrid } from '$lib/types/grid';
import { gql } from './client';

export const getPixelGrid = async (): Promise<PixelGrid> => {
	const response = await gql(`
		query pixelGrid {
			pixelGrid {
				size
				colors
				cells
			}
		}
	`);

	return response.data.pixelGrid;
};
