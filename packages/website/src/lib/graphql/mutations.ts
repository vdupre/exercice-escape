import { gql } from './client';

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
