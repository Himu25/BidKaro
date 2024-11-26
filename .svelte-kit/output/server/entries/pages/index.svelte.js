import { n as noop, f as safe_not_equal, h as assign, i as now, l as loop, j as identity, c as create_ssr_component, b as subscribe, d as add_styles, v as validate_component, a as add_attribute, k as each } from "../../chunks/index-47aa9221.js";
import { C as Card } from "../../chunks/card-13eb90d7.js";
import { I as Icon } from "../../chunks/icon-41164870.js";
import "luxon";
import "classnames";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $offset, $$unsubscribe_offset;
  let container = null;
  let scroller = null;
  const offset = tweened(0, { duration: 400, easing: cubicOut });
  $$unsubscribe_offset = subscribe(offset, (value) => $offset = value);
  $$unsubscribe_offset();
  return `<div class="${"relative w-full bg-gray-100 rounded my-2 p-4"}"><div class="${"absolute inset-y-1/2 z-10"}"><button class="${"flex text-center items-center p-3 bg-gray-800 hover:bg-gray-600 cursor-pointer transition ease-in duration-100 uppercase rounded-full hover:text-white focus:outline-none"}"${add_styles({ "transform": `translate(-50%, -50%)` })}>${validate_component(Icon, "Icon").$$render($$result, {
    name: "arrow_back_ios",
    klass: "text-white",
    size: "24px"
  }, {}, {})}</button></div>
	<div class="${"overflow-hidden relative"}"${add_attribute("this", container, 0)}><div class="${"flex relative min-h-[200px]"}"${add_styles({ "right": $offset + "px" })}${add_attribute("this", scroller, 0)}>${slots.default ? slots.default({}) : ``}</div></div>
	<div class="${"absolute inset-y-1/2 right-0 z-10"}"><button class="${"flex text-center items-center p-3 bg-gray-800 hover:bg-gray-600 cursor-pointer transition ease-in duration-100 uppercase rounded-full hover:text-white focus:outline-none"}"${add_styles({ "transform": `translate(50%, -50%)` })}>${validate_component(Icon, "Icon").$$render($$result, {
    name: "arrow_forward_ios",
    klass: "text-white",
    size: "24px"
  }, {}, {})}</button></div></div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { endingSoonest = [] } = $$props;
  let { mostViews = [] } = $$props;
  let { highestPrice = [] } = $$props;
  if ($$props.endingSoonest === void 0 && $$bindings.endingSoonest && endingSoonest !== void 0)
    $$bindings.endingSoonest(endingSoonest);
  if ($$props.mostViews === void 0 && $$bindings.mostViews && mostViews !== void 0)
    $$bindings.mostViews(mostViews);
  if ($$props.highestPrice === void 0 && $$bindings.highestPrice && highestPrice !== void 0)
    $$bindings.highestPrice(highestPrice);
  return `<h1 class="${"text-3xl"}">Most Expensive</h1>
${validate_component(Carousel, "Carousel").$$render($$result, {}, {}, {
    default: () => {
      return `${each(highestPrice, (item) => {
        return `<div class="${"flex-1"}">${validate_component(Card, "Card").$$render($$result, { item }, {}, {})}
		</div>`;
      })}`;
    }
  })}

<hr class="${"my-8"}">

<h1 class="${"text-3xl"}">Ending Soonest</h1>
${validate_component(Carousel, "Carousel").$$render($$result, {}, {}, {
    default: () => {
      return `${each(endingSoonest, (item) => {
        return `<div class="${"flex-1"}">${validate_component(Card, "Card").$$render($$result, { item }, {}, {})}
		</div>`;
      })}`;
    }
  })}

<hr class="${"my-8"}">

<h1 class="${"text-3xl"}">Most Views</h1>
${validate_component(Carousel, "Carousel").$$render($$result, {}, {}, {
    default: () => {
      return `${each(mostViews, (item) => {
        return `<div class="${"flex-1"}">${validate_component(Card, "Card").$$render($$result, { item, showViews: true }, {}, {})}
		</div>`;
      })}`;
    }
  })}`;
});
export { Routes as default };
