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
  C: () => Card
});
var import_index_47aa9221 = __toModule(require("./index-47aa9221.js"));
var import_luxon = __toModule(require("luxon"));
const Card = (0, import_index_47aa9221.c)(($$result, $$props, $$bindings, slots) => {
  let endingAt;
  let { showViews = false } = $$props;
  let { item } = $$props;
  if ($$props.showViews === void 0 && $$bindings.showViews && showViews !== void 0)
    $$bindings.showViews(showViews);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  endingAt = typeof item.endingAt === "number" ? import_luxon.DateTime.fromMillis(item.endingAt).toRelative() : item.endingAt.toRelative();
  return `<div class="${"w-80 flex justify-center items-center"}"><div class="${"w-full p-2"}"><div class="${"card flex flex-col justify-center p-8 bg-white shadow border rounded-lg"}"><div class="${"prod-title"}"><a${(0, import_index_47aa9221.a)("href", `/items/${item.id}`, 0)}><p class="${"h-16 text-ellipsis overflow-hidden text-xl uppercase text-gray-900 font-bold"}">${(0, import_index_47aa9221.e)(item.name)}</p></a>
        <p class="${"uppercase text-sm text-gray-400"}">Ends ${(0, import_index_47aa9221.e)(endingAt)}</p>
        ${showViews ? `<p class="${"uppercase text-sm text-gray-400"}">${(0, import_index_47aa9221.e)(item.views)} views
          </p>` : ``}</div>
      <div class="${"prod-img"}"><a${(0, import_index_47aa9221.a)("href", `/items/${item.id}`, 0)}><img${(0, import_index_47aa9221.a)("src", item.imageUrl, 0)} alt="${""}" class="${"w-full object-cover object-center h-44 my-4 rounded"}"></a></div>
      <div class="${"prod-info grid gap-10"}"><div class="${"flex flex-col md:flex-row justify-between items-center text-gray-900"}"><p class="${"font-bold text-xl"}">$${(0, import_index_47aa9221.e)(item.price.toFixed(2) || 0)}</p>
          <a${(0, import_index_47aa9221.a)("href", `/items/${item.id}`, 0)}><button class="${"px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"}">View
            </button></a></div></div></div></div></div>`;
});
