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
  default: () => Signin
});
var import_index_47aa9221 = __toModule(require("../../../chunks/index-47aa9221.js"));
var import_error_9315f029 = __toModule(require("../../../chunks/error-9315f029.js"));
var signin_svelte_svelte_type_style_lang = "";
const css = {
  code: ".login-container.svelte-4i0ng7{display:flex;justify-content:center;margin-top:50px;padding:0 1rem;box-sizing:border-box}.login-card.svelte-4i0ng7{background:#ffffff;border-radius:12px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.1);max-width:400px;width:100%;padding:2rem}.login-title.svelte-4i0ng7{font-size:1.8rem;font-weight:bold;color:#333333;margin-bottom:1rem;text-align:center}.login-subtitle.svelte-4i0ng7{font-size:0.9rem;color:#6b7280;text-align:center;margin-bottom:1.5rem}.signup-link.svelte-4i0ng7{color:#6366f1;font-weight:500;text-decoration:underline;transition:color 0.3s}.signup-link.svelte-4i0ng7:hover{color:#4338ca}.login-form.svelte-4i0ng7{display:flex;flex-direction:column;gap:1rem}.input-group.svelte-4i0ng7{position:relative}.input-field.svelte-4i0ng7{width:100%;padding:0.8rem 1rem;border:1px solid #d1d5db;border-radius:8px;background:#f9fafb;color:#374151;font-size:1rem;transition:border-color 0.3s, box-shadow 0.3s}.input-field.svelte-4i0ng7:focus{border-color:#6366f1;box-shadow:0 0 0 3px rgba(99, 102, 241, 0.3);outline:none}.action-group.svelte-4i0ng7{margin-top:1rem}.submit-button.svelte-4i0ng7{width:100%;padding:0.75rem;background:linear-gradient(135deg, #6366f1, #4338ca);color:#ffffff;border:none;border-radius:8px;font-size:1rem;font-weight:bold;cursor:pointer;transition:background 0.3s;display:flex;align-items:center;justify-content:center;gap:0.5rem;position:relative}.submit-button.svelte-4i0ng7:disabled{background:#a5b4fc;cursor:not-allowed}.submit-button.svelte-4i0ng7:hover:not(:disabled){background:linear-gradient(135deg, #4338ca, #6366f1)}.loader.svelte-4i0ng7{width:16px;height:16px;border:2px solid #ffffff;border-top:2px solid transparent;border-radius:50%;animation:svelte-4i0ng7-spin 1s linear infinite}@keyframes svelte-4i0ng7-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
  map: null
};
const Signin = (0, import_index_47aa9221.c)(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let password = "";
  let err = null;
  $$result.css.add(css);
  return `${(0, import_index_47aa9221.v)(import_error_9315f029.E, "Error").$$render($$result, { err }, {}, {})}
<div class="${"login-container svelte-4i0ng7"}"><div class="${"login-card svelte-4i0ng7"}"><h2 class="${"login-title svelte-4i0ng7"}">Welcome Back!</h2>
    <p class="${"login-subtitle svelte-4i0ng7"}">Don&#39;t have an account?
      <a href="${"/auth/signup"}" class="${"signup-link svelte-4i0ng7"}">Sign up here</a></p>
    <form class="${"login-form svelte-4i0ng7"}"><div class="${"input-group svelte-4i0ng7"}"><input type="${"text"}" class="${"input-field svelte-4i0ng7"}" placeholder="${"Enter your username"}"${(0, import_index_47aa9221.a)("value", username, 0)}></div>
      <div class="${"input-group svelte-4i0ng7"}"><input type="${"password"}" class="${"input-field svelte-4i0ng7"}" placeholder="${"Enter your password"}"${(0, import_index_47aa9221.a)("value", password, 0)}></div>
      <div class="${"action-group svelte-4i0ng7"}"><button type="${"submit"}" class="${"submit-button svelte-4i0ng7"}" ${""}>${`Sign In`}</button></div></form></div>
</div>`;
});
