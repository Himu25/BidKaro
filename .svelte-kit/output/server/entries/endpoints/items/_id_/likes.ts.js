import { a as getItem } from "../../../../chunks/items-6bdef89c.js";
import { l as likeItem, u as unlikeItem } from "../../../../chunks/likes-4b753086.js";
import "../../../../chunks/client-a4058cb2.js";
import "redis";
import "crypto";
import "../../../../chunks/gen-id-1e82b782.js";
import "../../../../chunks/deserialize-09d72f14.js";
import "luxon";
const post = async ({ params, locals }) => {
  if (!locals.session.userId) {
    return {
      status: 401,
      body: { message: "You must login to do that" }
    };
  }
  await likeItem(params.id, locals.session.userId);
  const item = await getItem(params.id);
  return {
    status: 201,
    body: {
      item: {
        ...item,
        endingAt: item.endingAt.toMillis(),
        createdAt: item.createdAt.toMillis()
      }
    }
  };
};
const del = async ({ params, locals }) => {
  if (!locals.session.userId) {
    return {
      status: 401,
      body: { message: "You must login to do that" }
    };
  }
  await unlikeItem(params.id, locals.session.userId);
  const item = await getItem(params.id);
  return {
    status: 201,
    body: {
      item: {
        ...item,
        endingAt: item.endingAt.toMillis(),
        createdAt: item.createdAt.toMillis()
      }
    }
  };
};
export { del, post };
