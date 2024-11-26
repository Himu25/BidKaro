import { s as signin } from "../../../chunks/auth-36991b53.js";
import "crypto";
import "../../../chunks/users-378baa00.js";
import "../../../chunks/gen-id-1e82b782.js";
import "../../../chunks/client-a4058cb2.js";
import "redis";
const post = async ({ request, locals }) => {
  try {
    const body = await request.json();
    console.log("Request body:", body);
    const { username, password } = body;
    if (!username || !password) {
      return {
        status: 400,
        body: { message: "Username and password are required." }
      };
    }
    const userId = await signin(username, password);
    if (!userId) {
      return {
        status: 401,
        body: { message: "Invalid credentials" }
      };
    }
    locals.session.userId = userId;
    locals.session.username = username;
    return { status: 200 };
  } catch (error) {
    console.error("Error in signin handler:", error);
    return {
      status: 500,
      body: { message: "Internal server error" }
    };
  }
};
export { post };
