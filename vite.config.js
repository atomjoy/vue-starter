import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [
		laravel({
			input: ['resources/css/app.css', 'resources/js/app.js'],
			refresh: true,
		}),
		vue({
			template: {
				transformAssetUrls: {
					base: null,
					includeAbsolute: false,
				},
				// compilerOptions: {
				// 	isCustomElement: (tag) => ['center'].includes(tag),
				// },
			},
		}),
	],
	base: './', // for vue-router
	build: {
		emptyOutDir: true,
		chunkSizeWarningLimit: 2048, // Kb - for fontawesome import
	},
    // Or change assets dir
	// build: {
	// 	rollupOptions: {
	// 		output: {
	// 			assetFileNames: 'assets/[ext]/[name].[hash].[extname]',
	// 			chunkFileNames: 'chunks/[name].[hash].js',
	// 			entryFileNames: 'js/[name].[hash].js',
	// 		},
	// 	},
	// },
	// resolve: {
	//     alias: {
	//         vue: 'vue/dist/vue.esm-bundler.js',
	//     },
	// },
})