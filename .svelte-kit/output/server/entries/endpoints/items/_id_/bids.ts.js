import { DateTime } from "luxon";
import { c as createBid } from "../../../../chunks/bids-8eb6d131.js";
import { a as getItem } from "../../../../chunks/items-6bdef89c.js";
import "../../../../chunks/client-a4058cb2.js";
import "redis";
import "crypto";
import "../../../../chunks/gen-id-1e82b782.js";
import "../../../../chunks/deserialize-09d72f14.js";
const post = async ({ request, params, locals }) => {
  if (!locals.session.userId) {
    return {
      status: 401,
      body: { message: "You must login to do that" }
    };
  }
  const item = await getItem(params.id);
  if (!item) {
    return {
      status: 404,
      body: { message: "item not found" }
    };
  }
  const body = await request.json();
  await createBid({
    itemId: params.id,
    userId: locals.session.userId,
    amount: body.amount,
    createdAt: DateTime.now(),
    itemEndingAt: item.endingAt
  });
  return {
    status: 201
  };
};
export { post };
