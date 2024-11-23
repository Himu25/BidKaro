import { c as client, e as itemIndexKey } from "../../../chunks/client-a4058cb2.js";
import "crypto";
import "luxon";
import { d as deserialize } from "../../../chunks/deserialize-09d72f14.js";
import "redis";
const searchItems = async (term, size = 5) => {
  const cleaned = term.replaceAll(/[^a-zA-Z0-9 ]/g, "").trim().split(" ").map((word) => {
    return word ? `%${word}%` : "";
  }).join(" ");
  if (cleaned.trim() === "") {
    return [];
  }
  const query = `(@name:(${cleaned})=> {$weight: 5.0}) | (@description:(${cleaned}))`;
  const results = await client.ft.search(itemIndexKey(), query, {
    LIMIT: {
      from: 0,
      size
    }
  });
  return results.documents.map(({ id, value }) => {
    return deserialize(id, value);
  });
};
const get = async ({ url }) => {
  const term = url.searchParams.get("term");
  const items = (await searchItems(term, 5) || []).map((item) => {
    item.id = item.id.replace("items#", "");
    return item;
  });
  return {
    body: { results: items }
  };
};
export { get };
