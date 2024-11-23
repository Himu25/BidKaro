import { scrypt, randomBytes } from "crypto";
import { c as createUser, a as getUserByUsername } from "./users-378baa00.js";
const signup = async (username, password) => {
  const [hashed, salt] = await saltAndHash(password);
  return await createUser({
    username,
    password: `${hashed}.${salt}`
  });
};
const signin = async (username, password) => {
  const user = await getUserByUsername(username);
  if (!user) {
    throw new Error("Username does not exist");
  }
  const matches = await comparePasswords(password, user.password);
  if (matches) {
    return user.id;
  }
  throw new Error("Invalid password");
};
const comparePasswords = async (password, storedPassword) => {
  const [hashed, salt] = storedPassword.split(".");
  return new Promise((resolve, reject) => {
    scrypt(password, salt, 32, (err, key) => {
      if (err) {
        reject(err);
      }
      resolve(key.toString("hex") === hashed);
    });
  });
};
const saltAndHash = (password) => {
  const salt = randomBytes(4).toString("hex");
  return new Promise((resolve, reject) => {
    scrypt(password, salt, 32, (err, key) => {
      if (err) {
        reject(err);
      }
      resolve([key.toString("hex"), salt]);
    });
  });
};
export { signup as a, signin as s };
