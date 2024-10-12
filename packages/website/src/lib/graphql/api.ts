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

	return response.data.pixelGrid as PixelGrid;
};

export const colorPixel = async (x: number, y: number, color: string): Promise<void> => {
	await gql(
		`
        mutation colorPixel ($color: String!, $x: Int!, $y: Int!) {
            colorPixel(color: $color, x: $x, y: $y) {
                color
                x
                y
            }
        }
    `,
		{
			x,
			y,
			color
		}
	);
};
