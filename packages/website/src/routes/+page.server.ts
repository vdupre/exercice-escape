import { gql } from '$lib/graphql';
import { z } from 'zod';

const model = z.object({
	data: z.object({
		hello: z.string()
	})
});

export const load = async () => {
	return gql(/* GraphQL */ `
		query {
			hello
		}
	`).then((res) => model.parse(res).data);
};

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        const x = data.get('x') as string;
        const y = data.get('y') as string;
        const color = data.get('color') as string;

        console.log({ x, y, color }); // TODO send to the server
    },
};