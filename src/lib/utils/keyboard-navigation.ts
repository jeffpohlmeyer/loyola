import {goto} from '$app/navigation';
import { routes } from '$lib/router';

export async function useKeyboardNavigation(path: string, e: KeyboardEvent) {
	const { previous, next } = routes.find(e => e.current === path) ?? {previous: null, next: null}

	if (e.keyCode === 37 && !!previous) {
		await goto(previous)
	} else if (e.keyCode === 39 && !!next) {
		await goto(next)
	}
}
