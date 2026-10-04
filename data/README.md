# data/ — サイトの中身（正本はGoogleスプレッドシート）

このフォルダのCSVは、Googleスプレッドシートの各シートと1対1で対応します。
シート名 = ファイル名（拡張子なし）。1行目は列名で、スプレッドシートでも同じ列名を使います。

| ファイル | 中身 |
|---|---|
| artists.csv | 人物。カード・要点・SNS・写真クレジット |
| timeline.csv | バンド変遷（年表） |
| gear.csv | 使用機材 |
| gear_videos.csv | 機材が映る動画（YouTube埋め込み。メーカー・販売店・音楽メディアの公式チャンネルのみ） |
| songs.csv | おすすめ曲（公式YouTube） |
| japan.csv | 来日情報 |
| glossary.csv | 機材用語集 |
| news.csv | 更新情報 |
| shop_items.csv | 個人輸入ガイドの「どこで買えるか」一覧。`affiliate_url` を入れるとそのリンクを使い、ページに「PR」表記が出る（スプレッドシート取り込みの対象外。CSVを直接編集） |

## 共通の列
- `status` … `draft`（AIの下書き・確認待ち）／`approved`（本人確認済み＝公開）
  - 本番ビルドでは `approved` の行だけが表示されます。
  - `npm run dev`、環境変数 `SHOW_DRAFTS=1`、Cloudflare Pages の master 以外のブランチ（確認用）では `draft` も「確認待ち」バッジ付きで表示されます。
- `source_url` … 出典URL
- `source_label` … `公式` または `インタビュー`
- `checked_on` … 確認日（YYYY-MM-DD）

## スプレッドシートから取り込む
`npm run sync:sheets` で、スプレッドシートの各シートをCSVとして取り込みます（`scripts/sync-sheets.mjs` 参照）。

## 機材の画像（gear.csv）

- `illust`: 画像がないときに出すイメージ図の形。`superstrat`（ストラト型）/ `singlecut`（レスポール型）/ `doublecut`（SG型）/ `acoustic`（アコースティック）/ `amp-head` / `amp-stack` / `amp-combo` / `modeler` / `pedal`
- `image_url`: 実物の写真（サイト内に置く場合は `public/images/gear/` に保存し `/images/gear/xxx.jpg` と書く）。**使用許可のあるもの（CCライセンス・パブリックドメイン等）だけ**。メーカー公式サイトやSNSの写真は転載しない
- `image_credit` / `image_license` / `image_source_url`: 写真の作者・ライセンス（例: CC BY-SA 4.0）・元ページ。メーカーから使用許可を得た商品画像は `image_license` を「メーカー許諾」、`image_credit` を社名にすると「画像提供：社名」と表示（許可の記録は /mnt/project-files/shred-queens/画像使用許可の記録.md）。`image_url` を入れたら必ず3つとも埋める
