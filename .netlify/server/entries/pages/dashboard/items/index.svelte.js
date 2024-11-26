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
  default: () => Items
});
var import_index_47aa9221 = __toModule(require("../../../../chunks/index-47aa9221.js"));
var import_luxon = __toModule(require("luxon"));
var import_stores_fb210881 = __toModule(require("../../../../chunks/stores-fb210881.js"));
var import_icon_41164870 = __toModule(require("../../../../chunks/icon-41164870.js"));
var import_classnames = __toModule(require("classnames"));
const Table = (0, import_index_47aa9221.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_index_47aa9221.o)();
  let { columns = [] } = $$props;
  let { items = [] } = $$props;
  let { totalPages = 0 } = $$props;
  let { sort } = $$props;
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.totalPages === void 0 && $$bindings.totalPages && totalPages !== void 0)
    $$bindings.totalPages(totalPages);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0)
    $$bindings.sort(sort);
  return `<table class="${"table table-auto p-4 w-full bg-white shadow rounded-lg "}"><thead class="${"bg-[rgb(79,70,229)] text-white"}"><tr>${(0, import_index_47aa9221.k)(columns, (column) => {
    return `<th class="${[
      "border-b-2 p-4 text-left whitespace-nowrap font-semibold",
      (column.sortable ? "hover:bg-blue-300" : "") + " " + (column.sortable ? "cursor-pointer" : "")
    ].join(" ").trim()}">${(0, import_index_47aa9221.e)(column.label)}

          ${(sort.sortBy === column.field || sort.sortBy === column.id) && sort.direction !== "" ? `${(0, import_index_47aa9221.v)(import_icon_41164870.I, "Icon").$$render($$result, {
      name: sort.direction === "ASC" ? "arrow_upward" : "arrow_downward"
    }, {}, {})}` : `<span${(0, import_index_47aa9221.d)({
      "display": `inline-block`,
      "width": `16px`
    })}></span>`}
        </th>`;
  })}</tr></thead>
  <tbody>${(0, import_index_47aa9221.k)(items, (item) => {
    return `<tr class="${"text-gray-700"}">${(0, import_index_47aa9221.k)(columns, (column) => {
      return `<td class="${"border-b-2 p-4"}">${column.component ? `${(0, import_index_47aa9221.v)(column.component || import_index_47aa9221.m, "svelte:component").$$render($$result, Object.assign(column.props ? column.props(item) : {}), {}, {})}` : `${column.formatter ? `${(0, import_index_47aa9221.e)(column.formatter(item))}` : `${(0, import_index_47aa9221.e)(item[column.field])}`}`}
          </td>`;
    })}
      </tr>`;
  })}</tbody></table>

<div class="${"px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between"}"><div class="${"flex items-center"}"><button type="${"button"}" class="${"w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"}"><svg width="${"9"}" fill="${"currentColor"}" height="${"8"}" class="${""}" viewBox="${"0 0 1792 1792"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"}"></path></svg></button>

    ${(0, import_index_47aa9221.k)(Array(totalPages).fill(0).map((_, i) => i), (index) => {
    return `<button type="${"button"}" class="${[
      "w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ",
      index === sort.page ? "bg-indigo-100" : ""
    ].join(" ").trim()}">${(0, import_index_47aa9221.e)(index + 1)}
      </button>`;
  })}

    <button type="${"button"}" class="${"w-full p-4 border-t border-b border-r text-base rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"}"><svg width="${"9"}" fill="${"currentColor"}" height="${"8"}" class="${""}" viewBox="${"0 0 1792 1792"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"}"></path></svg></button></div></div>`;
});
const Link = (0, import_index_47aa9221.c)(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { child } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.child === void 0 && $$bindings.child && child !== void 0)
    $$bindings.child(child);
  return `<a${(0, import_index_47aa9221.a)("href", href, 0)} class="${"text-indigo-600 hover:text-indigo-900"}">${(0, import_index_47aa9221.e)(child)}</a>`;
});
const Items = (0, import_index_47aa9221.c)(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c;
  let sort;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_47aa9221.b)(import_stores_fb210881.p, (value) => $page = value);
  const parse = (val, def) => {
    const parsed = parseInt(val);
    if (isNaN(parsed)) {
      return def;
    } else {
      return parsed;
    }
  };
  let { totalPages = 0 } = $$props;
  let { items = [] } = $$props;
  function timeLeft(t) {
    let _t = typeof t === "object" ? t.toMillis() : t;
    const endingAt = import_luxon.DateTime.fromMillis(_t);
    if (endingAt < import_luxon.DateTime.now()) {
      return "-";
    } else {
      return endingAt.toRelative().replace("in ", "");
    }
  }
  const columns = [
    {
      label: "Name",
      field: "name",
      sortable: true
    },
    {
      label: "Price",
      field: "price",
      sortable: true
    },
    {
      field: "endingAt",
      label: "Time Left",
      formatter: (item) => timeLeft(item.endingAt),
      sortable: true
    },
    {
      label: "# Bids",
      field: "bids",
      sortable: true
    },
    {
      label: "# Views",
      field: "views",
      sortable: true
    },
    {
      label: "# Likes",
      field: "likes",
      sortable: true
    },
    {
      label: "Link",
      component: Link,
      props: (item) => {
        return { href: `/items/${item.id}`, child: "View" };
      }
    }
  ];
  if ($$props.totalPages === void 0 && $$bindings.totalPages && totalPages !== void 0)
    $$bindings.totalPages(totalPages);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  sort = {
    page: parse($page.url.searchParams.get("page"), 0),
    perPage: parse($page.url.searchParams.get("perPage"), 10),
    direction: (_a = $page.url.searchParams.get("direction")) != null ? _a : "",
    sortBy: (_b = $page.url.searchParams.get("sortBy")) != null ? _b : "",
    tag: (_c = $page.url.searchParams.get("tag")) != null ? _c : ""
  };
  $$unsubscribe_page();
  return `<div class="${"flex justify-between"}"><div class="${"text-3xl mb-4"}">Your Items</div>
  </div>

${``}

${(0, import_index_47aa9221.v)(Table, "Table").$$render($$result, { totalPages, sort, items, columns }, {}, {})}`;
});
