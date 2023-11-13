<script lang="ts">
  import { page } from '$app/stores';
  import ContentMain from '$lib/components/ContentMain.svelte';

  import { useKeyboardNavigation } from '$lib/utils/keyboard-navigation';
  const handleKeydown = (e: Event) => useKeyboardNavigation($page.url.pathname, e);

  const things = [
    'Did a couple of projects as an actuarial intern',
    'Decent learning opportunity but not what I really wanted',
    'Got the job by cold-emailing people in the SOA directory',
    'Took exam MFE in July, 2013 (Scored 8)',
    'Took exam MLC in November, 2013 (Scored 7)'
  ];

  const imgClass = 'object-cover shadow-md rounded-3xl';
  const fallback = {
    src: 'images/ace.jpg',
    alt: 'ACE Group Logo',
    height: '500',
    width: '500'
  };
</script>

<svelte:head>
  <title>ACE Group</title>
</svelte:head>
<svelte:window on:keydown={handleKeydown} />

<ContentMain {fallback} {imgClass}>
  <h3 class="text-4xl font-extrabold tracking-tight text-gray-50 sm:text-6xl">
    ACE Group (Now Chubb)
  </h3>
  <h4 class="text-2xl font-semibold tracking-tight text-gray-50 sm:text-3xl">
    May, 2013 - December, 2013
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
