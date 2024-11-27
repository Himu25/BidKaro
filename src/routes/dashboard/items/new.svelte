<script lang="ts">
  import { goto } from "$app/navigation";
  import { post } from "$lib/fetch";

  let name = "Chair";
  let duration = 60;
  let desc = "This is a fantastic chair that you would be quite happy with!";
  let image: File | null = null;
  let err = null;
  let loading = false;

  async function uploadToCloudinary(image: File): Promise<string> {
    const formData = new FormData();
    formData.append("file", image);
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
  }

   async function onSubmit() {
    try {
      loading = true;
      const imageUrl = await uploadToCloudinary(image);
      const [data, err] = await post("/dashboard/items/new", {
        name,
        description: desc,
        duration,
        imageUrl
      });

      loading = false;
      if (!err) {
        goto(`/items/${data.id}`);
      }
    } catch (error) {
      loading = false;
      console.error("Error submitting the form:", error);
    }
  }
</script>

<div class="flex justify-center bg-white">
  <form
    on:submit|preventDefault={onSubmit}
    class="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
  >
    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
      Add New Item
    </h2>

    <div class="mb-4">
      <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
        Item Name
      </label>
      <input
        bind:value={name}
        id="name"
        required
        minlength="3"
        maxlength="60"
        type="text"
        class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
        placeholder="Item Name"
      />
    </div>

    <div class="mb-4">
      <label for="desc" class="block text-sm font-semibold text-gray-700 mb-2">
        Description
      </label>
      <textarea
        bind:value={desc}
        id="desc"
        required
        minlength="3"
        maxlength="600"
        class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
        placeholder="Item Description"
      />
    </div>

    <div class="mb-4">
      <label
        for="duration"
        class="block text-sm font-semibold text-gray-700 mb-2">Duration</label
      >
      <select
        bind:value={duration}
        id="duration"
        class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
      >
        <option value={60}>One Minute</option>
        <option value={60 * 10}>Ten Minutes</option>
        <option value={60 * 60 * 24}>One Day</option>
        <option value={60 * 60 * 24 * 7}>One Week</option>
      </select>
    </div>

    <div class="mb-4">
      <label
        for="image"
        class="block text-sm font-semibold text-gray-700 mb-2"
      >
        Item Image
      </label>
      <input
        id="image"
        type="file"
        accept="image/*"
        class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
        on:change={(e) => (image = e.target.files[0])}
      />
    </div>

    {#if err}
      <div class="bg-red-100 text-red-800 p-3 rounded-md text-center mb-4">
        {err}
      </div>
    {/if}

    <button
      class="w-full py-3 mt-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
      type="submit"
      disabled={loading}
    >
      {#if loading}
        <span class="flex items-center justify-center">
          Submitting...
        </span>
      {:else}
        Submit
      {/if}
    </button>
  </form>
</div>
