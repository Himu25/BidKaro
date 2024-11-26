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
var import_auth_36991b53 = __toModule(require("../../../chunks/auth-36991b53.js"));
var import_crypto = __toModule(require("crypto"));
var import_users_378baa00 = __toModule(require("../../../chunks/users-378baa00.js"));
var import_gen_id_1e82b782 = __toModule(require("../../../chunks/gen-id-1e82b782.js"));
var import_client_a4058cb2 = __toModule(require("../../../chunks/client-a4058cb2.js"));
var import_redis = __toModule(require("redis"));
const post = async ({ request, locals }) => {
  try {
    const { username, password } = await request.json();
    const userId = await (0, import_auth_36991b53.s)(username, password);
    if (!userId) {
      return {
        status: 401,
        body: {
          message: "Invalid credentials"
        }
      };
    }
    locals.session.userId = userId;
    locals.session.username = username;
    return {
      status: 200
    };
  } catch (error) {
    return {
      status: 500,
      body: {
        message: error.message
      }
    };
  }
};
