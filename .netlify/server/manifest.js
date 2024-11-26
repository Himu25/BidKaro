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
  manifest: () => manifest
});
const manifest = {
  appDir: "_app",
  assets: new Set(["favicon.png"]),
  _: {
    mime: { ".png": "image/png" },
    entry: { "file": "start-935f01d6.js", "js": ["start-935f01d6.js", "chunks/vendor-05407831.js", "chunks/singletons-a6a7384f.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toModule(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/9.js")))
    ],
    routes: [
      {
        type: "page",
        pattern: /^\/$/,
        params: null,
        path: "/",
        shadow: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/index.ts.js"))),
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/dashboard\/items\/?$/,
        params: null,
        path: "/dashboard/items",
        shadow: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/dashboard/items/index.ts.js"))),
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/dashboard\/items\/new\/?$/,
        params: null,
        path: "/dashboard/items/new",
        shadow: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/dashboard/items/new.ts.js"))),
        a: [0, 4],
        b: [1]
      },
      {
        type: "endpoint",
        pattern: /^\/sessions\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/sessions/index.ts.js")))
      },
      {
        type: "page",
        pattern: /^\/items\/?$/,
        params: null,
        path: "/items",
        shadow: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/items/index.ts.js"))),
        a: [0, 5],
        b: [1]
      },
      {
        type: "endpoint",
        pattern: /^\/items\/search\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/items/search.ts.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/items\/([^/]+?)\/likes\/?$/,
        params: (m) => ({ id: m[1] }),
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/items/_id_/likes.ts.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/items\/([^/]+?)\/bids\/?$/,
        params: (m) => ({ id: m[1] }),
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/items/_id_/bids.ts.js")))
      },
      {
        type: "page",
        pattern: /^\/items\/([^/]+?)\/?$/,
        params: (m) => ({ id: m[1] }),
        path: null,
        shadow: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/items/_id_.ts.js"))),
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/users\/([^/]+?)\/?$/,
        params: (m) => ({ id: m[1] }),
        path: null,
        shadow: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/users/_id_.ts.js"))),
        a: [0, 7],
        b: [1]
      },
      {
        type: "endpoint",
        pattern: /^\/auth\/signout\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/auth/signout.ts.js")))
      },
      {
        type: "page",
        pattern: /^\/auth\/signin\/?$/,
        params: null,
        path: "/auth/signin",
        shadow: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/auth/signin.ts.js"))),
        a: [0, 8],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/auth\/signup\/?$/,
        params: null,
        path: "/auth/signup",
        shadow: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/auth/signup.ts.js"))),
        a: [0, 9],
        b: [1]
      }
    ]
  }
};
