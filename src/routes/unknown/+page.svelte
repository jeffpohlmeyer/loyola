<script lang="ts">
  import { page } from '$app/stores';

  import { useKeyboardNavigation } from '$lib/utils/keyboard-navigation';
  const handleKeydown = (e: Event) => useKeyboardNavigation($page.url.pathname, e);
</script>

<svelte:head>
  <title>What's Next?</title>
</svelte:head>
<svelte:window on:keydown={handleKeydown} />
<div class="relative px-4 sm:px-6 lg:mt-16 lg:grid lg:place-content-center lg:gap-8 lg:px-8">
  <div class="h-huge w-huge text-gray-50">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
</div>
