import {goto} from '$app/navigation';
import { routes } from '../router';

export const useKeyboardNavigation = (path, e) => {
	console.log('e', e);
	const { previous, next } = routes.find(e => e.current === path)

	if (e.keyCode === 37 && !!previous) {
		goto(previous)
	} else if (e.keyCode === 39 && !!next) {
		goto(next)
	}
}
