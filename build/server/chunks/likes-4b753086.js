import { c as client, u as userLikesKey, d as itemsKey } from "./client-a4058cb2.js";
import "crypto";
import { g as getItems } from "./items-6bdef89c.js";
import "luxon";
const userLikesItem = async (itemId, userId) => {
  return client.sIsMember(userLikesKey(userId), itemId);
};
const likedItems = async (userId) => {
  const ids = await client.sMembers(userLikesKey(userId));
  return getItems(ids);
};
const likeItem = async (itemId, userId) => {
  const inserted = await client.sAdd(userLikesKey(userId), itemId);
  if (inserted) {
    return client.hIncrBy(itemsKey(itemId), "likes", 1);
  }
};
const unlikeItem = async (itemId, userId) => {
  const removed = await client.sRem(userLikesKey(userId), itemId);
  if (removed) {
    return client.hIncrBy(itemsKey(itemId), "likes", -1);
  }
};
const commonLikedItems = async (userOneId, userTwoId) => {
  const ids = await client.sInter([userLikesKey(userOneId), userLikesKey(userTwoId)]);
  return getItems(ids);
};
export { userLikesItem as a, likedItems as b, commonLikedItems as c, likeItem as l, unlikeItem as u };
