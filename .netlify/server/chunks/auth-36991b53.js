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
  a: () => signup,
  s: () => signin
});
var import_crypto = __toModule(require("crypto"));
var import_users_378baa00 = __toModule(require("./users-378baa00.js"));
const signup = async (username, password) => {
  const [hashed, salt] = await saltAndHash(password);
  return await (0, import_users_378baa00.c)({
    username,
    password: `${hashed}.${salt}`
  });
};
const signin = async (username, password) => {
  const user = await (0, import_users_378baa00.a)(username);
  if (!user) {
    throw new Error("Username does not exist");
  }
  const matches = await comparePasswords(password, user.password);
  if (matches) {
    return user.id;
  }
  throw new Error("Invalid password");
};
const comparePasswords = async (password, storedPassword) => {
  const [hashed, salt] = storedPassword.split(".");
  return new Promise((resolve, reject) => {
    (0, import_crypto.scrypt)(password, salt, 32, (err, key) => {
      if (err) {
        reject(err);
      }
      resolve(key.toString("hex") === hashed);
    });
  });
};
const saltAndHash = (password) => {
  const salt = (0, import_crypto.randomBytes)(4).toString("hex");
  return new Promise((resolve, reject) => {
    (0, import_crypto.scrypt)(password, salt, 32, (err, key) => {
      if (err) {
        reject(err);
      }
      resolve([key.toString("hex"), salt]);
    });
  });
};
