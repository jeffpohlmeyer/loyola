<script lang="ts">
  import { page } from '$app/stores';
  import ContentMain from '$lib/components/ContentMain.svelte';

  import { useKeyboardNavigation } from '$lib/utils/keyboard-navigation';
  const handleKeydown = (e: Event) => useKeyboardNavigation($page.url.pathname, e);
  const things = [
    'Worked on FastAPI-based backend for a little bit.',
    'Got loaned out to another group soon after joining.',
    'Due to a fairly toxic work environment, as well as a horrendous manager, I left after 8 months.'
  ];

  const imgClass = 'object-cover shadow-md rounded-3xl';
  const fallback = {
    src: 'images/urbint.jpg',
    alt: 'Urbint Logo',
    height: '500',
    width: '500'
  };
</script>

<svelte:head>
  <title>Urbint</title>
</svelte:head>
<svelte:window on:keydown={handleKeydown} />

<ContentMain {fallback} {imgClass}>
  <h3 class="text-4xl font-extrabold tracking-tight text-gray-50 sm:text-6xl">Urbint</h3>
  <h4 class="text-2xl font-semibold tracking-tight text-gray-50 sm:text-3xl">
    October, 2021 - June, 2022
  </h4>
  <ul role="list" class="divide-y divide-gray-200">
    <li class="flex py-4">
      <div>
        {#each things as thing}
          <p class="text-md py-1 font-medium text-gray-200">{thing}</p>
        {/each}
      </div>
    </li>
  </ul>
</ContentMain>
