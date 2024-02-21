import sveltePreprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: sveltePreprocess({
		scss: {
			prependData: '@use "src/styles/variables.scss";'
		}
	})
};

export default config;
// export default {
// 	// Consult https://svelte.dev/docs#compile-time-svelte-preprocess
// 	// for more information about preprocessors
// 	preprocess: vitePreprocess()
// };
