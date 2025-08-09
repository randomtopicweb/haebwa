// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // ▼▼▼ 중요! 지금은 임시 주소를 넣고, 나중에 개인 도메인을 사면 그 주소로 바꾸세요. ▼▼▼
  // 예: site: 'https://haebwa.com',
  site: 'https://haebwa.pages.dev', // Cloudflare에서 받을 주소를 예상해서 적습니다. 
  integrations: [
    tailwind({ applyBaseStyles: false }), 
    mdx(), 
    sitemap()
  ]
});