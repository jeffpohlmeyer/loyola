<script lang="ts">
  import { page } from '$app/stores';
  import ContentMain from '$lib/components/ContentMain.svelte';

  import { useKeyboardNavigation } from '$lib/utils/keyboard-navigation';
  const handleKeydown = (e: Event) => useKeyboardNavigation($page.url.pathname, e);

  const imgClass = 'object-cover shadow-md rounded-3xl';
  const fallback = {
    src: 'images/montclair.jpg',
    alt: 'Montclair Logo',
    height: '500',
    width: '500'
  };
  const things = [
    {
      title: 'School',
      subTitle: '2006-2008',
      items: [
        'Montclair State University - MS in pure and applied math',
        'Did a minor research project with a professor on pseudo spectral methods',
        'Graduated with a 3.97 GPA'
      ]
    },
    {
      title: 'Work',
      items: [
        'August, 2004 - December, 2004: Waited tables in Times Square',
        'December, 2004 - February, 2005: Lived with friends and did odd jobs',
        'February, 2005 - April, 2005: Customer service at a camera company',
        'April, 2005 - March, 2007: Used my French skills in a temp-to-permanent role',
        'March, 2007 - August, 2007: Generic data analyst',
        'September, 2007 - June, 2008: High school teacher',
        'June, 2008 - August, 2008: Community college adjunct professor'
      ]
    }
  ];
</script>

<svelte:head>
  <title>Post-Loyola</title>
</svelte:head>
<svelte:window on:keydown={handleKeydown} />

<ContentMain {fallback} {imgClass}>
  <h3 class="text-4xl font-extrabold tracking-tight text-gray-50 sm:text-6xl">Post-Loyola</h3>
  <h4 class="text-2xl font-semibold tracking-tight text-gray-50 sm:text-3xl">
    June, 2004-September, 2008
  </h4>
  <ul role="list" class="divide-y divide-gray-200">
    {#each things as { title, items, subTitle }}
      <li class="flex py-4">
        <div>
          <p class="text-sm font-medium text-gray-200">{title}</p>
          {#if subTitle}
            <p class="text-sm font-medium text-gray-300"><em>{subTitle}</em></p>
          {/if}
          <ul class="list-inside list-disc space-y-0.5">
            {#each items as item}
              <li class="text-md text-gray-50">{@html item}</li>
            {/each}
          </ul>
        </div>
      </li>
    {/each}
  </ul>
</ContentMain>
