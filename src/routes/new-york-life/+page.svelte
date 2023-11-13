<script lang="ts">
  import { page } from '$app/stores';
  import ContentMain from '$lib/components/ContentMain.svelte';

  import { useKeyboardNavigation } from '$lib/utils/keyboard-navigation';

  const handleKeydown = (e: Event) => useKeyboardNavigation($page.url.pathname, e);
  const yearData = [
    {
      year: 'December, 2013 - July, 2015',
      items: [
        'Product development in Group Membership',
        'In Sleepy Hollow office',
        'Worked on creating critical illness, ART, simple riders, etc.'
      ]
    },
    {
      year: 'July, 2015 - January, 2016',
      items: [
        'Mainly pension risk transfer pricing',
        'In Parsippany office (later moved to Jersey City)'
      ]
    },
    {
      year: 'Exams',
      items: ['Took exam C in June, 2014 (Scored 5)', 'Took exam C in October, 2014 (Scored 7)']
    }
  ];

  const imgClass = 'object-cover shadow-md rounded-3xl';
  const fallback = {
    src: 'images/new-york-life.jpg',
    alt: 'New York Life Logo',
    height: '500',
    width: '500'
  };
</script>

<svelte:head>
  <title>New York Life</title>
</svelte:head>
<svelte:window on:keydown={handleKeydown} />

<ContentMain {fallback} {imgClass}>
  <h3 class="text-4xl font-extrabold tracking-tight text-gray-50 sm:text-6xl">New York Life</h3>
  <h4 class="text-2xl font-semibold tracking-tight text-gray-50 sm:text-3xl">
    December, 2013 - January, 2016
  </h4>
  <ul role="list" class="divide-y divide-gray-200">
    {#each yearData as { year, items }}
      <li class="flex py-4">
        <div>
          <p class="text-sm font-medium text-gray-200">{year}</p>
          {#each items as item}
            <p class="text-md text-gray-50">{@html item}</p>
          {/each}
        </div>
      </li>
    {/each}
  </ul>
</ContentMain>
