import { getPixelGrid } from '$lib/graphql/queries.js';
import { colorPixel } from '$lib/graphql/mutations.js';

export const load = async () => {
	const pixelGrid = await getPixelGrid();

	return {
		pixelGrid
	};
};

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		const x = Number(data.get('x') as string);
		const y = Number(data.get('y') as string);
		const color = data.get('color') as string;

		await colorPixel(x, y, color);
	}
};
