<script lang="ts">
  import { goto } from "$app/navigation";
  import { post, f } from "$lib/fetch";
  import { session } from "$app/stores";
  import Error from "$lib/components/error.svelte";

  let username = "";
  let password = "";
  let err = null;
  let isLoading = false;

  async function onSubmit() {
    isLoading = true; // Start loading
    let _data: any;

    [_data, err] = await post("/auth/signup", { username, password });

    if (err) {
      isLoading = false; // Stop loading on error
      return;
    }

    const [data] = await f("/sessions");
    session.set(data);

    isLoading = false; // Stop loading after success
    goto("/dashboard/items");
  }
</script>

<Error {err} />
<div class="signup-container">
  <div class="signup-card">
    <h2 class="signup-title">Create a New Account</h2>
    <p class="signup-subtitle">
      Already have an account?
      <a href="/auth/signin" class="signin-link">Sign in here</a>
    </p>
    <form on:submit|preventDefault={onSubmit} class="signup-form">
      <div class="input-group">
        <input
          bind:value={username}
          type="text"
          class="input-field"
          placeholder="Enter your username"
        />
      </div>
      <div class="input-group">
        <input
          bind:value={password}
          type="password"
          class="input-field"
          placeholder="Enter your password"
        />
      </div>
      <div class="action-group">
        <button type="submit" class="submit-button" disabled={isLoading}>
          {#if isLoading}
            <span class="loader" /> Signing Up...
          {:else}
            Sign Up
          {/if}
        </button>
      </div>
    </form>
  </div>
</div>

<style>
  /* Signup container */
  .signup-container {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    padding: 0 1rem;
    box-sizing: border-box;
  }

  .signup-card {
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    padding: 2rem;
  }

  .signup-title {
    font-size: 1.8rem;
    font-weight: bold;
    color: #333333;
    margin-bottom: 1rem;
    text-align: center;
  }

  .signup-subtitle {
    font-size: 0.9rem;
    color: #6b7280;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .signin-link {
    color: #6366f1;
    font-weight: 500;
    text-decoration: underline;
    transition: color 0.3s;
  }

  .signin-link:hover {
    color: #4338ca;
  }

  .signup-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .input-group {
    position: relative;
  }

  .input-field {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    background: #f9fafb;
    color: #374151;
    font-size: 1rem;
    transition: border-color 0.3s, box-shadow 0.3s;
  }

  .input-field:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
    outline: none;
  }

  .action-group {
    margin-top: 1rem;
  }

  .submit-button {
    width: 100%;
    padding: 0.75rem;
    background: linear-gradient(135deg, #6366f1, #4338ca);
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    position: relative;
  }

  .submit-button:disabled {
    background: #a5b4fc;
    cursor: not-allowed;
  }

  .submit-button:hover:not(:disabled) {
    background: linear-gradient(135deg, #4338ca, #6366f1);
  }

  .loader {
    width: 16px;
    height: 16px;
    border: 2px solid #ffffff;
    border-top: 2px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
