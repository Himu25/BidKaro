var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  post: () => post
});
const post = async ({ request, locals }) => {
  try {
    locals.session = null;
    return {
      status: 200
    };
  } catch (error) {
    return {
      status: 500
    };
  }
};
