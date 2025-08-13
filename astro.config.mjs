// astro.config.mjs (sitemap 흔적을 완전히 지운 상태)
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// import sitemap from "@astrojs/sitemap";  <-- 이 줄이 사라졌습니다.

export default defineConfig({
  site: 'https://haebwa.com', 
  integrations: [
    tailwind({ applyBaseStyles: false }),
    // sitemap()  <-- 이 부분이 사라졌습니다.
    mdx(),
    sitemap()
  ]
});