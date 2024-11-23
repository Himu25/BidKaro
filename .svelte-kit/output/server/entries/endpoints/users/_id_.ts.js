import { g as getUserById } from "../../../chunks/users-378baa00.js";
import { c as commonLikedItems, b as likedItems } from "../../../chunks/likes-4b753086.js";
import "../../../chunks/gen-id-1e82b782.js";
import "crypto";
import "../../../chunks/client-a4058cb2.js";
import "redis";
import "../../../chunks/items-6bdef89c.js";
import "../../../chunks/deserialize-09d72f14.js";
import "luxon";
const get = async ({ params, locals }) => {
  const { id } = params;
  const user = await getUserById(id);
  const sharedItems = await commonLikedItems(id, locals.session.userId);
  const liked = await likedItems(id);
  return {
    body: {
      username: user.username,
      sharedItems: (sharedItems || []).map((item) => {
        return {
          ...item,
          endingAt: item.endingAt.toMillis(),
          createdAt: item.createdAt.toMillis()
        };
      }),
      likedItems: (liked || []).map((item) => {
        return {
          ...item,
          endingAt: item.endingAt.toMillis(),
          createdAt: item.createdAt.toMillis()
        };
      })
    }
  };
};
export { get };
