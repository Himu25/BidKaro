<script>
	import { post } from '$lib/fetch';
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	import { f } from '$lib/fetch';
	import Button from '$lib/components/button.svelte';
	import Search from '$lib/components/search.svelte';

	async function onClick() {
		await post('/auth/signout');
		const [data] = await f('/sessions');
		session.set(data);
		goto('/');
	}
  let showDropdown = false;

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }

  function closeDropdown() {
    showDropdown = false;
  }
</script>

<nav class="w-full p-2 shadow-xs bg-[rgb(79,70,229)] mb-8">
  <div class="container mx-auto flex flex-row items-center justify-between">
    <a href="/">
      <div class="text-xl text-white mr-14 font-bold flex">BidKaro</div>
    </a>
    <Search />
    <div class="flex ml-auto self-end md:flex gap-4">
      {#if $session && $session.userId}
        <a href="/dashboard/items/new"><Button>New</Button></a>
        <a href="/dashboard/items"><Button>Dashboard</Button></a>
      {:else}
        <a href="/auth/signin"><Button>Sign In</Button></a>
        <a href="/auth/signup"><Button>Sign Up</Button></a>
      {/if}
    </div>
	{#if $session && $session.userId}
    <div class="relative ml-3">
      <div>
        <button on:click={toggleDropdown} type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded={showDropdown} aria-haspopup="true">
          <span class="absolute -inset-1.5"></span>
          <span class="sr-only">Open user menu</span>
          <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        </button>
      </div>

      {#if showDropdown}
        <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
          <a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
          <a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
          <button class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white" role="menuitem" tabindex="-1" id="user-menu-item-2" on:click={onClick}>Logout</button>
        </div>
      {/if}
    </div>
	{/if}
  </div>


</nav>

<div on:click={closeDropdown} class:showDropdown={showDropdown}></div>
