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
var import_client_a4058cb2 = __toModule(require("../../../../chunks/client-a4058cb2.js"));
var import_crypto = __toModule(require("crypto"));
var import_luxon = __toModule(require("luxon"));
var import_deserialize_09d72f14 = __toModule(require("../../../../chunks/deserialize-09d72f14.js"));
var import_redis = __toModule(require("redis"));
const itemsByUser = async (userId, opts) => {
  const query = `@ownerId:{${userId}}`;
  const sortCriteria = opts.sortBy && opts.direction && {
    BY: opts.sortBy,
    DIRECTION: opts.direction
  };
  const { total, documents } = await import_client_a4058cb2.c.ft.search((0, import_client_a4058cb2.e)(), query, {
    SORTBY: sortCriteria,
    LIMIT: {
      from: opts.page * opts.perPage,
      size: opts.perPage
    }
  });
  return {
    totalPages: Math.ceil(total / opts.perPage),
    items: documents.map((document) => {
      return (0, import_deserialize_09d72f14.d)(document.id.replace("items#", ""), document.value);
    })
  };
};
const get = async ({ url, locals }) => {
  var _a, _b, _c;
  try {
    const sort = {
      page: parse(url.searchParams.get("page"), 0),
      perPage: parse(url.searchParams.get("perPage"), 10),
      sortBy: (_a = url.searchParams.get("sortBy")) != null ? _a : "",
      direction: (_b = url.searchParams.get("direction")) != null ? _b : "",
      tag: ((_c = url.searchParams.get("tag")) != null ? _c : "").replace(/[^a-zA-Z0-9 -]/gi, "")
    };
    const { items, totalPages } = await itemsByUser(locals.session.userId, sort);
    return {
      body: { items, totalPages }
    };
  } catch (error) {
    console.error("Error fetching items:", error);
    return {
      status: 500,
      body: { message: "An error occurred while fetching the items." }
    };
  }
};
const parse = (val, def) => {
  const parsed = parseInt(val);
  if (isNaN(parsed)) {
    return def;
  } else {
    return parsed;
  }
};
