<script lang="ts">
  import { page } from '$app/stores';
  import ContentMain from '$lib/components/ContentMain.svelte';

  import { useKeyboardNavigation } from '$lib/utils/keyboard-navigation';
  const handleKeydown = (e: Event) => useKeyboardNavigation($page.url.pathname, e);

  const things = [
    'Got the job because I am a PhD, actuary, and had programming experience',
    'Had a set of analytical models in 8 separate spreadsheets',
    'Needed to create a unified dashboard for internal analyst consumption (and eventual external sale)',
    'I served as the lead (and essentially sole) full-stack web developer on the project'
  ];

  const imgClass = 'object-cover shadow-md rounded-3xl';
  const fallback = {
    src: 'images/am-best.jpg',
    alt: 'AM Best Logo',
    height: '500',
    width: '500'
  };
</script>

<svelte:head>
  <title>AM Best</title>
</svelte:head>
<svelte:window on:keydown={handleKeydown} />

<ContentMain {fallback} {imgClass}>
  <h3 class="text-4xl font-extrabold tracking-tight text-gray-50 sm:text-6xl">AM Best</h3>
  <h4 class="text-2xl font-semibold tracking-tight text-gray-50 sm:text-3xl">
    November, 2017 - September, 2021
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
