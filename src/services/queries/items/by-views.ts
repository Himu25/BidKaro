import { itemByViewKey } from "$services/keys";
import { client } from "$services/redis";
import { getItems } from "./items";

export const itemsByViews = async (order: 'DESC' | 'ASC' = 'DESC', offset = 0, count = 10) => {
    if (order === "ASC") {
        const ids = await client.zRange(itemByViewKey(), "0", "+inf", {
            BY: "SCORE",
            LIMIT: {
                offset, count
            }
        })
        return await getItems(ids)
    } else {
        const ids = await client.zRange(itemByViewKey(), "+inf", "0", {
            REV: true,
            BY: "SCORE",
            LIMIT: {
                offset, count
            }
        })
        return await getItems(ids)
    }
};
