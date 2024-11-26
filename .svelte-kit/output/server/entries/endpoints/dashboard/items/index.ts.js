import { c as client, e as itemIndexKey } from "../../../../chunks/client-a4058cb2.js";
import "crypto";
import "luxon";
import { d as deserialize } from "../../../../chunks/deserialize-09d72f14.js";
import "redis";
const itemsByUser = async (userId, opts) => {
  const query = `@ownerId:{${userId}}`;
  const sortCriteria = opts.sortBy && opts.direction && {
    BY: opts.sortBy,
    DIRECTION: opts.direction
  };
  const { total, documents } = await client.ft.search(itemIndexKey(), query, {
    SORTBY: sortCriteria,
    LIMIT: {
      from: opts.page * opts.perPage,
      size: opts.perPage
    }
  });
  return {
    totalPages: Math.ceil(total / opts.perPage),
    items: documents.map((document) => {
      return deserialize(document.id.replace("items#", ""), document.value);
    })
  };
};
const get = async ({ url, locals }) => {
  try {
    const sort = {
      page: parse(url.searchParams.get("page"), 0),
      perPage: parse(url.searchParams.get("perPage"), 10),
      sortBy: url.searchParams.get("sortBy") ?? "",
      direction: url.searchParams.get("direction") ?? "",
      tag: (url.searchParams.get("tag") ?? "").replace(/[^a-zA-Z0-9 -]/gi, "")
    };
    const { items, totalPages } = await itemsByUser(locals.session.userId, sort);
    return {
      body: { items, totalPages }
    };
  } catch (error) {
    console.error("Error fetching items:", error);
    return {
      status: 500,
      body: { message: "An error occurred while fetching the items." }
    };
  }
};
const parse = (val, def) => {
  const parsed = parseInt(val);
  if (isNaN(parsed)) {
    return def;
  } else {
    return parsed;
  }
};
export { get };
