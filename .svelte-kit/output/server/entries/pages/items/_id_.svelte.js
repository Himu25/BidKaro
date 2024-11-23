import { c as create_ssr_component, a as add_attribute, e as escape, d as subscribe, v as validate_component, o as each } from "../../../chunks/index-e8e3b014.js";
import { DateTime } from "luxon";
import { p as page, s as session } from "../../../chunks/stores-b8f73eaf.js";
import { Chart } from "chart.js";
import { C as Card } from "../../../chunks/card-b8f16571.js";
const Chart_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    chart = new Chart(context, {
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
	<canvas${add_attribute("this", canvas, 0)}></canvas></div>`;
});
const Like_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
		${escape(userLikes ? "Liked" : "Like")}</button>
	<button class="${"w-full border cursor-default text-base font-medium rounded-r-md text-black bg-white px-4 py-2"}">${escape(numLikes)}</button></div>`;
});
const Stat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { value = "" } = $$props;
  let { bg = "bg-cyan-500" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  return `<div${add_attribute("class", `${bg} shadow-lg rounded-2xl w-36 p-4 dark:bg-gray-800`, 0)}><div class="${"flex items-center"}">
		<p class="${"text-md text-white dark:text-white-50 ml-2"}">${escape(label)}</p></div>
	<div class="${"flex flex-col justify-start"}"><p class="${"text-white text-2xl text-left dark:text-white font-bold my-4"}">${escape(value)}</p>
		</div></div>`;
});
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let endingAt;
  let $$unsubscribe_page;
  let $$unsubscribe_session;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_session = subscribe(session, (value) => value);
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
  endingAt = typeof item.endingAt === "object" ? item.endingAt.toRelative().replace("in ", "") : DateTime.fromMillis(item.endingAt).toRelative().replace("in ", "");
  $$unsubscribe_page();
  $$unsubscribe_session();
  return `${item ? `<div><div class="${"flex justify-end mb-2"}"></div>
		<div class="${"flex gap-10"}"><img alt="${""}" class="${"w-1/3 p-3 border rounded"}"${add_attribute("src", item.imageUrl, 0)}>
			<div class="${"flex-1 flex flex-col gap-4"}"><div class="${"flex items-center justify-between"}"><div class="${"text-3xl"}">${escape(item.name)}</div>
					${validate_component(Like_button, "LikeButton").$$render($$result, { numLikes: item.likes, userLikes }, {}, {})}</div>
				<a${add_attribute("href", `/users/${item.ownerId}`, 0)} class="${"inline-block self-start text-indigo-600 hover:text-indigo-900"}">See the seller</a>
				<p>${escape(item.description)}</p>

				<hr>

				<div class="${"flex justify-between"}">${validate_component(Stat, "Stat").$$render($$result, {
    label: "High Bid",
    value: "$" + item.price.toFixed(2)
  }, {}, {})}
					${validate_component(Stat, "Stat").$$render($$result, {
    bg: "bg-amber-500",
    label: "# Bids",
    value: item.bids
  }, {}, {})}
					${validate_component(Stat, "Stat").$$render($$result, {
    bg: "bg-violet-500",
    label: "Ending In",
    value: endingAt
  }, {}, {})}</div>

				${userHasHighBid ? `<div class="${"text-lg text-green-600 font-bold"}">You have the highest bid!</div>` : ``}

				<div class="${"border p-4 rounded w-full"}"><form class="${"flex flex-col gap-3"}"><div class="${"text-lg"}">Place a Bid</div>

						<input id="${"amount"}" class="${"rounded-lgborder-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"}"${add_attribute("placeholder", `$${(item.price + 0.01).toFixed(2)} minimum`, 0)}${add_attribute("value", amount, 0)}>

						${err ? `<div class="${"text-red-500 font-bold"}">${escape(err)}</div>` : ``}

						${``}

						<button class="${[
    "py-2 px-4 bg-indigo-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ",
    " "
  ].join(" ").trim()}">Place Bid
						</button></form></div></div></div></div>

	<div class="${"my-8"}"><div class="${"text-xl"}">Bid History</div>
		<div class="${"my-2 mx-3"}">${validate_component(Chart_1, "Chart").$$render($$result, { bidHistory: history }, {}, {})}</div></div>` : ``}

<div class="${"text-xl"}">Similar Items</div>
<div class="${"flex flex-wrap gap-4 justify-center"}">${each(similarItems, (item2) => {
    return `${validate_component(Card, "Card").$$render($$result, { item: item2 }, {}, {})}`;
  })}</div>`;
});
export { U5Bidu5D as default };
