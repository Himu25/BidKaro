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
  default: () => U5Bidu5D
});
var import_index_47aa9221 = __toModule(require("../../../chunks/index-47aa9221.js"));
var import_card_13eb90d7 = __toModule(require("../../../chunks/card-13eb90d7.js"));
var import_luxon = __toModule(require("luxon"));
const U5Bidu5D = (0, import_index_47aa9221.c)(($$result, $$props, $$bindings, slots) => {
  let { username = "" } = $$props;
  let { sharedItems = [] } = $$props;
  let { likedItems = [] } = $$props;
  if ($$props.username === void 0 && $$bindings.username && username !== void 0)
    $$bindings.username(username);
  if ($$props.sharedItems === void 0 && $$bindings.sharedItems && sharedItems !== void 0)
    $$bindings.sharedItems(sharedItems);
  if ($$props.likedItems === void 0 && $$bindings.likedItems && likedItems !== void 0)
    $$bindings.likedItems(likedItems);
  return `<h1 class="${"text-3xl"}">${(0, import_index_47aa9221.e)(username)}&#39;s profile</h1>
<hr class="${"my-4"}">

<h3 class="${"text-xl"}">Items you <span class="${"font-bold"}">both</span> like</h3>
<div class="${"flex flex-wrap gap-4 justify-start"}">${(0, import_index_47aa9221.k)(sharedItems, (item) => {
    return `${(0, import_index_47aa9221.v)(import_card_13eb90d7.C, "Card").$$render($$result, { item }, {}, {})}`;
  })}</div>

<hr class="${"my-12"}">

<h3 class="${"text-xl"}">Items ${(0, import_index_47aa9221.e)(username)} likes</h3>
<div class="${"flex flex-wrap gap-4 justify-start"}">${(0, import_index_47aa9221.k)(likedItems, (item) => {
    return `${(0, import_index_47aa9221.v)(import_card_13eb90d7.C, "Card").$$render($$result, { item }, {}, {})}`;
  })}</div>`;
});
