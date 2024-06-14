import { itemIndexKey } from "$services/keys";
import { client } from "$services/redis";
import { deserialize } from "./deserialize";

interface QueryOpts {
	page: number;
	perPage: number;
	sortBy: string;
	direction: string;
}

export const itemsByUser = async (userId: string, opts: QueryOpts) => {
	const query = `@ownerId:{${userId}}`;

	const sortCriteria = opts.sortBy &&
		opts.direction && {
			BY: opts.sortBy,
			DIRECTION: opts.direction
		};

	const { total, documents } = await client.ft.search(itemIndexKey(), query, {
		SORTBY: sortCriteria,
		LIMIT: {
			from: opts.page * opts.perPage,
			size: opts.perPage
		}
	} as any);	
	return {
		totalPages: Math.ceil(total / opts.perPage),
		items: documents.map((document) => {
			return deserialize(document.id.replace("items#", ""),document.value as any)
		})
	}
};
