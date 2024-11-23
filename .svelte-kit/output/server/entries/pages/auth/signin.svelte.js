import { c as create_ssr_component, v as validate_component, a as add_attribute } from "../../../chunks/index-e8e3b014.js";
import { E as Error } from "../../../chunks/error-34765742.js";
const Signin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let password = "";
  let err = null;
  return `${validate_component(Error, "Error").$$render($$result, { err }, {}, {})}
<div class="${"flex flex-col mx-auto items-center max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10"}"><div class="${"self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white"}">Sign In
	</div>
	<span class="${"justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400"}">Don&#39;t have an account ?
		<a href="${"/auth/signup"}" class="${"text-sm text-blue-500 underline hover:text-blue-700"}">Sign up </a></span>
	<div class="${"p-6 mt-8"}"><form><div class="${"flex flex-col mb-2"}"><div class="${"relative"}"><input type="${"text"}" id="${"create-account-pseudo"}" class="${"rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"}" name="${"username"}" placeholder="${"User Name"}"${add_attribute("value", username, 0)}></div></div>
			<div class="${"flex flex-col mb-2"}"><div class="${"relative "}"><input type="${"password"}" id="${"password"}" class="${"rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"}" placeholder="${"Password"}"${add_attribute("value", password, 0)}></div></div>
			<div class="${"flex w-full my-4"}"><button type="${"submit"}" class="${"py-2 px-4 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "}">Sign In
				</button></div></form></div></div>`;
});
export { Signin as default };
