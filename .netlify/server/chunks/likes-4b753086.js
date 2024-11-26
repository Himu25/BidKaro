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
  a: () => userLikesItem,
  b: () => likedItems,
  c: () => commonLikedItems,
  l: () => likeItem,
  u: () => unlikeItem
});
var import_client_a4058cb2 = __toModule(require("./client-a4058cb2.js"));
var import_crypto = __toModule(require("crypto"));
var import_items_6bdef89c = __toModule(require("./items-6bdef89c.js"));
var import_luxon = __toModule(require("luxon"));
const userLikesItem = async (itemId, userId) => {
  return import_client_a4058cb2.c.sIsMember((0, import_client_a4058cb2.u)(userId), itemId);
};
const likedItems = async (userId) => {
  const ids = await import_client_a4058cb2.c.sMembers((0, import_client_a4058cb2.u)(userId));
  return (0, import_items_6bdef89c.g)(ids);
};
const likeItem = async (itemId, userId) => {
  const inserted = await import_client_a4058cb2.c.sAdd((0, import_client_a4058cb2.u)(userId), itemId);
  if (inserted) {
    return import_client_a4058cb2.c.hIncrBy((0, import_client_a4058cb2.d)(itemId), "likes", 1);
  }
};
const unlikeItem = async (itemId, userId) => {
  const removed = await import_client_a4058cb2.c.sRem((0, import_client_a4058cb2.u)(userId), itemId);
  if (removed) {
    return import_client_a4058cb2.c.hIncrBy((0, import_client_a4058cb2.d)(itemId), "likes", -1);
  }
};
const commonLikedItems = async (userOneId, userTwoId) => {
  const ids = await import_client_a4058cb2.c.sInter([(0, import_client_a4058cb2.u)(userOneId), (0, import_client_a4058cb2.u)(userTwoId)]);
  return (0, import_items_6bdef89c.g)(ids);
};
