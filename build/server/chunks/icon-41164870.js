import { c as create_ssr_component, a as add_attribute, d as add_styles, e as escape } from "./index-47aa9221.js";
import c from "classnames";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { size = "16px" } = $$props;
  let { klass = "" } = $$props;
  const klasses = c("material-icons-outlined", klass);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.klass === void 0 && $$bindings.klass && klass !== void 0)
    $$bindings.klass(klass);
  return `<span${add_attribute("class", klasses, 0)}${add_styles({ "font-size": size })}>${escape(name)}</span>`;
});
export { Icon as I };
