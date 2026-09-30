import { defineConfig } from 'astro/config';

// 本番URL（Cloudflare Pages + 独自ドメイン）
export default defineConfig({
  site: 'https://queensofshred.com',
  trailingSlash: 'always',
});
