import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// 本番URL（Cloudflare Pages + 独自ドメイン）
export default defineConfig({
  site: 'https://queensofshred.com',
  trailingSlash: 'always',
  // サイトマップ（Search Console用）。ルート / は /ja/ への転送なので除外
  integrations: [sitemap({ filter: (page) => page !== 'https://queensofshred.com/' })],
});