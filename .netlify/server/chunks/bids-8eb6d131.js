var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  c: () => createBid,
  g: () => getBidHistory
});
var import_client_a4058cb2 = __toModule(require("./client-a4058cb2.js"));
var import_crypto = __toModule(require("crypto"));
var import_luxon = __toModule(require("luxon"));
var import_items_6bdef89c = __toModule(require("./items-6bdef89c.js"));
const withLock = async (key, cb) => {
  const retryDelayMs = 100;
  let retries = 20;
  const token = (0, import_crypto.randomBytes)(6).toString("hex");
  const lockKey = `lock:${key}`;
  while (retries <= 20) {
    retries--;
    const acquire = import_client_a4058cb2.c.set(lockKey, token, {
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
      await import_client_a4058cb2.c.unlock(lockKey, token);
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
    const item = await (0, import_items_6bdef89c.a)(attrs.itemId);
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
      import_client_a4058cb2.c.rPush((0, import_client_a4058cb2.f)(attrs.itemId), serializeBidHistory(attrs.amount, attrs.createdAt.toMillis())),
      import_client_a4058cb2.c.hSet((0, import_client_a4058cb2.d)(attrs.itemId), {
        price: attrs.amount,
        bids: item.bids + 1,
        highestBidUserId: attrs.userId
      }),
      import_client_a4058cb2.c.zAdd((0, import_client_a4058cb2.a)(), {
        value: item.id,
        score: attrs.amount
      })
    ]);
  });
};
const getBidHistory = async (itemId, offset = 0, count = 10) => {
  const bids = await import_client_a4058cb2.c.lRange((0, import_client_a4058cb2.f)(itemId), -1 * offset - count, -1 * offset - 1);
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
    createdAt: import_luxon.DateTime.fromMillis(parseInt(createdAt))
  };
};
