<script lang="ts">
  import { page } from '$app/stores';
  import ContentMain from '$lib/components/ContentMain.svelte';

  import { useKeyboardNavigation } from '$lib/utils/keyboard-navigation';
  const handleKeydown = (e: Event) => useKeyboardNavigation($page.url.pathname, e);

  const imgClass = 'object-cover shadow-md rounded-3xl';
  const images = [
    {
      srcset: 'images/jeff-image.webp',
      type: 'image/webp'
    }
  ];
  const fallback = {
    src: 'images/jeff-image.jpeg',
    alt: 'Jeff Photo',
    height: '500',
    width: '500',
    loading: 'lazy'
  };
  const links = [
    'https://www.jvp.design',
    'https://github.com/jeffpohlmeyer',
    'https://www.linkedin.com/in/jeffrey-pohlmeyer',
    'https://twitter.com/jvp3122',
    'https://twitter.com/jvpdesignllc'
  ];
</script>

<svelte:head>
  <title>jvp.xyz</title>
</svelte:head>
<svelte:window on:keydown={handleKeydown} />

<ContentMain {imgClass} {fallback}>
  <div class="lg:mt-16">
    <h3 class="text-4xl font-extrabold tracking-tight text-gray-50 sm:text-6xl">
      I have no idea what I'm doing...
    </h3>
    <p class="my-3 text-lg text-gray-200">
      And, honestly, I never have. And neither do you. And neither do your professors.
    </p>
    <p class="text-md mt-2 text-gray-200">by Jeffrey Pohlmeyer</p>
    <p class="text-sm text-gray-200">ASA, MS, PhD</p>
    <p class="text-sm text-gray-200">
      Staff Engineer @
      <a href="https://www.arqu.co" target="_blank">arqu</a>
    </p>
    <div class="pt-3">
      {#each links as link}
        <div class="text-md py-0.5 text-gray-300">
          <a href={link} target="_blank">{link}</a>
        </div>
      {/each}
    </div>
  </div>
</ContentMain>
