import { itemByEndingTimeKey } from "$services/keys";
import { client } from "$services/redis";
import { getItems } from "./items";

export const itemsByEndingTime = async (
	order: 'DESC' | 'ASC' = 'DESC',
	offset = 0,
	count = 10
) => {	
	if (order === "ASC") {
		const ids = await client.zRangeByScore(itemByEndingTimeKey(), Date.now(), "+inf", {
			LIMIT: {
    offset,count
			}
		})
		console.log(ids);
		
		return await getItems(ids)
	}
};
