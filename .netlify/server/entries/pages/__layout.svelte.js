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
  default: () => _layout
});
var import_index_47aa9221 = __toModule(require("../../chunks/index-47aa9221.js"));
var import_icon_41164870 = __toModule(require("../../chunks/icon-41164870.js"));
var import_stores_fb210881 = __toModule(require("../../chunks/stores-fb210881.js"));
var import_chart = __toModule(require("chart.js"));
var import_chartjs_adapter_luxon = __toModule(require("chartjs-adapter-luxon"));
var import_classnames = __toModule(require("classnames"));
var app = "";
const Footer = (0, import_index_47aa9221.c)(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"bg-white mt-20 dark:bg-gray-800 pb-8 xl:pt-8"}"><div class="${"max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300"}"><ul class="${"text-lg font-light pb-8 flex flex-wrap justify-center"}"><li class="${"w-1/2 md:w-1/3 lg:w-1/3"}"><div class="${"text-center"}"><h2 class="${"text-gray-500 dark:text-gray-200 text-md uppercase mb-4"}">Components
          </h2>
          <ul><li class="${"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"}"><a href="${"/"}">Elements </a></li>
            <li class="${"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"}"><a href="${"/"}">Forms </a></li>
            <li class="${"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"}"><a href="${"/"}">Commerces </a></li>
            <li class="${"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"}"><a href="${"/"}">Navigation </a></li></ul></div></li>
      <li class="${"w-1/2 md:w-1/3 lg:w-1/3"}"><div class="${"text-center"}"><h2 class="${"text-gray-500 dark:text-gray-200 text-md uppercase mb-4"}">Contacts
          </h2>
          <ul><li class="${"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"}"><a href="${"/"}">Github </a></li>
            <li class="${"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"}"><a href="${"/"}">Facebook </a></li>
            <li class="${"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"}"><a href="${"/"}">Twitter </a></li>
            <li class="${"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"}"><a href="${"/"}">LinkedIn </a></li></ul></div></li>
      <li class="${"w-1/2 md:w-1/3 lg:w-1/3"}"><div class="${"text-center"}"><h2 class="${"text-gray-500 dark:text-gray-200 text-md uppercase mb-4"}">Company
          </h2>
          <ul><li class="${"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"}"><a href="${"/"}">Privacy </a></li>
            <li class="${"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"}"><a href="${"/"}">About Us </a></li>
            <li class="${"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"}"><a href="${"/"}">Plugins </a></li>
            <li class="${"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"}"><a href="${"/"}">LinkedIn </a></li></ul></div></li></ul>
    <div class="${"pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between"}"><a href="${"/"}">${(0, import_index_47aa9221.v)(import_icon_41164870.I, "Icon").$$render($$result, { name: "language" }, {}, {})}</a>
      <a href="${"/"}"><svg width="${"20"}" height="${"20"}" fill="${"currentColor"}" class="${"text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"}" viewBox="${"0 0 1792 1792"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"}"></path></svg></a>
      <a href="${"/"}"><svg width="${"20"}" height="${"20"}" fill="${"currentColor"}" class="${"text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"}" viewBox="${"0 0 1792 1792"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"}"></path></svg></a>
      <a href="${"/"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" fill="${"currentColor"}" class="${"text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"}" viewBox="${"0 0 1792 1792"}"><path d="${"M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"}"></path></svg></a>
      <a href="${"/"}"><svg width="${"20"}" height="${"20"}" fill="${"currentColor"}" class="${"text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"}" viewBox="${"0 0 1792 1792"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"}"></path></svg></a>
      <a href="${"/"}"><svg width="${"20"}" height="${"20"}" fill="${"currentColor"}" class="${"text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"}" viewBox="${"0 0 1792 1792"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"}"></path></svg></a></div>
    <div class="${"text-center pt-10 sm:pt-12 font-light flex items-center justify-center"}"><form class="${"flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center"}"><div class="${"relative "}"><input type="${"email"}" name="${"email"}" id="${"&quot;form-subscribe-Subscribe"}" class="${"rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"}" placeholder="${"Email"}"></div>
        <button class="${"flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"}" type="${"submit"}">Subscribe
        </button></form></div></div></footer>`;
});
const Search = (0, import_index_47aa9221.c)(($$result, $$props, $$bindings, slots) => {
  let term = "";
  return `
<div class="${"relative h-10 w-96 ml-4 border border-gray-300 text-sm flex"}"><input type="${"search"}" name="${"search"}" placeholder="${"Search"}" class="${"px-4 w-full text-sm focus:outline-none"}"${(0, import_index_47aa9221.a)("value", term, 0)}>

	${``}</div>`;
});
const Header = (0, import_index_47aa9221.c)(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = (0, import_index_47aa9221.b)(import_stores_fb210881.s, (value) => $session = value);
  $$unsubscribe_session();
  return `<nav class="${"bg-[rgb(79,70,229)] shadow-lg fixed top-0 left-0 right-0 z-50 w-full"}"><div class="${"max-w-7xl mx-auto px-6 sm:px-8 lg:px-10"}"><div class="${"flex items-center justify-between h-16"}">
      <div class="${"flex items-center w-full max-w-xl"}">${(0, import_index_47aa9221.v)(Search, "Search").$$render($$result, {}, {}, {})}</div>
      
      <div class="${"flex items-center space-x-8 ml-auto"}"><a href="${"/"}" class="${"text-white text-lg font-medium hover:underline hover:text-gray-100 transition-colors"}">Home
        </a>
        ${$session && $session.userId ? `<a href="${"/dashboard/items"}" class="${"text-white text-lg font-medium hover:underline hover:text-gray-100 transition-colors"}">Dashboard
          </a>
          <a href="${"/dashboard/items/new"}" class="${"text-white text-lg font-medium hover:underline hover:text-gray-100 transition-colors"}">Create
          </a>
          <button class="${"bg-white text-[rgb(79,70,229)] font-medium py-2 px-5 rounded-lg shadow-md hover:bg-[rgb(79,70,229)] hover:text-white hover:shadow-lg border border-[rgb(79,70,229)] transition-all duration-300"}">Logout
          </button>` : `<a href="${"/auth/signin"}" class="${"text-white text-lg font-medium hover:underline hover:text-gray-100 transition-colors"}">Sign In
          </a>
          <a href="${"/auth/signup"}" class="${"text-white text-lg font-medium hover:underline hover:text-gray-100 transition-colors"}">Sign Up
          </a>`}</div></div></div></nav>


<div class="${"mt-20"}"></div>`;
});
const _layout = (0, import_index_47aa9221.c)(($$result, $$props, $$bindings, slots) => {
  import_chart.Chart.register(import_chart.ArcElement, import_chart.LineElement, import_chart.BarElement, import_chart.PointElement, import_chart.BarController, import_chart.BubbleController, import_chart.DoughnutController, import_chart.LineController, import_chart.PieController, import_chart.PolarAreaController, import_chart.RadarController, import_chart.ScatterController, import_chart.CategoryScale, import_chart.LinearScale, import_chart.LogarithmicScale, import_chart.RadialLinearScale, import_chart.TimeScale, import_chart.TimeSeriesScale, import_chart.Decimation, import_chart.Filler, import_chart.Legend, import_chart.Title, import_chart.Tooltip, import_chart.SubTitle);
  return `


${(0, import_index_47aa9221.v)(Header, "Header").$$render($$result, {}, {}, {})}
<div class="${"container mx-auto"}"${(0, import_index_47aa9221.d)({ "min-height": `80vh` })}>${slots.default ? slots.default({}) : ``}</div>
${(0, import_index_47aa9221.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
