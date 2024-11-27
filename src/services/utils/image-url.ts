
export const createImageUrl = async (name: String, description: String) => {
  try {
    const huggingFaceResponse = await fetch(
      "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: `${name}: ${description}` }),
      }
    );

    if (!huggingFaceResponse.ok) throw new Error("Failed to generate image");

    const imageBlob = await huggingFaceResponse.blob();

    const formData = new FormData();
    formData.append("file", imageBlob);
    formData.append("upload_preset", "veeyokaq");
    formData.append("cloud_name", "ds4unopik");

    const cloudinaryResponse = await fetch(
      "https://api.cloudinary.com/v1_1/ds4unopik/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!cloudinaryResponse.ok) throw new Error("Failed to upload image");

    const { secure_url } = await cloudinaryResponse.json();

    return secure_url;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
