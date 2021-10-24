<script>
	import { page } from '$app/stores';
	import ContentMain from '../components/ContentMain.svelte';

	import { salary } from '../store';

	import { useKeyboardNavigation } from '../utils/keyboard-navigation';
	const handleKeydown = (e) => useKeyboardNavigation($page.path, e);

	const things = [
		"Not really sure what I'll be doing",
		"I've already been farmed out to another group"
	];

	const imgClass = 'object-cover shadow-md rounded-3xl';
	const fallback = {
		src: 'images/urbint.jpg',
		alt: 'Urbint Logo',
		height: '500',
		width: '500'
	};

	const begin = import.meta.env.VITE_URBINT;
</script>

<svelte:window on:keydown={handleKeydown} />

<ContentMain {fallback} {imgClass}>
	<h3 class="text-4xl font-extrabold text-gray-50 tracking-tight sm:text-6xl">Urbint</h3>
	<h4 class="text-2xl sm:text-3xl font-semibold text-gray-50 tracking-tight">
		October, 2021 - Present
	</h4>
	{#if $salary}
		<h5 class="text-xl sm:text-2xl italic text-gray-50 tracking-tight">
			Salary - ${begin}
		</h5>
	{/if}
	<ul role="list" class="divide-y divide-gray-200">
		<li class="py-4 flex">
			<div class="ml-3">
				{#each things as thing}
					<p class="text-md font-medium text-gray-200 py-1">{thing}</p>
				{/each}
			</div>
		</li>
	</ul>
</ContentMain>
