import { c as create_ssr_component, p as createEventDispatcher, o as each, e as escape, v as validate_component, b as add_styles, m as missing_component, a as add_attribute, d as subscribe } from "../../../../chunks/index-e8e3b014.js";
import { DateTime } from "luxon";
import { p as page } from "../../../../chunks/stores-b8f73eaf.js";
import { I as Icon } from "../../../../chunks/icon-23cea8eb.js";
import "classnames";
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
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
  return `<table class="${"table table-auto p-4 w-full bg-white shadow rounded-lg bg-gray-100"}"><thead class="${"bg-blue-400"}"><tr>${each(columns, (column) => {
    return `<th class="${[
      "border-b-2 p-4 text-left whitespace-nowrap font-semibold",
      (column.sortable ? "hover:bg-blue-300" : "") + " " + (column.sortable ? "cursor-pointer" : "")
    ].join(" ").trim()}">${escape(column.label)}

					${(sort.sortBy === column.field || sort.sortBy === column.id) && sort.direction !== "" ? `${validate_component(Icon, "Icon").$$render($$result, {
      name: sort.direction === "ASC" ? "arrow_upward" : "arrow_downward"
    }, {}, {})}` : `<span${add_styles({
      "display": `inline-block`,
      "width": `16px`
    })}></span>`}
				</th>`;
  })}</tr></thead>
	<tbody>${each(items, (item) => {
    return `<tr class="${"text-gray-700"}">${each(columns, (column) => {
      return `<td class="${"border-b-2 p-4"}">${column.component ? `${validate_component(column.component || missing_component, "svelte:component").$$render($$result, Object.assign(column.props ? column.props(item) : {}), {}, {})}` : `${column.formatter ? `${escape(column.formatter(item))}` : `${escape(item[column.field])}`}`}
					</td>`;
    })}
			</tr>`;
  })}</tbody></table>

<div class="${"px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between"}"><div class="${"flex items-center"}"><button type="${"button"}" class="${"w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"}"><svg width="${"9"}" fill="${"currentColor"}" height="${"8"}" class="${""}" viewBox="${"0 0 1792 1792"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"}"></path></svg></button>

		${each(Array(totalPages).fill(0).map((_, i) => i), (index) => {
    return `<button type="${"button"}" class="${[
      "w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ",
      index === sort.page ? "bg-indigo-100" : ""
    ].join(" ").trim()}">${escape(index + 1)}
			</button>`;
  })}

		<button type="${"button"}" class="${"w-full p-4 border-t border-b border-r text-base rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"}"><svg width="${"9"}" fill="${"currentColor"}" height="${"8"}" class="${""}" viewBox="${"0 0 1792 1792"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"}"></path></svg></button></div></div>`;
});
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { child } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.child === void 0 && $$bindings.child && child !== void 0)
    $$bindings.child(child);
  return `<a${add_attribute("href", href, 0)} class="${"text-indigo-600 hover:text-indigo-900"}">${escape(child)}</a>`;
});
const Items = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sort;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
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
    const endingAt = DateTime.fromMillis(_t);
    if (endingAt < DateTime.now()) {
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
    direction: $page.url.searchParams.get("direction") ?? "",
    sortBy: $page.url.searchParams.get("sortBy") ?? "",
    tag: $page.url.searchParams.get("tag") ?? ""
  };
  $$unsubscribe_page();
  return `<div class="${"flex justify-between"}"><div class="${"text-3xl mb-4"}">Your Items</div>
	</div>

${``}

${validate_component(Table, "Table").$$render($$result, { totalPages, sort, items, columns }, {}, {})}`;
});
export { Items as default };
