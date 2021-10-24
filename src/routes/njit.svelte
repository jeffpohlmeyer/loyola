<script>
	import { page } from '$app/stores';
	import ContentMain from '../components/ContentMain.svelte';

	import { salary } from '../store';

	import { useKeyboardNavigation } from '../utils/keyboard-navigation';
	const handleKeydown = (e) => useKeyboardNavigation($page.path, e);

	const yearData = [
		{
			year: 'September, 2008 - June, 2010',
			items: [
				'The grad-school equivalent of core classes',
				'Not much in the way of research opportunities',
				'No real TA responsibilities',
				'Sat for quals (3 sets)',
				'Very minimal stipend'
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
			items: [
				'Finished up research',
				'Didn\'t have much in terms of coursework'
			]
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
	const begin = import.meta.env.VITE_NJIT
</script>

<svelte:window on:keydown={handleKeydown} />

<ContentMain {fallback} {imgClass}>
	<h3 class="text-4xl font-extrabold text-gray-50 tracking-tight sm:text-6xl">NJIT</h3>
	<h4 class="text-2xl sm:text-3xl font-semibold text-gray-50 tracking-tight">
		September, 2008 - May, 2013
	</h4>
	{#if $salary}
		<h5 class="text-xl sm:text-2xl italic text-gray-50 tracking-tight">"Salary" - ${begin}</h5>
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
