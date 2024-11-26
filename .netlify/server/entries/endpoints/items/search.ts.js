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
var import_client_a4058cb2 = __toModule(require("../../../chunks/client-a4058cb2.js"));
var import_crypto = __toModule(require("crypto"));
var import_luxon = __toModule(require("luxon"));
var import_deserialize_09d72f14 = __toModule(require("../../../chunks/deserialize-09d72f14.js"));
var import_redis = __toModule(require("redis"));
const searchItems = async (term, size = 5) => {
  const cleaned = term.replaceAll(/[^a-zA-Z0-9 ]/g, "").trim().split(" ").map((word) => {
    return word ? `%${word}%` : "";
  }).join(" ");
  if (cleaned.trim() === "") {
    return [];
  }
  const query = `(@name:(${cleaned})=> {$weight: 5.0}) | (@description:(${cleaned}))`;
  const results = await import_client_a4058cb2.c.ft.search((0, import_client_a4058cb2.e)(), query, {
    LIMIT: {
      from: 0,
      size
    }
  });
  return results.documents.map(({ id, value }) => {
    return (0, import_deserialize_09d72f14.d)(id, value);
  });
};
const get = async ({ url }) => {
  const term = url.searchParams.get("term");
  const items = (await searchItems(term, 5) || []).map((item) => {
    item.id = item.id.replace("items#", "");
    return item;
  });
  return {
    body: { results: items }
  };
};
