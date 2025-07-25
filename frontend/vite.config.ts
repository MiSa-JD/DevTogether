import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	return {
		plugins: [
			sveltekit(),
			tailwindcss(),
		],
		server: {
			proxy: {
				'/api': {
					target: env.VITE_API_URL,
					changeOrigin: true
				}
			}
		}
	}
});
