<script lang="ts">
  import { goto } from "$app/navigation";
  import { post } from "$lib/fetch";

  let name = "Chair";
  let duration = 60;
  let desc = "This is a fantastic chair that you would be quite happy with!";
  let data = null;
  let err = null;
  let loading = false;

  async function onSubmit() {
    try {
      loading = true;
      const [data, err] = await post("/dashboard/items/new", {
        name,
        description: desc,
        duration,
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

<div class="flex justify-center p-8">
  <form
    on:submit|preventDefault={onSubmit}
    class="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
  >
    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
      Add New Item
    </h2>

    <div class="mb-4">
      <label for="name" class="block text-sm font-semibold text-gray-700 mb-2"
        >Item Name</label
      >
      <input
        bind:value={name}
        id="name"
        required
        minlength="3"
        maxlength="60"
        type="text"
        class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
        name="username"
        placeholder="Item Name"
      />
    </div>

    <div class="mb-4">
      <label for="desc" class="block text-sm font-semibold text-gray-700 mb-2"
        >Description</label
      >
      <textarea
        bind:value={desc}
        id="desc"
        required
        minlength="3"
        maxlength="600"
        class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
        name="description"
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
          <svg
            class="animate-spin w-5 h-5 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 1116 0A8 8 0 014 12z"
            />
          </svg>
          Submitting...
        </span>
      {:else}
        Submit
      {/if}
    </button>
  </form>
</div>
