# data/ — サイトの中身（正本はGoogleスプレッドシート）

このフォルダのCSVは、Googleスプレッドシートの各シートと1対1で対応します。
シート名 = ファイル名（拡張子なし）。1行目は列名で、スプレッドシートでも同じ列名を使います。

| ファイル | 中身 |
|---|---|
| artists.csv | 人物（4人）。カード・要点・SNS・写真クレジット |
| timeline.csv | バンド変遷（年表） |
| gear.csv | 使用機材 |
| songs.csv | おすすめ曲（公式YouTube） |
| japan.csv | 来日情報 |
| glossary.csv | 機材用語集 |
| news.csv | 更新情報 |

## 共通の列
- `status` … `draft`（AIの下書き・確認待ち）／`approved`（本人確認済み＝公開）
  - 本番ビルドでは `approved` の行だけが表示されます。
  - `npm run dev`、環境変数 `SHOW_DRAFTS=1`、Cloudflare Pages の master 以外のブランチ（確認用）では `draft` も「確認待ち」バッジ付きで表示されます。
- `source_url` … 出典URL
- `source_label` … `公式` または `インタビュー`
- `checked_on` … 確認日（YYYY-MM-DD）

## スプレッドシートから取り込む
`npm run sync:sheets` で、スプレッドシートの各シートをCSVとして取り込みます（`scripts/sync-sheets.mjs` 参照）。
