import { c as create_ssr_component, a as add_attribute, e as escape } from "./index-47aa9221.js";
import { DateTime } from "luxon";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let endingAt;
  let { showViews = false } = $$props;
  let { item } = $$props;
  if ($$props.showViews === void 0 && $$bindings.showViews && showViews !== void 0)
    $$bindings.showViews(showViews);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  endingAt = typeof item.endingAt === "number" ? DateTime.fromMillis(item.endingAt).toRelative() : item.endingAt.toRelative();
  return `<div class="${"w-80 flex justify-center items-center"}"><div class="${"w-full p-2"}"><div class="${"card flex flex-col justify-center p-8 bg-white shadow border rounded-lg"}"><div class="${"prod-title"}"><a${add_attribute("href", `/items/${item.id}`, 0)}><p class="${"h-16 text-ellipsis overflow-hidden text-xl uppercase text-gray-900 font-bold"}">${escape(item.name)}</p></a>
        <p class="${"uppercase text-sm text-gray-400"}">Ends ${escape(endingAt)}</p>
        ${showViews ? `<p class="${"uppercase text-sm text-gray-400"}">${escape(item.views)} views
          </p>` : ``}</div>
      <div class="${"prod-img"}"><a${add_attribute("href", `/items/${item.id}`, 0)}><img${add_attribute("src", item.imageUrl, 0)} alt="${""}" class="${"w-full object-cover object-center h-44 my-4 rounded"}"></a></div>
      <div class="${"prod-info grid gap-10"}"><div class="${"flex flex-col md:flex-row justify-between items-center text-gray-900"}"><p class="${"font-bold text-xl"}">$${escape(item.price.toFixed(2) || 0)}</p>
          <a${add_attribute("href", `/items/${item.id}`, 0)}><button class="${"px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"}">View
            </button></a></div></div></div></div></div>`;
});
export { Card as C };
