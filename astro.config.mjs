// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://showgayaki.github.io',
    outDir: './docs',
    server: {
        host: true,
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
        },
        ssr: {
          external: ['fsevents'],
        }
    },
});
