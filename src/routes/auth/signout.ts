import type { RequestHandler } from "@sveltejs/kit";

export const post: RequestHandler = async ({ request, locals }) => {
  try {
    locals.session = null;

    return {
      status: 200,
    };
  } catch (error) {
    return {
      status: 500,
    };
  }
};
