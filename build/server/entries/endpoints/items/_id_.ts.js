import { c as client } from "../../../chunks/client-a4058cb2.js";
import "crypto";
import { a as getItem } from "../../../chunks/items-6bdef89c.js";
import "luxon";
import { a as userLikesItem } from "../../../chunks/likes-4b753086.js";
import { g as getBidHistory } from "../../../chunks/bids-8eb6d131.js";
import "redis";
import "../../../chunks/gen-id-1e82b782.js";
import "../../../chunks/deserialize-09d72f14.js";
const getSimilarItems = async (itemId) => {
};
const incrementView = async (itemId, userId) => {
  await client.incrementView(itemId, userId);
};
const get = async ({ params, locals }) => {
  const item = await getItem(params.id);
  if (!item) {
    return {
      status: 404,
      body: {
        message: "Item not found"
      }
    };
  }
  await incrementView(item.id, locals.session.userId);
  const userLikes = await userLikesItem(item.id, locals.session.userId);
  const history = await getBidHistory(item.id);
  const similarItems = await getSimilarItems(item.id) || [];
  const userHasHighBid = item.highestBidUserId === locals.session.userId;
  return {
    body: {
      item: {
        ...item,
        endingAt: item.endingAt.toMillis(),
        createdAt: item.createdAt.toMillis()
      },
      userLikes,
      userHasHighBid,
      history,
      similarItems
    }
  };
};
export { get };
