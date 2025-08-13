// astro.config.mjs (사이트맵 필터링 추가 최종본)
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://haebwa.com', 
  integrations: [
    tailwind({ applyBaseStyles: false }), 
    mdx(),
    sitemap({
      // ▼▼▼ 이 필터 함수가 추가되었습니다. ▼▼▼
      // 페이지 주소(page)에 '/blog/'가 포함되고, 그 뒤에 숫자가 오는 경우
      // (즉, /blog/2, /blog/3 같은 페이지)는 사이트맵에 포함하지 않습니다.
      filter: (page) => !/^\/blog\/\d+/.test(new URL(page).pathname),
    })
  ]
});