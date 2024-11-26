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
  a: () => getUserByUsername,
  c: () => createUser,
  g: () => getUserById
});
var import_gen_id_1e82b782 = __toModule(require("./gen-id-1e82b782.js"));
var import_crypto = __toModule(require("crypto"));
var import_client_a4058cb2 = __toModule(require("./client-a4058cb2.js"));
const getUserByUsername = async (username) => {
  const decimalId = await import_client_a4058cb2.c.zScore((0, import_client_a4058cb2.h)(), username);
  if (!decimalId) {
    throw new Error("Invalid credentials");
  }
  const id = decimalId.toString(16);
  return await getUserById(id);
};
const getUserById = async (id) => {
  const user = await import_client_a4058cb2.c.hGetAll((0, import_client_a4058cb2.g)(id));
  return deserialize(id, user);
};
const createUser = async (attrs) => {
  const id = (0, import_gen_id_1e82b782.g)();
  const exists = await import_client_a4058cb2.c.sIsMember((0, import_client_a4058cb2.j)(), attrs.username);
  if (exists) {
    throw new Error("Username is taken");
  }
  await import_client_a4058cb2.c.hSet((0, import_client_a4058cb2.g)(id), serialize(attrs));
  await import_client_a4058cb2.c.sAdd((0, import_client_a4058cb2.j)(), attrs.username);
  await import_client_a4058cb2.c.zAdd((0, import_client_a4058cb2.h)(), {
    value: attrs.username,
    score: parseInt(id, 16)
  });
  return id;
};
const serialize = (user) => {
  return {
    username: user.username,
    password: user.password
  };
};
const deserialize = (id, user) => {
  return {
    id,
    username: user.username,
    password: user.password
  };
};
