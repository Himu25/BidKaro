import { DateTime } from "luxon";
import { c as createItem } from "../../../../chunks/items-6bdef89c.js";
import "../../../../chunks/client-a4058cb2.js";
import "redis";
import "crypto";
import "../../../../chunks/gen-id-1e82b782.js";
import "../../../../chunks/deserialize-09d72f14.js";
const createImageUrl = () => {
  return `https://realrealreal-redis.s3.amazonaws.com/${~~(Math.random() * 198) + 1}.jpg`;
};
const post = async ({ request, locals }) => {
  const data = await request.json();
  const id = await createItem({
    name: data.name,
    description: data.description,
    createdAt: DateTime.now(),
    endingAt: DateTime.now().plus({ seconds: data.duration }),
    imageUrl: createImageUrl(),
    ownerId: locals.session.userId,
    highestBidUserId: "",
    price: 0,
    views: 0,
    likes: 0,
    bids: 0,
    status: ""
  }, locals.session.userId);
  return {
    status: 200,
    body: {
      id
    }
  };
};
export { post };
