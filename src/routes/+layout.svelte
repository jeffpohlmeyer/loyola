<script lang="ts">
  import '../app.css'
  import { page } from '$app/stores';
  import { routes } from '$lib/router';
  import { goto } from '$app/navigation';
  import { waves } from '$lib/stores';


  $: route = routes.find((e) => e.current === $page.url.pathname);
  $: next = route ? route.next : null;
  $: previous = route ? route.previous : null;

  function handle_next()  {
      if (route?.next) {
          goto(route.next);
      }
  };
  function handle_previous() {
      if (route?.previous) {
          goto(route.previous);
      }
  };
</script>

<!-- Wave functionality taken from https://codepen.io/goodkatz/pen/LYPGxQz?editors=1100 -->

<div class="relative bg-gradient-to-r from-blue-700 to-red-500 text-gray-50">
  <main class="min-h-[100vh] lg:min-h-[80vh] w-full m-0 p-0 md:mb-8 lg:mb-0">
    <div class="w-full flex justify-end items-center pr-48 h-16">
      <div class="relative flex items-start px-2">
        <div class="flex items-center h-5">
          <input
              id="waves"
              aria-describedby="waves-description"
              name="waves"
              type="checkbox"
              class="focus:ring-blue-600 h-4 w-4 text-blue-700 border-gray-300 rounded"
              bind:checked={$waves}
          />
        </div>
        <div class="ml-1 text-sm">
          <label for="waves" class="font-medium text-gray-200">Waves</label>
        </div>
      </div>
    </div>
    <div class="relative bg-transparent pt-16 overflow-hidden">
      <div class="relative">
        <div class="lg:mx-auto lg:max-w-screen-2xl lg:px-8">
          <slot />
        </div>
      </div>
    </div>
  </main>

  <!--Waves Container-->
  <div class="bg-gradient-to-r from-blue-700 to-red-500 lg:min-h-0">
    <svg
        class="relative w-full lg:h-[20vh] -mb-[7px]"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
    >
      <defs>
        <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class:parallax={$waves}>
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
      </g>
    </svg>
  </div>

  {#if !!next}
    <div
        class="absolute bg-white rounded-full top-16 p-1 text-gray-600 md:text-gray-100 md:bg-transparent md:rounded-none md:top-1/2 right-3 cursor-pointer transform hover:scale-125"
        on:click={handle_next}
    >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  {/if}
  {#if !!previous}
    <div
        class="absolute bg-white rounded-full top-16 p-1 text-gray-600 md:text-gray-100 md:bg-transparent md:rounded-none md:top-1/2 left-3 cursor-pointer transform hover:scale-125"
        on:click={handle_previous}
    >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  {/if}
</div>
<!--Header ends-->

<!--&lt;!&ndash;Content starts&ndash;&gt;-->
<!--<div class="relative h-[20vh] text-center bg-gray-50 flex justify-center items-center text-center">-->
<!--	<p>Daniel Österman | 2019 | Free to use</p>-->

<!--</div>-->
<style>
  /* Animation */

  .parallax > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }
</style>