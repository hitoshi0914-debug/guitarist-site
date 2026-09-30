# SHRED QUEENS（海外の女性ギタリスト図鑑）

ニタ・ストラウス、コートニー・コックス、ブリット・ライトニング、アンナ・カーラの4人を、経歴・機材・来日情報まで出典つきで紹介するファンサイトです。

- 本番（予定）: https://queensofshred.com/ （Astro + Cloudflare Pages）
- 旧サイト: https://hitoshi0914-debug.github.io/guitarist-site/ （`docs/` フォルダ。新サイトに切り替えるまで残します）

## しくみ
| 場所 | 役割 |
|---|---|
| `data/*.csv` | サイトの中身。Googleスプレッドシート（正本）の各シートと同じ形。説明は `data/README.md` |
| `src/pages/ja/` | 日本語ページ。英語版は後から `src/pages/en/` に同じ形で追加 |
| `src/components/` | トレカ風カード、出典リンク、確認日、編集部より、広告枠など |
| `src/lib/site.ts` | サイト名・メニュー・ストリートチームのSNS URL |
| `scripts/sync-sheets.mjs` | スプレッドシートから `data/*.csv` を取り込む |

公開ルール: AIが `status=draft` で下書き → 本人が確認して `approved` に変更 → 本番に表示。

## 手元で動かす
```
npm install
npm run dev        # http://localhost:4321/ja/ （下書きも「確認待ち」付きで表示）
npm run build      # 本番用（approved のみ）を dist/ に出力
```

## Cloudflare Pages の設定
- ダッシュボード: https://dash.cloudflare.com/ → Workers & Pages → 作成 → Pages → Git に接続 → このリポジトリ
- ビルドコマンド: `npm run build` ／ 出力ディレクトリ: `dist`
- 環境変数（あとで）: `PUBLIC_GA_ID`（GA4）、`PUBLIC_ADSENSE_CLIENT`（アドセンス）、`SHEET_ID`（スプレッドシート）
- プレビュー環境だけ `SHOW_DRAFTS=1` にすると、下書きも確認できます
