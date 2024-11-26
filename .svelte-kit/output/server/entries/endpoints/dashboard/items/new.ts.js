import { DateTime } from "luxon";
import { c as createItem } from "../../../../chunks/items-6bdef89c.js";
import "../../../../chunks/client-a4058cb2.js";
import "redis";
import "crypto";
import "../../../../chunks/gen-id-1e82b782.js";
import "../../../../chunks/deserialize-09d72f14.js";
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
    const id = await createItem({
      name: data.name,
      description: data.description,
      createdAt: DateTime.now(),
      endingAt: DateTime.now().plus({ seconds: data.duration }),
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
export { post };
