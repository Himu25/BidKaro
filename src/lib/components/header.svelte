<script>
  import { post } from "$lib/fetch";
  import { goto } from "$app/navigation";
  import { session } from "$app/stores";
  import { f } from "$lib/fetch";
  import Search from "$lib/components/search.svelte";

  async function onClick() {
    await post("/auth/signout");
    const [data] = await f("/sessions");
    session.set(data);
    goto("/");
  }
</script>

<nav
  class="bg-[rgb(79,70,229)] shadow-lg fixed top-0 left-0 right-0 z-50 w-full"
>
  <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
    <div class="flex items-center justify-between h-16">
      <!-- Search Component - Left-aligned -->
      <div class="flex items-center w-full max-w-xl">
        <Search />
      </div>
      <!-- Logo and Navigation Links - Right-aligned -->
      <div class="flex items-center space-x-8 ml-auto">
        <a
          href="/"
          class="text-white text-lg font-medium hover:underline hover:text-gray-100 transition-colors"
        >
          Home
        </a>
        {#if $session && $session.userId}
          <a
            href="/dashboard/items"
            class="text-white text-lg font-medium hover:underline hover:text-gray-100 transition-colors"
          >
            Dashboard
          </a>
          <a
            href="/dashboard/items/new"
            class="text-white text-lg font-medium hover:underline hover:text-gray-100 transition-colors"
          >
            Create
          </a>
          <button
            class="bg-white text-[rgb(79,70,229)] font-medium py-2 px-5 rounded-lg shadow-md hover:bg-[rgb(79,70,229)] hover:text-white hover:shadow-lg border border-[rgb(79,70,229)] transition-all duration-300"
            on:click={onClick}
          >
            Logout
          </button>
        {:else}
          <a
            href="/auth/signin"
            class="text-white text-lg font-medium hover:underline hover:text-gray-100 transition-colors"
          >
            Sign In
          </a>
          <a
            href="/auth/signup"
            class="text-white text-lg font-medium hover:underline hover:text-gray-100 transition-colors"
          >
            Sign Up
          </a>
        {/if}
      </div>
    </div>
  </div>
</nav>

<!-- Content with Margin for Navbar -->
<div class="mt-20">
  <!-- Page Content Goes Here -->
</div>
