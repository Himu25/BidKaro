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
  I: () => Icon
});
var import_index_47aa9221 = __toModule(require("./index-47aa9221.js"));
var import_classnames = __toModule(require("classnames"));
const Icon = (0, import_index_47aa9221.c)(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { size = "16px" } = $$props;
  let { klass = "" } = $$props;
  const klasses = (0, import_classnames.default)("material-icons-outlined", klass);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.klass === void 0 && $$bindings.klass && klass !== void 0)
    $$bindings.klass(klass);
  return `<span${(0, import_index_47aa9221.a)("class", klasses, 0)}${(0, import_index_47aa9221.d)({ "font-size": size })}>${(0, import_index_47aa9221.e)(name)}</span>`;
});
