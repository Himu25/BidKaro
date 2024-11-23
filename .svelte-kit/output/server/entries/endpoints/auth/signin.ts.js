import { s as signin } from "../../../chunks/auth-36991b53.js";
import "crypto";
import "../../../chunks/users-378baa00.js";
import "../../../chunks/gen-id-1e82b782.js";
import "../../../chunks/client-a4058cb2.js";
import "redis";
const post = async ({ request, locals }) => {
  const { username, password } = await request.json();
  const userId = await signin(username, password);
  locals.session.userId = userId;
  locals.session.username = username;
  return {
    status: 200
  };
};
export { post };
