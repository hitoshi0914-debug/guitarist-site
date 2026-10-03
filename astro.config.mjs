import { defineConfig } from 'astro/config';

import fs from 'node:fs';
import sitemap from '@astrojs/sitemap';

// 個人輸入ガイドは公開済み（approved）の販売先が1つもないうちは「準備中」なのでサイトマップに入れない
const importGuideReady = /,approved\s*$/m.test(fs.readFileSync('data/shop_items.csv', 'utf8'));

// 本番URL（Cloudflare Pages + 独自ドメイン）
export default defineConfig({
  site: 'https://queensofshred.com',
  trailingSlash: 'always',
  // サイトマップ（Search Console用）。ルート / は /ja/ への転送なので除外
  integrations: [sitemap({ filter: (page) => page !== 'https://queensofshred.com/' && (importGuideReady || !page.endsWith('/ja/import-guide/')) })],
});