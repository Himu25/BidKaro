import { c as create_ssr_component, a as add_attribute } from "../../../../chunks/index-e8e3b014.js";
const New = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "Chair";
  let desc = "This is a fantastic chair that you would be quite happy with!";
  return `<div class="${"w-1/2 mx-auto"}"><form><div class="${"flex flex-col mb-2"}"><label for="${"name"}" class="${"font-bold"}">Item Name</label>
			<input id="${"name"}" required minlength="${"3"}" maxlength="${"60"}" type="${"text"}" class="${"rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"}" name="${"username"}" placeholder="${"Item Name"}"${add_attribute("value", name, 0)}></div>

		<div class="${"mb-2"}"><label for="${"desc"}" class="${"font-bold"}">Description</label>
			<textarea id="${"desc"}" required minlength="${"3"}" maxlength="${"600"}" class="${"rounded-lg border-transparent flex-1 border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"}" name="${"description"}" placeholder="${"Item Description"}">${desc}</textarea></div>

		<div class="${"flex flex-col mb-2"}"><label for="${"duration"}" class="${"font-bold"}">Duration</label>
			<select id="${"duration"}" class="${"border py-2 px-5 shadow-sm border-gray-300 rounded"}"><option${add_attribute("value", 60, 0)}>One Minute</option><option${add_attribute("value", 60 * 10, 0)}>Ten Minutes</option><option${add_attribute("value", 60 * 60 * 24, 0)}>One Day</option><option${add_attribute("value", 60 * 60 * 24 * 7, 0)}>One Week</option></select></div>

		${``}

		<button class="${"py-2 px-4 w-1/3 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "}">Submit
		</button></form></div>`;
});
export { New as default };
