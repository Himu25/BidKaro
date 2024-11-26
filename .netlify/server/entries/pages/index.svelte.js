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
  default: () => Routes
});
var import_index_47aa9221 = __toModule(require("../../chunks/index-47aa9221.js"));
var import_card_13eb90d7 = __toModule(require("../../chunks/card-13eb90d7.js"));
var import_icon_41164870 = __toModule(require("../../chunks/icon-41164870.js"));
var import_luxon = __toModule(require("luxon"));
var import_classnames = __toModule(require("classnames"));
const subscriber_queue = [];
function writable(value, start = import_index_47aa9221.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_47aa9221.f)(value, new_value)) {
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
  function subscribe2(run, invalidate = import_index_47aa9221.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_47aa9221.n;
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
    let { delay = 0, duration = 400, easing = import_index_47aa9221.j, interpolate = get_interpolator } = (0, import_index_47aa9221.h)((0, import_index_47aa9221.h)({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = (0, import_index_47aa9221.i)() + delay;
    let fn;
    task = (0, import_index_47aa9221.l)((now2) => {
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
const Carousel = (0, import_index_47aa9221.c)(($$result, $$props, $$bindings, slots) => {
  let $offset, $$unsubscribe_offset;
  let container = null;
  let scroller = null;
  const offset = tweened(0, { duration: 400, easing: cubicOut });
  $$unsubscribe_offset = (0, import_index_47aa9221.b)(offset, (value) => $offset = value);
  $$unsubscribe_offset();
  return `<div class="${"relative w-full bg-gray-100 rounded my-2 p-4"}"><div class="${"absolute inset-y-1/2 z-10"}"><button class="${"flex text-center items-center p-3 bg-gray-800 hover:bg-gray-600 cursor-pointer transition ease-in duration-100 uppercase rounded-full hover:text-white focus:outline-none"}"${(0, import_index_47aa9221.d)({ "transform": `translate(-50%, -50%)` })}>${(0, import_index_47aa9221.v)(import_icon_41164870.I, "Icon").$$render($$result, {
    name: "arrow_back_ios",
    klass: "text-white",
    size: "24px"
  }, {}, {})}</button></div>
	<div class="${"overflow-hidden relative"}"${(0, import_index_47aa9221.a)("this", container, 0)}><div class="${"flex relative min-h-[200px]"}"${(0, import_index_47aa9221.d)({ "right": $offset + "px" })}${(0, import_index_47aa9221.a)("this", scroller, 0)}>${slots.default ? slots.default({}) : ``}</div></div>
	<div class="${"absolute inset-y-1/2 right-0 z-10"}"><button class="${"flex text-center items-center p-3 bg-gray-800 hover:bg-gray-600 cursor-pointer transition ease-in duration-100 uppercase rounded-full hover:text-white focus:outline-none"}"${(0, import_index_47aa9221.d)({ "transform": `translate(50%, -50%)` })}>${(0, import_index_47aa9221.v)(import_icon_41164870.I, "Icon").$$render($$result, {
    name: "arrow_forward_ios",
    klass: "text-white",
    size: "24px"
  }, {}, {})}</button></div></div>`;
});
const Routes = (0, import_index_47aa9221.c)(($$result, $$props, $$bindings, slots) => {
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
${(0, import_index_47aa9221.v)(Carousel, "Carousel").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_47aa9221.k)(highestPrice, (item) => {
        return `<div class="${"flex-1"}">${(0, import_index_47aa9221.v)(import_card_13eb90d7.C, "Card").$$render($$result, { item }, {}, {})}
		</div>`;
      })}`;
    }
  })}

<hr class="${"my-8"}">

<h1 class="${"text-3xl"}">Ending Soonest</h1>
${(0, import_index_47aa9221.v)(Carousel, "Carousel").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_47aa9221.k)(endingSoonest, (item) => {
        return `<div class="${"flex-1"}">${(0, import_index_47aa9221.v)(import_card_13eb90d7.C, "Card").$$render($$result, { item }, {}, {})}
		</div>`;
      })}`;
    }
  })}

<hr class="${"my-8"}">

<h1 class="${"text-3xl"}">Most Views</h1>
${(0, import_index_47aa9221.v)(Carousel, "Carousel").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_47aa9221.k)(mostViews, (item) => {
        return `<div class="${"flex-1"}">${(0, import_index_47aa9221.v)(import_card_13eb90d7.C, "Card").$$render($$result, { item, showViews: true }, {}, {})}
		</div>`;
      })}`;
    }
  })}`;
});
