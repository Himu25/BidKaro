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
  get: () => get
});
var import_client_a4058cb2 = __toModule(require("../../chunks/client-a4058cb2.js"));
var import_crypto = __toModule(require("crypto"));
var import_items_6bdef89c = __toModule(require("../../chunks/items-6bdef89c.js"));
var import_luxon = __toModule(require("luxon"));
var import_redis = __toModule(require("redis"));
var import_gen_id_1e82b782 = __toModule(require("../../chunks/gen-id-1e82b782.js"));
var import_deserialize_09d72f14 = __toModule(require("../../chunks/deserialize-09d72f14.js"));
const itemsByViews = async (order = "DESC", offset = 0, count = 10) => {
  if (order === "ASC") {
    const ids = await import_client_a4058cb2.c.zRange((0, import_client_a4058cb2.i)(), "0", "+inf", {
      BY: "SCORE",
      LIMIT: {
        offset,
        count
      }
    });
    return await (0, import_items_6bdef89c.g)(ids);
  } else {
    const ids = await import_client_a4058cb2.c.zRange((0, import_client_a4058cb2.i)(), "+inf", "0", {
      REV: true,
      BY: "SCORE",
      LIMIT: {
        offset,
        count
      }
    });
    return await (0, import_items_6bdef89c.g)(ids);
  }
};
const itemsByPrice = async (order = "DESC", offset = 0, count = 10) => {
  if (order === "ASC") {
    const ids = await import_client_a4058cb2.c.zRange((0, import_client_a4058cb2.a)(), "0", "+inf", {
      BY: "SCORE",
      LIMIT: {
        offset,
        count
      }
    });
    return (0, import_items_6bdef89c.g)(ids);
  }
  if (order === "DESC") {
    const ids = await import_client_a4058cb2.c.zRange((0, import_client_a4058cb2.a)(), "+inf", "0", {
      BY: "SCORE",
      LIMIT: {
        offset,
        count
      },
      REV: true
    });
    return (0, import_items_6bdef89c.g)(ids);
  }
};
const itemsByEndingTime = async (order = "DESC", offset = 0, count = 10) => {
  if (order === "ASC") {
    const ids = await import_client_a4058cb2.c.zRangeByScore((0, import_client_a4058cb2.b)(), Date.now(), "+inf", {
      LIMIT: {
        offset,
        count
      }
    });
    console.log(ids);
    return await (0, import_items_6bdef89c.g)(ids);
  }
};
const get = async () => {
  const [endingSoonest, mostViews, highestPrice] = await Promise.all([
    itemsByEndingTime("ASC", 0, 10),
    itemsByViews("DESC", 0, 10),
    itemsByPrice("DESC", 0, 10)
  ]);
  return {
    body: { endingSoonest, mostViews, highestPrice }
  };
};
