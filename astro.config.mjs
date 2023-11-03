import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'MPW',
			social: {
				reddit: 'https://reddit.com/r/edmproduction',
			},
			sidebar: [
				{
					label: 'About',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'About this wiki', link: '/about/' },
						{ label: 'Contributing', link: '/contributing/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
