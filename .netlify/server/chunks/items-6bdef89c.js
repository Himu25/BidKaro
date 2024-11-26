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
  a: () => getItem,
  c: () => createItem,
  g: () => getItems
});
var import_client_a4058cb2 = __toModule(require("./client-a4058cb2.js"));
var import_crypto = __toModule(require("crypto"));
var import_gen_id_1e82b782 = __toModule(require("./gen-id-1e82b782.js"));
var import_deserialize_09d72f14 = __toModule(require("./deserialize-09d72f14.js"));
const serialize = (attrs) => {
  return __spreadProps(__spreadValues({}, attrs), {
    createdAt: attrs.createdAt.toMillis(),
    endingAt: attrs.endingAt.toMillis()
  });
};
const getItem = async (id) => {
  const item = await import_client_a4058cb2.c.hGetAll((0, import_client_a4058cb2.d)(id));
  if (Object.keys(item).length === 0) {
    return null;
  }
  return (0, import_deserialize_09d72f14.d)(id, item);
};
const getItems = async (ids) => {
  const commands = ids && ids.map((id) => {
    return import_client_a4058cb2.c.hGetAll((0, import_client_a4058cb2.d)(id));
  });
  const results = await Promise.all(commands);
  return results.map((result, i) => {
    if (Object.keys(result).length === 0) {
      return null;
    }
    return (0, import_deserialize_09d72f14.d)(ids[i], result);
  });
};
const createItem = async (attrs) => {
  const id = (0, import_gen_id_1e82b782.g)();
  const serialized = serialize(attrs);
  const commands = [
    import_client_a4058cb2.c.hSet((0, import_client_a4058cb2.d)(id), serialized),
    import_client_a4058cb2.c.zAdd((0, import_client_a4058cb2.i)(), {
      value: id,
      score: 0
    }),
    import_client_a4058cb2.c.zAdd((0, import_client_a4058cb2.b)(), {
      value: id,
      score: attrs.endingAt.toMillis()
    }),
    import_client_a4058cb2.c.zAdd((0, import_client_a4058cb2.a)(), {
      value: id,
      score: 0
    })
  ];
  await Promise.all(commands);
  return id;
};
