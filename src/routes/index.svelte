<script>
	import { page } from '$app/stores';
	import ContentMain from '../components/ContentMain.svelte';

	import { useKeyboardNavigation } from '../utils/keyboard-navigation';
	const handleKeydown = (e) => useKeyboardNavigation($page.path, e);

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
		'https://www.twitter.com/jvp3122'
	];

	console.log(import.meta.env);
</script>

<svelte:window on:keydown={handleKeydown} />

<ContentMain {images} {imgClass} {fallback}>
	<div class="lg:mt-16">
		<h3 class="text-4xl font-extrabold text-gray-50 tracking-tight sm:text-6xl">
			I have no idea what I'm doing...
		</h3>
		<p class="my-3 text-lg text-gray-200">
			And, honestly, I never have. And neither do you. And neither do your professors.
		</p>
		<p class="text-md text-gray-200 mt-2">by Jeffrey Pohlmeyer</p>
		<p class="text-sm text-gray-200">ASA, MS, PhD</p>
		<p class="text-sm text-gray-200">
			Senior Backend Software Engineer @
			<a href="https://www.urbint.com" target="_blank">Urbint</a>
		</p>
		<div class='pt-3'>
			{#each links as link}
				<div class="py-0.5 text-md text-gray-300">
					<a href={link} target="_blank">{link}</a>
				</div>
			{/each}
		</div>
	</div>
</ContentMain>
