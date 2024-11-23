import { c as create_ssr_component, e as escape, o as each, v as validate_component } from "../../../chunks/index-e8e3b014.js";
import { C as Card } from "../../../chunks/card-b8f16571.js";
import "luxon";
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { username = "" } = $$props;
  let { sharedItems = [] } = $$props;
  let { likedItems = [] } = $$props;
  if ($$props.username === void 0 && $$bindings.username && username !== void 0)
    $$bindings.username(username);
  if ($$props.sharedItems === void 0 && $$bindings.sharedItems && sharedItems !== void 0)
    $$bindings.sharedItems(sharedItems);
  if ($$props.likedItems === void 0 && $$bindings.likedItems && likedItems !== void 0)
    $$bindings.likedItems(likedItems);
  return `<h1 class="${"text-3xl"}">${escape(username)}&#39;s profile</h1>
<hr class="${"my-4"}">

<h3 class="${"text-xl"}">Items you <span class="${"font-bold"}">both</span> like</h3>
<div class="${"flex flex-wrap gap-4 justify-start"}">${each(sharedItems, (item) => {
    return `${validate_component(Card, "Card").$$render($$result, { item }, {}, {})}`;
  })}</div>

<hr class="${"my-12"}">

<h3 class="${"text-xl"}">Items ${escape(username)} likes</h3>
<div class="${"flex flex-wrap gap-4 justify-start"}">${each(likedItems, (item) => {
    return `${validate_component(Card, "Card").$$render($$result, { item }, {}, {})}`;
  })}</div>`;
});
export { U5Bidu5D as default };
