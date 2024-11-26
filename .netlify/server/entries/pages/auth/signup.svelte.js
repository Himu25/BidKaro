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
  default: () => Signup
});
var import_index_47aa9221 = __toModule(require("../../../chunks/index-47aa9221.js"));
var import_error_9315f029 = __toModule(require("../../../chunks/error-9315f029.js"));
var signup_svelte_svelte_type_style_lang = "";
const css = {
  code: ".signup-container.svelte-1etrtkv{display:flex;justify-content:center;margin-top:50px;padding:0 1rem;box-sizing:border-box}.signup-card.svelte-1etrtkv{background:#ffffff;border-radius:12px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.1);max-width:400px;width:100%;padding:2rem}.signup-title.svelte-1etrtkv{font-size:1.8rem;font-weight:bold;color:#333333;margin-bottom:1rem;text-align:center}.signup-subtitle.svelte-1etrtkv{font-size:0.9rem;color:#6b7280;text-align:center;margin-bottom:1.5rem}.signin-link.svelte-1etrtkv{color:#6366f1;font-weight:500;text-decoration:underline;transition:color 0.3s}.signin-link.svelte-1etrtkv:hover{color:#4338ca}.signup-form.svelte-1etrtkv{display:flex;flex-direction:column;gap:1rem}.input-group.svelte-1etrtkv{position:relative}.input-field.svelte-1etrtkv{width:100%;padding:0.8rem 1rem;border:1px solid #d1d5db;border-radius:8px;background:#f9fafb;color:#374151;font-size:1rem;transition:border-color 0.3s, box-shadow 0.3s}.input-field.svelte-1etrtkv:focus{border-color:#6366f1;box-shadow:0 0 0 3px rgba(99, 102, 241, 0.3);outline:none}.action-group.svelte-1etrtkv{margin-top:1rem}.submit-button.svelte-1etrtkv{width:100%;padding:0.75rem;background:linear-gradient(135deg, #6366f1, #4338ca);color:#ffffff;border:none;border-radius:8px;font-size:1rem;font-weight:bold;cursor:pointer;transition:background 0.3s;display:flex;align-items:center;justify-content:center;gap:0.5rem;position:relative}.submit-button.svelte-1etrtkv:disabled{background:#a5b4fc;cursor:not-allowed}.submit-button.svelte-1etrtkv:hover:not(:disabled){background:linear-gradient(135deg, #4338ca, #6366f1)}.loader.svelte-1etrtkv{width:16px;height:16px;border:2px solid #ffffff;border-top:2px solid transparent;border-radius:50%;animation:svelte-1etrtkv-spin 1s linear infinite}@keyframes svelte-1etrtkv-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
  map: null
};
const Signup = (0, import_index_47aa9221.c)(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let password = "";
  let err = null;
  $$result.css.add(css);
  return `${(0, import_index_47aa9221.v)(import_error_9315f029.E, "Error").$$render($$result, { err }, {}, {})}
<div class="${"signup-container svelte-1etrtkv"}"><div class="${"signup-card svelte-1etrtkv"}"><h2 class="${"signup-title svelte-1etrtkv"}">Create a New Account</h2>
    <p class="${"signup-subtitle svelte-1etrtkv"}">Already have an account?
      <a href="${"/auth/signin"}" class="${"signin-link svelte-1etrtkv"}">Sign in here</a></p>
    <form class="${"signup-form svelte-1etrtkv"}"><div class="${"input-group svelte-1etrtkv"}"><input type="${"text"}" class="${"input-field svelte-1etrtkv"}" placeholder="${"Enter your username"}"${(0, import_index_47aa9221.a)("value", username, 0)}></div>
      <div class="${"input-group svelte-1etrtkv"}"><input type="${"password"}" class="${"input-field svelte-1etrtkv"}" placeholder="${"Enter your password"}"${(0, import_index_47aa9221.a)("value", password, 0)}></div>
      <div class="${"action-group svelte-1etrtkv"}"><button type="${"submit"}" class="${"submit-button svelte-1etrtkv"}" ${""}>${`Sign Up`}</button></div></form></div>
</div>`;
});
