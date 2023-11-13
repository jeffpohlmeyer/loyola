<script lang="ts">
  import { page } from '$app/stores';
  import ContentMain from '$lib/components/ContentMain.svelte';

  import { useKeyboardNavigation } from '$lib/utils/keyboard-navigation';
  const handleKeydown = (e: Event) => useKeyboardNavigation($page.url.pathname, e);
  const things = [
    'Hired as the lead frontend developer for a ~10-person startup.',
    'Responsible for applying idiomatic VueJS practices and web standards to a previously constructed platform.',
    'Also responsible for providing "on-the-fly" design expertise.',
    'Converted previous corporate site from WordPress to SvelteKit as well as created a marketing site from scratch in the same framework.'
  ];

  const imgClass = 'object-cover shadow-md rounded-3xl bg-white h-full px-16 py-12';
  const fallback = {
    src: 'images/arqu-logo.svg',
    alt: 'arqu Logo',
    height: '250',
    width: '500'
  };
</script>

<svelte:head>
  <title>arqu</title>
</svelte:head>
<svelte:window on:keydown={handleKeydown} />

<ContentMain {fallback} {imgClass}>
  <h3 class="text-4xl font-extrabold tracking-tight text-gray-50 sm:text-6xl">arqu</h3>
  <h4 class="text-2xl font-semibold tracking-tight text-gray-50 sm:text-3xl">
    June, 2022 - Present
  </h4>
  <ul role="list" class="list-inside list-disc space-y-2.5 pt-2">
    {#each things as thing}
      <li class="text-md font-medium text-gray-200">{thing}</li>
    {/each}
  </ul>
</ContentMain>
