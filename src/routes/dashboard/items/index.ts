import type { RequestHandler } from "@sveltejs/kit";
import { itemsByUser } from "$services/queries/items";

export const get: RequestHandler<any, any> = async ({ url, locals }) => {
  try {
    const sort = {
      page: parse(url.searchParams.get("page"), 0),
      perPage: parse(url.searchParams.get("perPage"), 10),
      sortBy: url.searchParams.get("sortBy") ?? "",
      direction: url.searchParams.get("direction") ?? "",
      tag: (url.searchParams.get("tag") ?? "").replace(/[^a-zA-Z0-9 -]/gi, ""),
    };

    const { items, totalPages } = await itemsByUser(
      locals.session.userId,
      sort
    );

    return {
      body: { items, totalPages },
    };
  } catch (error) {
    console.error("Error fetching items:", error);
    return {
      status: 500,
      body: { message: "An error occurred while fetching the items." },
    };
  }
};

const parse = (val: string, def: number) => {
  const parsed = parseInt(val);
  if (isNaN(parsed)) {
    return def;
  } else {
    return parsed;
  }
};
