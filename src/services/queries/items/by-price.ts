import { itemByPriceKey } from "$services/keys";
import { client } from "$services/redis";
import { getItems } from "./items";

export const itemsByPrice = async (order: 'DESC' | 'ASC' = 'DESC', offset = 0, count = 10) => {
    if (order === 'ASC') {
        const ids = await client.zRange(itemByPriceKey(), "0", "+inf", {
            BY: "SCORE",
            LIMIT: {
                offset,count
            }
        })
        return getItems(ids)
    } 
    if (order === "DESC") {
        const ids = await client.zRange(itemByPriceKey(), "+inf", "0", {
            BY: "SCORE",
            LIMIT: {
                offset,count
            },
            REV: true,
        })
        return getItems(ids)
    }
};
