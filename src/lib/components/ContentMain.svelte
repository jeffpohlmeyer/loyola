<script lang="ts">
  export let fallback: { src: string; alt: string; height: string; width: string };
  export let imgClass: string;
  export let wrapperClass = '';
</script>

<div class="relative px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:px-8">
  <!-- LHS	-->
  <div class="relative">
    <slot />
  </div>

  <!-- RHS	-->
  <div class="relative -mx-4 mt-10 flex items-center lg:mt-0" aria-hidden="true">
    <!--	dots	-->
    <!--		<svg-->
    <!--			class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden -z-10"-->
    <!--			width="784"-->
    <!--			height="404"-->
    <!--			fill="none"-->
    <!--			viewBox="0 0 784 404"-->
    <!--		>-->
    <!--			<defs>-->
    <!--				<pattern-->
    <!--					id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"-->
    <!--					x="0"-->
    <!--					y="0"-->
    <!--					width="20"-->
    <!--					height="20"-->
    <!--					patternUnits="userSpaceOnUse"-->
    <!--				>-->
    <!--					<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />-->
    <!--				</pattern>-->
    <!--			</defs>-->
    <!--			<rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />-->
    <!--		</svg>-->

    <!--	image	-->
    {#if !!fallback}
      <div class="w-full {wrapperClass}">
        <img class="mx-auto {imgClass}" {...fallback} />
      </div>
    {/if}
  </div>
</div>
