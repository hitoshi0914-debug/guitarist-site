// Googleスプレッドシート（正本）の各シートを data/*.csv に取り込む。
// 使い方:
//   1. スプレッドシートを「リンクを知っている全員が閲覧可」にする（編集権限は渡さない）
//   2. 環境変数 SHEET_ID にスプレッドシートのID（URLの /d/ と /edit の間）を入れる
//   3. npm run sync:sheets
// シート名は data/ のファイル名（artists, timeline, gear, gear_videos, songs, japan, glossary, news）と同じにする。
import fs from 'node:fs';
import path from 'node:path';

const SHEET_ID = process.env.SHEET_ID;
const SHEETS = ['artists', 'timeline', 'gear', 'gear_videos', 'songs', 'japan', 'glossary', 'news'];

if (!SHEET_ID) {
  console.log('SHEET_ID が未設定なので、リポジトリ内の data/*.csv をそのまま使います。');
  process.exit(0);
}

const dir = path.resolve('data');
for (const name of SHEETS) {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(name)}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`× ${name}: 取得できませんでした (${res.status})`);
    process.exitCode = 1;
    continue;
  }
  fs.writeFileSync(path.join(dir, `${name}.csv`), await res.text());
  console.log(`✓ ${name}`);
}
