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
    try {
      isLoading = true;
      let _data: any;

      [_data, err] = await post("/auth/signin", { username, password });

      if (err) {
        isLoading = false;
        return;
      }

      const [data] = await f("/sessions");
      session.set(data);

      isLoading = false;
      goto("/dashboard/items");
    } catch (error) {
      isLoading = false;
      console.error("An error occurred during submission:", error);
    }
  }
</script>

<Error {err} />
<div class="login-container">
  <div class="login-card">
    <h2 class="login-title">Welcome Back!</h2>
    <p class="login-subtitle">
      Don't have an account?
      <a href="/auth/signup" class="signup-link">Sign up</a>
    </p>
    <form on:submit|preventDefault={onSubmit} class="login-form">
      <div class="input-group">
        <input
          bind:value={username}
          type="text"
          class="input-field"
          placeholder="Username"
        />
      </div>
      <div class="input-group">
        <input
          bind:value={password}
          type="password"
          class="input-field"
          placeholder="Password"
        />
      </div>
      <div class="action-group">
        <button type="submit" class="submit-button" disabled={isLoading}>
          {#if isLoading}
            <span class="loader" /> Signing In...
          {:else}
            Sign In
          {/if}
        </button>
      </div>
    </form>
  </div>
</div>

<style>
  .login-container {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    padding: 0 1rem;
    box-sizing: border-box;
  }

  .login-card {
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    padding: 2rem;
  }

  .login-title {
    font-size: 1.8rem;
    font-weight: bold;
    color: #333333;
    margin-bottom: 1rem;
    text-align: center;
  }

  .login-subtitle {
    font-size: 0.9rem;
    color: #6b7280;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .signup-link {
    color: #6366f1;
    font-weight: 500;
    text-decoration: underline;
    transition: color 0.3s;
  }

  .signup-link:hover {
    color: #4338ca;
  }

  .login-form {
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
