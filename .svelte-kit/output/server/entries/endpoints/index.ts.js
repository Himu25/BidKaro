import { c as client, i as itemByViewKey, a as itemByPriceKey, b as itemByEndingTimeKey } from "../../chunks/client-a4058cb2.js";
import "crypto";
import { g as getItems } from "../../chunks/items-6bdef89c.js";
import "luxon";
import "redis";
import "../../chunks/gen-id-1e82b782.js";
import "../../chunks/deserialize-09d72f14.js";
const itemsByViews = async (order = "DESC", offset = 0, count = 10) => {
  if (order === "ASC") {
    const ids = await client.zRange(itemByViewKey(), "0", "+inf", {
      BY: "SCORE",
      LIMIT: {
        offset,
        count
      }
    });
    return await getItems(ids);
  } else {
    const ids = await client.zRange(itemByViewKey(), "+inf", "0", {
      REV: true,
      BY: "SCORE",
      LIMIT: {
        offset,
        count
      }
    });
    return await getItems(ids);
  }
};
const itemsByPrice = async (order = "DESC", offset = 0, count = 10) => {
  if (order === "ASC") {
    const ids = await client.zRange(itemByPriceKey(), "0", "+inf", {
      BY: "SCORE",
      LIMIT: {
        offset,
        count
      }
    });
    return getItems(ids);
  }
  if (order === "DESC") {
    const ids = await client.zRange(itemByPriceKey(), "+inf", "0", {
      BY: "SCORE",
      LIMIT: {
        offset,
        count
      },
      REV: true
    });
    return getItems(ids);
  }
};
const itemsByEndingTime = async (order = "DESC", offset = 0, count = 10) => {
  if (order === "ASC") {
    const ids = await client.zRangeByScore(itemByEndingTimeKey(), Date.now(), "+inf", {
      LIMIT: {
        offset,
        count
      }
    });
    console.log(ids);
    return await getItems(ids);
  }
};
const get = async () => {
  const [endingSoonest, mostViews, highestPrice] = await Promise.all([
    itemsByEndingTime("ASC", 0, 10),
    itemsByViews("DESC", 0, 10),
    itemsByPrice("DESC", 0, 10)
  ]);
  return {
    body: { endingSoonest, mostViews, highestPrice }
  };
};
export { get };
