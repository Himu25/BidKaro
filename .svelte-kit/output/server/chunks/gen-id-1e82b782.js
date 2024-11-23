import { randomBytes } from "crypto";
const genId = () => {
  return randomBytes(3).toString("hex");
};
export { genId as g };
