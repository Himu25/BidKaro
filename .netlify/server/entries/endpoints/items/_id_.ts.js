var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
  get: () => get
});
var import_client_a4058cb2 = __toModule(require("../../../chunks/client-a4058cb2.js"));
var import_crypto = __toModule(require("crypto"));
var import_items_6bdef89c = __toModule(require("../../../chunks/items-6bdef89c.js"));
var import_luxon = __toModule(require("luxon"));
var import_likes_4b753086 = __toModule(require("../../../chunks/likes-4b753086.js"));
var import_bids_8eb6d131 = __toModule(require("../../../chunks/bids-8eb6d131.js"));
var import_redis = __toModule(require("redis"));
var import_gen_id_1e82b782 = __toModule(require("../../../chunks/gen-id-1e82b782.js"));
var import_deserialize_09d72f14 = __toModule(require("../../../chunks/deserialize-09d72f14.js"));
const getSimilarItems = async (itemId) => {
};
const incrementView = async (itemId, userId) => {
  await import_client_a4058cb2.c.incrementView(itemId, userId);
};
const get = async ({ params, locals }) => {
  const item = await (0, import_items_6bdef89c.a)(params.id);
  if (!item) {
    return {
      status: 404,
      body: {
        message: "Item not found"
      }
    };
  }
  await incrementView(item.id, locals.session.userId);
  const userLikes = await (0, import_likes_4b753086.a)(item.id, locals.session.userId);
  const history = await (0, import_bids_8eb6d131.g)(item.id);
  const similarItems = await getSimilarItems(item.id) || [];
  const userHasHighBid = item.highestBidUserId === locals.session.userId;
  return {
    body: {
      item: __spreadProps(__spreadValues({}, item), {
        endingAt: item.endingAt.toMillis(),
        createdAt: item.createdAt.toMillis()
      }),
      userLikes,
      userHasHighBid,
      history,
      similarItems
    }
  };
};
