<script lang="ts">
  import { page } from '$app/stores';
  import ContentMain from '$lib/components/ContentMain.svelte';

  import { useKeyboardNavigation } from '$lib/utils/keyboard-navigation';

  const handleKeydown = (e: Event) => useKeyboardNavigation($page.url.pathname, e);
  const yearData = [
    {
      year: 'January, 2016 - October, 2017',
      items: [
        'Asset model validation actuary',
        'Performed model validation on a wide variety of models',
        'Reverse stress test model',
        'Proprietary risk manager model',
        'CDS valuation model',
        'Derivatives valuation model'
      ]
    },
    {
      year: 'Exams',
      items: [
        'Finished the Interim Assessment (IA) and attained the ASA designation',
        'Took exam QFI Core (Scored 6)',
        'Decided that, while studying for QFI Advanced, I no longer wanted to be an actuary'
      ]
    }
  ];

  const imgClass = 'object-cover shadow-md rounded-3xl';
  const fallback = {
    src: 'images/metlife.jpg',
    alt: 'MetLife Logo',
    height: '500',
    width: '500'
  };
</script>

<svelte:head>
  <title>MetLife</title>
</svelte:head>
<svelte:window on:keydown={handleKeydown} />

<ContentMain {fallback} {imgClass}>
  <h3 class="text-4xl font-extrabold tracking-tight text-gray-50 sm:text-6xl">Metlife</h3>
  <h4 class="text-2xl font-semibold tracking-tight text-gray-50 sm:text-3xl">
    January, 2016 - October, 2017
  </h4>
  <ul role="list" class="divide-y divide-gray-200">
    {#each yearData as { year, items }}
      <li class="py-4">
        <p class="text-sm font-medium text-gray-200">{year}</p>
        <ul class="list-inside list-disc space-y-0.5">
          {#each items as item}
            <li class="text-md text-gray-50">{@html item}</li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</ContentMain>
