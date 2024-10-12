import { gql } from '$lib/graphql';
import { z } from 'zod';

// const model = z.object({
// 	data: z.object({
// 		hello: z.string()
// 	})
// });

// const model = z.object({
// 	data: z.object({
// 	  size: z.number(),
// 	  cells: z.array(z.array(z.string().nullable())),
// 	})
//   });

export const load = async () => {
	const response = await gql(/* GraphQL */ `
		query pixelGrid {
			pixelGrid {
				size
				cells
			}
		}
	`); //.then((response) => console.log({data: response.data}) /*model.parse(res).data*/);

	const { size, cells } = response.data.pixelGrid;

	return {
		size,
		cells
	};
};

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		const x = Number(data.get('x') as string);
		const y = Number(data.get('y') as string);
		const color = data.get('color') as string;

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
	}
};
