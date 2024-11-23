import { c as client, d as itemsKey, i as itemByViewKey, b as itemByEndingTimeKey, a as itemByPriceKey } from "./client-a4058cb2.js";
import "crypto";
import { g as genId } from "./gen-id-1e82b782.js";
import { d as deserialize } from "./deserialize-09d72f14.js";
const serialize = (attrs) => {
  return {
    ...attrs,
    createdAt: attrs.createdAt.toMillis(),
    endingAt: attrs.endingAt.toMillis()
  };
};
const getItem = async (id) => {
  const item = await client.hGetAll(itemsKey(id));
  if (Object.keys(item).length === 0) {
    return null;
  }
  return deserialize(id, item);
};
const getItems = async (ids) => {
  const commands = ids && ids.map((id) => {
    return client.hGetAll(itemsKey(id));
  });
  const results = await Promise.all(commands);
  return results.map((result, i) => {
    if (Object.keys(result).length === 0) {
      return null;
    }
    return deserialize(ids[i], result);
  });
};
const createItem = async (attrs) => {
  const id = genId();
  const serialized = serialize(attrs);
  const commands = [
    client.hSet(itemsKey(id), serialized),
    client.zAdd(itemByViewKey(), {
      value: id,
      score: 0
    }),
    client.zAdd(itemByEndingTimeKey(), {
      value: id,
      score: attrs.endingAt.toMillis()
    }),
    client.zAdd(itemByPriceKey(), {
      value: id,
      score: 0
    })
  ];
  await Promise.all(commands);
  return id;
};
export { getItem as a, createItem as c, getItems as g };
