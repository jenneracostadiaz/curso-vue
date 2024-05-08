// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: true,
	// nitro: {
	// 	prerender: {
	// 		routes: ['/about', 'service', '/contact', '/'],
	// 	},
	// },
	// routeRules: {
	// 	'/': { prerender: true },
	// 	'/about': { ssr: true },
	// 	'/service': { ssr: true },
	// 	'/contact': { ssr: true },
	// 	'/projects': { ssr: false },
	// },
	nitro: {
		plugins: ['~/server/index.ts'],
	},
	runtimeConfig: {
		mongodbUri: process.env.MONGODB_URI,
	},
});
