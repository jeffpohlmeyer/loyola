<script>
	import { page } from '$app/stores';
	import ContentMain from '../components/ContentMain.svelte';

	import { salary } from '../store';

	import { useKeyboardNavigation } from '../utils/keyboard-navigation';
	const handleKeydown = (e) => useKeyboardNavigation($page.path, e);

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
		},
		{
			year: 'Exams',
			items: ['Took exam C in June, 2014 (Scored 5)', 'Took exam C in October, 2014 (Scored 7)']
		}
	];

	const imgClass = 'object-cover shadow-md rounded-3xl';
	const fallback = {
		src: 'images/metlife.jpg',
		alt: 'MetLife Logo',
		height: '500',
		width: '500'
	};

	const begin = import.meta.env.VITE_METLIFE_STARTING;
	const end = import.meta.env.VITE_METLIFE_ENDING;
</script>

<svelte:window on:keydown={handleKeydown} />

<ContentMain {fallback} {imgClass}>
	<h3 class="text-4xl font-extrabold text-gray-50 tracking-tight sm:text-6xl">Metlife</h3>
	<h4 class="text-2xl sm:text-3xl font-semibold text-gray-50 tracking-tight">
		January, 2016 - October, 2017
	</h4>
	{#if $salary}
		<h5 class="text-xl sm:text-2xl italic text-gray-50 tracking-tight">
			Salary - ${begin} -> ${end}
		</h5>
	{/if}
	<ul role="list" class="divide-y divide-gray-200">
		{#each yearData as { year, items }}
			<li class="py-4 flex">
				<div class="ml-3">
					<p class="text-sm font-medium text-gray-200">{year}</p>
					{#each items as item}
						<p class="text-md text-gray-50">{@html item}</p>
					{/each}
				</div>
			</li>
		{/each}
	</ul>
</ContentMain>
