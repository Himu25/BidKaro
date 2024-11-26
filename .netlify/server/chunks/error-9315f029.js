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
  E: () => Error2
});
var import_index_47aa9221 = __toModule(require("./index-47aa9221.js"));
const Error2 = (0, import_index_47aa9221.c)(($$result, $$props, $$bindings, slots) => {
  let { err = "" } = $$props;
  if ($$props.err === void 0 && $$bindings.err && err !== void 0)
    $$bindings.err(err);
  return `${err ? `<div class="${"flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"}"><div class="${"flex items-center justify-center w-12 bg-red-500"}"><svg class="${"w-6 h-6 text-white fill-current"}" viewBox="${"0 0 40 40"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"}"></path></svg></div>

    <div class="${"px-4 py-2 -mx-3"}"><div class="${"mx-3"}"><span class="${"font-semibold text-red-500 dark:text-red-400"}">Error</span>
        <p class="${"text-sm text-gray-600 dark:text-gray-200"}">${(0, import_index_47aa9221.e)(err)}</p></div></div></div>` : ``}`;
});
