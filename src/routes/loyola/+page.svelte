<script lang="ts">
  import { page } from '$app/stores';
  import ContentMain from '$lib/components/ContentMain.svelte';

  import { useKeyboardNavigation } from '$lib/utils/keyboard-navigation';
  const handleKeydown = (e: Event) => useKeyboardNavigation($page.url.pathname, e);

  const yearData = [
    {
      year: '2000-2001',
      items: [
        'Entered with a $5000/year scholarship.',
        'Lost said scholarship in one semester.',
        'Had to actually <em>study</em> for math class.'
      ]
    },
    {
      year: '2001-2002',
      items: [
        'Second year of primarily focusing on core classes.',
        "Attended men's workshop in spring 2022 when I realized what I wanted to do with my life..."
      ]
    },
    {
      year: '2002-2003',
      items: [
        'Spent the entire year on a paid vacation for which I got credit studying in Montpellier, France.',
        "Didn't take a single math class."
      ]
    },
    {
      year: '2003-2004',
      items: [
        'Three 400-level math courses in the fall semester.',
        'Five 400-level in the spring.',
        'Including a Complex Variables independent study.'
      ]
    }
  ];
  const imgClass = 'object-cover shadow-md rounded-3xl';
  const fallback = {
    src: 'images/loyola.jpg',
    alt: 'Loyola Logo',
    height: '500',
    width: '500'
  };
</script>

<svelte:head>
  <title>Loyola</title>
</svelte:head>
<svelte:window on:keydown={handleKeydown} />

<ContentMain {fallback} {imgClass}>
  <h3 class="text-4xl font-extrabold tracking-tight text-gray-50 sm:text-6xl">Loyola</h3>
  <h4 class="text-2xl font-semibold tracking-tight text-gray-50 sm:text-3xl">
    September, 2000 - May, 2004
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
