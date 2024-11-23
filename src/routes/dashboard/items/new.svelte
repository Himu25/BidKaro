<script lang="ts">
  import { goto } from "$app/navigation";
  import { post } from "$lib/fetch";

  let name = "Chair";
  let duration = 60;
  let desc = "This is a fantastic chair that you would be quite happy with!";
  let data = null;
  let err = null;
  let loading = false; // Tracks loading state

  async function onSubmit() {
    loading = true; // Set loading to true at the start
    [data, err] = await post("/dashboard/items/new", {
      name,
      description: desc,
      duration,
    });

    loading = false; // Set loading to false after completion
    if (!err) {
      goto(`/items/${data.id}`);
    }
  }
</script>

<div class="form-container">
  <form on:submit|preventDefault={onSubmit} class="form-card">
    <h2 class="form-title">Add New Item</h2>

    <div class="form-group">
      <label for="name" class="form-label">Item Name</label>
      <input
        bind:value={name}
        id="name"
        required
        minlength="3"
        maxlength="60"
        type="text"
        class="form-input"
        name="username"
        placeholder="Item Name"
      />
    </div>

    <div class="form-group">
      <label for="desc" class="form-label">Description</label>
      <textarea
        bind:value={desc}
        id="desc"
        required
        minlength="3"
        maxlength="600"
        class="form-textarea"
        name="description"
        placeholder="Item Description"
      />
    </div>

    <div class="form-group">
      <label for="duration" class="form-label">Duration</label>
      <select bind:value={duration} id="duration" class="form-select">
        <option value={60}>One Minute</option>
        <option value={60 * 10}>Ten Minutes</option>
        <option value={60 * 60 * 24}>One Day</option>
        <option value={60 * 60 * 24 * 7}>One Week</option>
      </select>
    </div>

    {#if err}
      <div class="form-error">{err}</div>
    {/if}

    <button
      class="py-2 px-4 mt-2 w-full bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      type="submit"
      disabled={loading}
    >
      {#if loading}
        Submitting...
      {:else}
        Submit
      {/if}
    </button>
  </form>
</div>

<style>
  /* Styles remain the same with additional spinner styling */

  .form-container {
    display: flex;
    justify-content: center;
    padding: 2rem 1rem;
  }

  .form-card {
    background: #ffffff;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
  }

  .form-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #374151;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-label {
    font-weight: 600;
    color: #4b5563;
    display: block;
    margin-bottom: 0.5rem;
  }

  .form-input,
  .form-textarea,
  .form-select {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    background: #ffffff;
    font-size: 1rem;
    color: #374151;
    transition: border-color 0.3s, box-shadow 0.3s;
  }

  .form-input:focus,
  .form-textarea:focus,
  .form-select:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
    outline: none;
  }

  .form-textarea {
    resize: vertical;
    min-height: 100px;
  }

  .form-error {
    color: #ef4444;
    background: #fee2e2;
    padding: 0.5rem;
    border-radius: 8px;
    font-size: 0.875rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  .form-button {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;
    background: linear-gradient(135deg, #6366f1, #4338ca);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form-button:hover {
    background: linear-gradient(135deg, #4338ca, #6366f1);
  }

  .form-button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Loading spinner */
  .animate-spin {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
