var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  post: () => post
});
var import_luxon = __toModule(require("luxon"));
var import_items_6bdef89c = __toModule(require("../../../../chunks/items-6bdef89c.js"));
var import_client_a4058cb2 = __toModule(require("../../../../chunks/client-a4058cb2.js"));
var import_redis = __toModule(require("redis"));
var import_crypto = __toModule(require("crypto"));
var import_gen_id_1e82b782 = __toModule(require("../../../../chunks/gen-id-1e82b782.js"));
var import_deserialize_09d72f14 = __toModule(require("../../../../chunks/deserialize-09d72f14.js"));
const apikey = "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";
const createImageUrl = async (name, description) => {
  try {
    const huggingFaceResponse = await fetch("https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apikey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: `${name}: ${description}` })
    });
    if (!huggingFaceResponse.ok)
      throw new Error("Failed to generate image");
    const imageBlob = await huggingFaceResponse.blob();
    const formData = new FormData();
    formData.append("file", imageBlob);
    formData.append("upload_preset", "veeyokaq");
    formData.append("cloud_name", "ds4unopik");
    const cloudinaryResponse = await fetch("https://api.cloudinary.com/v1_1/ds4unopik/image/upload", {
      method: "POST",
      body: formData
    });
    if (!cloudinaryResponse.ok)
      throw new Error("Failed to upload image");
    const { secure_url } = await cloudinaryResponse.json();
    return secure_url;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
const post = async ({ request, locals }) => {
  try {
    const data = await request.json();
    const id = await (0, import_items_6bdef89c.c)({
      name: data.name,
      description: data.description,
      createdAt: import_luxon.DateTime.now(),
      endingAt: import_luxon.DateTime.now().plus({ seconds: data.duration }),
      imageUrl: await createImageUrl(data.name, data.description),
      ownerId: locals.session.userId,
      highestBidUserId: "",
      price: 0,
      views: 0,
      likes: 0,
      bids: 0,
      status: ""
    });
    return {
      status: 200,
      body: {
        id
      }
    };
  } catch (error) {
    return {
      status: 500
    };
  }
};
