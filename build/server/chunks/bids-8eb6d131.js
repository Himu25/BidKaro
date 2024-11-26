import { c as client, f as bidHistoryKey, d as itemsKey, a as itemByPriceKey } from "./client-a4058cb2.js";
import { randomBytes } from "crypto";
import { DateTime } from "luxon";
import { a as getItem } from "./items-6bdef89c.js";
const withLock = async (key, cb) => {
  const retryDelayMs = 100;
  let retries = 20;
  const token = randomBytes(6).toString("hex");
  const lockKey = `lock:${key}`;
  while (retries <= 20) {
    retries--;
    const acquire = client.set(lockKey, token, {
      NX: true,
      PX: 2e3
    });
    if (!acquire) {
      await pause(retryDelayMs);
      continue;
    }
    try {
      const signal = { expired: false };
      setTimeout(() => {
        signal.expired = true;
      }, 2e3);
      const result = await cb(signal);
      return result;
    } finally {
      await client.unlock(lockKey, token);
    }
  }
};
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
const createBid = async (attrs) => {
  await withLock(attrs.itemId, async (signal) => {
    const item = await getItem(attrs.itemId);
    if (!item) {
      throw new Error("Item doesn't exists");
    }
    if (item.price >= attrs.amount) {
      throw new Error("Bid amount is less than previous bid");
    }
    if (item.endingAt.toMillis() <= Date.now()) {
      throw new Error("Bidding is no longer open");
    }
    if (signal.expired) {
      throw new Error("Lock Expired");
    }
    await Promise.all([
      client.rPush(bidHistoryKey(attrs.itemId), serializeBidHistory(attrs.amount, attrs.createdAt.toMillis())),
      client.hSet(itemsKey(attrs.itemId), {
        price: attrs.amount,
        bids: item.bids + 1,
        highestBidUserId: attrs.userId
      }),
      client.zAdd(itemByPriceKey(), {
        value: item.id,
        score: attrs.amount
      })
    ]);
  });
};
const getBidHistory = async (itemId, offset = 0, count = 10) => {
  const bids = await client.lRange(bidHistoryKey(itemId), -1 * offset - count, -1 * offset - 1);
  const bids_ = bids.map((bid) => {
    return deserializeBidHistory(bid);
  });
  return bids_;
};
const serializeBidHistory = (amount, createdAt) => {
  return `${amount}:${createdAt}`;
};
const deserializeBidHistory = (bid) => {
  const [amount, createdAt] = bid.split(":");
  return {
    amount: parseFloat(amount),
    createdAt: DateTime.fromMillis(parseInt(createdAt))
  };
};
export { createBid as c, getBidHistory as g };
