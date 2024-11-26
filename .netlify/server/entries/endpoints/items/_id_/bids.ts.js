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
  post: () => post
});
var import_luxon = __toModule(require("luxon"));
var import_bids_8eb6d131 = __toModule(require("../../../../chunks/bids-8eb6d131.js"));
var import_items_6bdef89c = __toModule(require("../../../../chunks/items-6bdef89c.js"));
var import_client_a4058cb2 = __toModule(require("../../../../chunks/client-a4058cb2.js"));
var import_redis = __toModule(require("redis"));
var import_crypto = __toModule(require("crypto"));
var import_gen_id_1e82b782 = __toModule(require("../../../../chunks/gen-id-1e82b782.js"));
var import_deserialize_09d72f14 = __toModule(require("../../../../chunks/deserialize-09d72f14.js"));
const post = async ({
  request,
  params,
  locals
}) => {
  try {
    if (!locals.session.userId) {
      return {
        status: 401,
        body: { message: "You must login to do that" }
      };
    }
    const item = await (0, import_items_6bdef89c.a)(params.id);
    if (!item) {
      return {
        status: 404,
        body: { message: "Item not found" }
      };
    }
    const body = await request.json();
    await (0, import_bids_8eb6d131.c)({
      itemId: params.id,
      userId: locals.session.userId,
      amount: body.amount,
      createdAt: import_luxon.DateTime.now(),
      itemEndingAt: item.endingAt
    });
    return {
      status: 201
    };
  } catch (error) {
    console.error("Error processing bid request:", error);
    return {
      status: 500,
      body: { message: error.message }
    };
  }
};
