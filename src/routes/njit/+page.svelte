<script lang="ts">
  import { page } from '$app/stores';
  import ContentMain from '$lib/components/ContentMain.svelte';

  import { useKeyboardNavigation } from '$lib/utils/keyboard-navigation';
  const handleKeydown = (e: Event) => useKeyboardNavigation($page.url.pathname, e);
  const yearData = [
    {
      year: 'September, 2008 - June, 2010',
      items: [
        'Took the grad-school equivalent of core classes',
        'Not much in the way of research opportunities nor any real TA responsibilities',
        'Sat for quals (3 sets)'
      ]
    },
    {
      year: 'September, 2010 - December, 2011',
      items: [
        'Still doing some coursework',
        'Began working on the main research project that would be the foundation for my dissertation'
      ]
    },
    {
      year: 'January, 2012 - March, 2012',
      items: [
        'Spent nearly a full term at Oxford with my advisor',
        'Work resulted in one published paper',
        "Began researching what I'd need to do to become a quant (read <a href='https://www.amazon.com/Options-Futures-Other-Derivatives-9th/dp/0133456315' target='_blank' class='italic'>Options, Futures, and Other Derivatives</a> by Hull)"
      ]
    },
    {
      year: 'March, 2012 - December, 2012',
      items: ['Finished up research', "Didn't have much in terms of coursework"]
    },
    {
      year: 'January, 2013 - May, 2013',
      items: [
        'Post-doc appointment at NJIT continuing research and teaching 3 classes',
        'Started studying to try to become an actuary',
        'Took exam P in January, 2013 (Scored 7)',
        'Took exam FM in April, 2013 (Scored 8)'
      ]
    }
  ];
  const imgClass = 'object-cover shadow-md rounded-3xl';
  const fallback = {
    src: 'images/njit.jpg',
    alt: 'NJIT Logo',
    height: '500',
    width: '500'
  };
</script>

<svelte:head>
  <title>NJIT</title>
</svelte:head>
<svelte:window on:keydown={handleKeydown} />

<ContentMain {fallback} {imgClass}>
  <h3 class="text-4xl font-extrabold tracking-tight text-gray-50 sm:text-6xl">NJIT</h3>
  <h4 class="text-2xl font-semibold tracking-tight text-gray-50 sm:text-3xl">
    September, 2008 - May, 2013
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
