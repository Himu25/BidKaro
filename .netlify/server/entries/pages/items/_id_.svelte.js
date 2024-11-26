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
  default: () => U5Bidu5D
});
var import_index_47aa9221 = __toModule(require("../../../chunks/index-47aa9221.js"));
var import_luxon = __toModule(require("luxon"));
var import_stores_fb210881 = __toModule(require("../../../chunks/stores-fb210881.js"));
var import_chart = __toModule(require("chart.js"));
var import_card_13eb90d7 = __toModule(require("../../../chunks/card-13eb90d7.js"));
const Chart_1 = (0, import_index_47aa9221.c)(($$result, $$props, $$bindings, slots) => {
  let context;
  let { bidHistory = [] } = $$props;
  let canvas = null;
  let chart;
  function createChart(ctx) {
    if (!ctx) {
      return;
    }
    const labels = bidHistory.map(() => "");
    const data = bidHistory.map(({ amount }) => amount);
    if (labels.length < 9) {
      labels.unshift("");
      data.unshift(0);
    }
    if (chart) {
      chart.data.labels = labels;
      chart.data.datasets[0].data = data;
      chart.update();
      return;
    }
    chart = new import_chart.Chart(context, {
      type: "line",
      options: {
        responsive: true,
        aspectRatio: 5,
        plugins: { legend: { display: false } }
      },
      data: {
        labels,
        datasets: [
          {
            label: "",
            data,
            borderColor: "rgb(75, 192, 192)"
          }
        ]
      }
    });
  }
  if ($$props.bidHistory === void 0 && $$bindings.bidHistory && bidHistory !== void 0)
    $$bindings.bidHistory(bidHistory);
  context = bidHistory && canvas && canvas.getContext("2d");
  {
    createChart(context);
  }
  return `<div class="${"relative"}">${!bidHistory.length ? `<div class="${"absolute inset-0 flex justify-center items-center text-3xl text-slate-500"}">No Bids Yet
		</div>` : ``}
	<canvas${(0, import_index_47aa9221.a)("this", canvas, 0)}></canvas></div>`;
});
const Like_button = (0, import_index_47aa9221.c)(($$result, $$props, $$bindings, slots) => {
  let { numLikes = 0 } = $$props;
  let { userLikes = false } = $$props;
  if ($$props.numLikes === void 0 && $$bindings.numLikes && numLikes !== void 0)
    $$bindings.numLikes(numLikes);
  if ($$props.userLikes === void 0 && $$bindings.userLikes && userLikes !== void 0)
    $$bindings.userLikes(userLikes);
  return `<div class="${"flex items-center"}"><button type="${"button"}" class="${[
    "w-full flex items-center border-l border-t border-b text-base font-medium rounded-l-md text-black bg-white hover:bg-gray-100 px-4 py-2",
    userLikes ? "bg-green-200" : ""
  ].join(" ").trim()}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" class="${"w-4 h-4 mr-2"}" fill="${"currentColor"}" viewBox="${"0 0 1792 1792"}"><path d="${"M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"}"></path></svg>
		${(0, import_index_47aa9221.e)(userLikes ? "Liked" : "Like")}</button>
	<button class="${"w-full border cursor-default text-base font-medium rounded-r-md text-black bg-white px-4 py-2"}">${(0, import_index_47aa9221.e)(numLikes)}</button></div>`;
});
const Stat = (0, import_index_47aa9221.c)(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { value = "" } = $$props;
  let { bg = "bg-cyan-500" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  return `<div${(0, import_index_47aa9221.a)("class", `${bg} shadow-lg rounded-2xl w-36 p-4 `, 0)}><div class="${"flex items-center"}">
    <p class="${"text-md text-white dark:text-white-50 ml-2"}">${(0, import_index_47aa9221.e)(label)}</p></div>
  <div class="${"flex flex-col justify-start"}"><p class="${"text-white text-2xl text-left dark:text-white font-bold my-4"}">${(0, import_index_47aa9221.e)(value)}</p>
    </div></div>`;
});
const U5Bidu5D = (0, import_index_47aa9221.c)(($$result, $$props, $$bindings, slots) => {
  let endingAt;
  let $$unsubscribe_page;
  let $$unsubscribe_session;
  $$unsubscribe_page = (0, import_index_47aa9221.b)(import_stores_fb210881.p, (value) => value);
  $$unsubscribe_session = (0, import_index_47aa9221.b)(import_stores_fb210881.s, (value) => value);
  let { item = null } = $$props;
  let { userLikes = false } = $$props;
  let { history = [] } = $$props;
  let { similarItems = [] } = $$props;
  let { userHasHighBid = false } = $$props;
  let err = "";
  let amount = "";
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.userLikes === void 0 && $$bindings.userLikes && userLikes !== void 0)
    $$bindings.userLikes(userLikes);
  if ($$props.history === void 0 && $$bindings.history && history !== void 0)
    $$bindings.history(history);
  if ($$props.similarItems === void 0 && $$bindings.similarItems && similarItems !== void 0)
    $$bindings.similarItems(similarItems);
  if ($$props.userHasHighBid === void 0 && $$bindings.userHasHighBid && userHasHighBid !== void 0)
    $$bindings.userHasHighBid(userHasHighBid);
  err = amount;
  endingAt = typeof item.endingAt === "object" ? item.endingAt.toRelative().replace("in ", "") : import_luxon.DateTime.fromMillis(item.endingAt).toRelative().replace("in ", "");
  $$unsubscribe_page();
  $$unsubscribe_session();
  return `${item ? `<div><div class="${"flex justify-end mb-2"}"></div>
    <div class="${"flex gap-10"}"><img alt="${""}" class="${"w-1/3 p-3 border rounded"}"${(0, import_index_47aa9221.a)("src", item.imageUrl, 0)}>
      <div class="${"flex-1 flex flex-col gap-4"}"><div class="${"flex items-center justify-between"}"><div class="${"text-3xl"}">${(0, import_index_47aa9221.e)(item.name)}</div>
          ${(0, import_index_47aa9221.v)(Like_button, "LikeButton").$$render($$result, { numLikes: item.likes, userLikes }, {}, {})}</div>
        <a${(0, import_index_47aa9221.a)("href", `/users/${item.ownerId}`, 0)} class="${"inline-block self-start text-indigo-600 hover:text-indigo-900"}">See the seller</a>
        <p>${(0, import_index_47aa9221.e)(item.description)}</p>

        <hr>

        <div class="${"flex justify-between"}">${(0, import_index_47aa9221.v)(Stat, "Stat").$$render($$result, {
    label: "High Bid",
    value: "$" + item.price.toFixed(2)
  }, {}, {})}
          ${(0, import_index_47aa9221.v)(Stat, "Stat").$$render($$result, {
    bg: "bg-amber-500",
    label: "# Bids",
    value: item.bids
  }, {}, {})}
          ${(0, import_index_47aa9221.v)(Stat, "Stat").$$render($$result, {
    bg: "bg-violet-500",
    label: "Ending In",
    value: endingAt
  }, {}, {})}</div>

        ${userHasHighBid ? `<div class="${"text-lg text-green-600 font-bold"}">You have the highest bid!
          </div>` : ``}

        <div class="${"border p-4 rounded w-full"}"><form class="${"flex flex-col gap-3"}"><div class="${"text-lg"}">Place a Bid</div>

            <input id="${"amount"}" class="${"rounded-lgborder-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"}"${(0, import_index_47aa9221.a)("placeholder", `$${(item.price + 0.01).toFixed(2)} minimum`, 0)}${(0, import_index_47aa9221.a)("value", amount, 0)}>

            ${err ? `<div class="${"text-red-500 font-bold"}">${(0, import_index_47aa9221.e)(err)}</div>` : ``}

            ${``}

            <button class="${[
    "py-2 px-4 bg-indigo-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg",
    " "
  ].join(" ").trim()}">${`Place Bid`}</button></form></div></div></div></div>

  <div class="${"my-8"}"><div class="${"text-xl"}">Bid History</div>
    <div class="${"my-2 mx-3"}">${(0, import_index_47aa9221.v)(Chart_1, "Chart").$$render($$result, { bidHistory: history }, {}, {})}</div></div>` : ``}

<div class="${"text-xl"}">Similar Items</div>
<div class="${"flex flex-wrap gap-4 justify-center"}">${(0, import_index_47aa9221.k)(similarItems, (item2) => {
    return `${(0, import_index_47aa9221.v)(import_card_13eb90d7.C, "Card").$$render($$result, { item: item2 }, {}, {})}`;
  })}</div>`;
});
