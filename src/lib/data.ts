// data/*.csv（Googleスプレッドシートの各シートと同じ形）を読み込む。
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'csv-parse/sync';

const DATA_DIR = path.resolve(process.cwd(), 'data');

// 本番では status=approved の行だけ出す。開発中・プレビューでは下書きも出す。
// Cloudflare Pages は CF_PAGES_BRANCH を自動で渡すので、master 以外のブランチ（確認用）は下書き込みになる。
const branch = process.env.CF_PAGES_BRANCH;
export const SHOW_DRAFTS =
  import.meta.env.DEV || process.env.SHOW_DRAFTS === '1' || (!!branch && branch !== 'master');

type Row = Record<string, string> & { status?: string };

function load<T extends Row>(name: string): T[] {
  const file = path.join(DATA_DIR, `${name}.csv`);
  if (!fs.existsSync(file)) return [];
  const rows = parse(fs.readFileSync(file, 'utf8'), {
    columns: true,
    skip_empty_lines: true,
    trim: true,
    bom: true,
  }) as T[];
  return rows.filter((r) => r.status === 'approved' || (SHOW_DRAFTS && r.status === 'draft'));
}

export const isDraft = (r: Row) => r.status !== 'approved';

export type Artist = Row & {
  id: string; order: string; featured: string; name_ja: string; name_en: string; nickname: string;
  country: string; current_band: string; main_guitar: string; signature_song: string;
  points_ja: string; bio_ja: string; editor_note_ja: string;
  official_site: string; instagram: string; x: string; facebook: string; youtube: string; tiktok: string;
  photo_url: string; photo_credit: string; photo_license: string; photo_source_url: string;
  color: string; checked_on: string; source_url: string; source_label: string;
};
export type Timeline = Row & { artist_id: string; year_from: string; year_to: string; band: string; role_ja: string; source_url: string; source_label: string; checked_on: string };
export type Gear = Row & { artist_id: string; category: string; item: string; maker: string; maker_url: string; illust: string; note_ja: string; image_url: string; image_credit: string; image_license: string; image_source_url: string; image_note: string; source_url: string; source_label: string; checked_on: string };
export type GearVideo = Row & { artist_id: string; youtube_id: string; title_ja: string; channel: string; note_ja: string; source_url: string; source_label: string; checked_on: string };
export type Song = Row & { artist_id: string; title: string; credit: string; year: string; youtube_id: string; note_ja: string; source_url: string; source_label: string; checked_on: string };
export type JapanVisit = Row & { artist_id: string; date: string; event_ja: string; place_ja: string; source_url: string; source_label: string; checked_on: string };
export type Term = Row & { term_ja: string; reading: string; term_en: string; desc_ja: string };
export type ShopItem = Row & { artist_id: string; item: string; kind: string; shop_name: string; shop_url: string; affiliate_url: string; price_note: string; ships_ja: string; note_ja: string; image_url: string; image_credit: string; image_license: string; illust: string; source_url: string; source_label: string; checked_on: string };
export type News = Row & { date: string; title_ja: string; body_ja: string; link: string };

export const artists = load<Artist>('artists').sort((a, b) => Number(a.order) - Number(b.order));
export const timeline = load<Timeline>('timeline');
export const gear = load<Gear>('gear');
export const gearVideos = load<GearVideo>('gear_videos');
export const songs = load<Song>('songs');
export const japan = load<JapanVisit>('japan').sort((a, b) => b.date.localeCompare(a.date));
export const glossary = load<Term>('glossary').sort((a, b) => a.reading.localeCompare(b.reading, 'ja'));
export const shopItems = load<ShopItem>('shop_items');
export const news = load<News>('news').sort((a, b) => b.date.localeCompare(a.date));

export const GEAR_CATEGORIES: Record<string, string> = {
  guitar: 'ギター',
  amp: 'アンプ',
  effects: 'エフェクター',
};

export const byArtist = <T extends { artist_id: string }>(rows: T[], id: string) =>
  rows.filter((r) => r.artist_id === id);

/** そのページで一番新しい確認日。まだ誰も確認していなければ空文字。 */
export function latestCheck(...groups: { checked_on?: string }[][]): string {
  return groups.flat().map((r) => r.checked_on ?? '').filter(Boolean).sort().at(-1) ?? '';
}
