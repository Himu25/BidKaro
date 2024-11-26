import { g as genId } from "./gen-id-1e82b782.js";
import "crypto";
import { c as client, g as usersKey, h as usernamesKey, j as usernamesUniqueKey } from "./client-a4058cb2.js";
const getUserByUsername = async (username) => {
  const decimalId = await client.zScore(usernamesKey(), username);
  if (!decimalId) {
    throw new Error("Invalid credentials");
  }
  const id = decimalId.toString(16);
  return await getUserById(id);
};
const getUserById = async (id) => {
  const user = await client.hGetAll(usersKey(id));
  return deserialize(id, user);
};
const createUser = async (attrs) => {
  const id = genId();
  const exists = await client.sIsMember(usernamesUniqueKey(), attrs.username);
  if (exists) {
    throw new Error("Username is taken");
  }
  await client.hSet(usersKey(id), serialize(attrs));
  await client.sAdd(usernamesUniqueKey(), attrs.username);
  await client.zAdd(usernamesKey(), {
    value: attrs.username,
    score: parseInt(id, 16)
  });
  return id;
};
const serialize = (user) => {
  return {
    username: user.username,
    password: user.password
  };
};
const deserialize = (id, user) => {
  return {
    id,
    username: user.username,
    password: user.password
  };
};
export { getUserByUsername as a, createUser as c, getUserById as g };
