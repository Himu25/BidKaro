import { c as create_ssr_component, a as add_attribute } from "../../../../chunks/index-47aa9221.js";
const New = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "Chair";
  let desc = "This is a fantastic chair that you would be quite happy with!";
  return `<div class="${"flex justify-center p-8"}"><form class="${"bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"}"><h2 class="${"text-2xl font-bold text-gray-800 mb-6 text-center"}">Add New Item
    </h2>

    <div class="${"mb-4"}"><label for="${"name"}" class="${"block text-sm font-semibold text-gray-700 mb-2"}">Item Name</label>
      <input id="${"name"}" required minlength="${"3"}" maxlength="${"60"}" type="${"text"}" class="${"w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"}" name="${"username"}" placeholder="${"Item Name"}"${add_attribute("value", name, 0)}></div>

    <div class="${"mb-4"}"><label for="${"desc"}" class="${"block text-sm font-semibold text-gray-700 mb-2"}">Description</label>
      <textarea id="${"desc"}" required minlength="${"3"}" maxlength="${"600"}" class="${"w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"}" name="${"description"}" placeholder="${"Item Description"}">${desc}</textarea></div>

    <div class="${"mb-4"}"><label for="${"duration"}" class="${"block text-sm font-semibold text-gray-700 mb-2"}">Duration</label>
      <select id="${"duration"}" class="${"w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"}"><option${add_attribute("value", 60, 0)}>One Minute</option><option${add_attribute("value", 60 * 10, 0)}>Ten Minutes</option><option${add_attribute("value", 60 * 60 * 24, 0)}>One Day</option><option${add_attribute("value", 60 * 60 * 24 * 7, 0)}>One Week</option></select></div>

    ${``}

    <button class="${"w-full py-3 mt-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"}" type="${"submit"}" ${""}>${`Submit`}</button></form></div>`;
});
export { New as default };