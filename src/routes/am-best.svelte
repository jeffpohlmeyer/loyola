<script>
	import { page } from '$app/stores';
	import ContentMain from '../components/ContentMain.svelte';

	import { salary } from '../store';

	import { useKeyboardNavigation } from '../utils/keyboard-navigation';
	const handleKeydown = (e) => useKeyboardNavigation($page.path, e);

	const things = [
		'Got the job because I am a PhD, actuary, and had programming experience',
		'Had a set of analytical models in 8 separate spreadsheets',
		'Needed to create a unified dashboard for internal analyst consumption (and eventual external sale)',
		'I served as the lead (and essentially sole) full-stack web developer on the project'
	];

	const imgClass = 'object-cover shadow-md rounded-3xl';
	const fallback = {
		src: 'images/am-best.jpg',
		alt: 'AM Best Logo',
		height: '500',
		width: '500'
	};

	const begin = import.meta.env.VITE_AM_BEST_STARTING;
	const end = import.meta.env.VITE_AM_BEST_ENDING;
</script>

<svelte:window on:keydown={handleKeydown} />

<ContentMain {fallback} {imgClass}>
	<h3 class="text-4xl font-extrabold text-gray-50 tracking-tight sm:text-6xl">AM Best</h3>
	<h4 class="text-2xl sm:text-3xl font-semibold text-gray-50 tracking-tight">
		November, 2017 - September, 2021
	</h4>
	{#if $salary}
		<h5 class="text-xl sm:text-2xl italic text-gray-50 tracking-tight">
			Salary - ${begin} -> ${end}
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
