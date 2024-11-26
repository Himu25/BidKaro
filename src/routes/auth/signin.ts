import type { RequestHandler } from "@sveltejs/kit";
import { signin } from "$services/auth/auth";

export const post: RequestHandler = async ({ request, locals }) => {
  try {
    const { username, password } = await request.json();

    const userId = await signin(username, password);

    if (!userId) {
      return {
        status: 401,
        body: {
          message: "Invalid credentials",
        },
      };
    }

    locals.session.userId = userId;
    locals.session.username = username;

    return {
      status: 200,
    };
  } catch (error) {
    return {
      status: 500,
      body: {
        message: error.message,
      },
    };
  }
};
