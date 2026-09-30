export const SITE = {
  name: 'SHRED QUEENS',
  tagline: '海外の女性ギタリスト図鑑',
  url: 'https://queensofshred.com',
  // Googleアドセンスの審査に通ったら Cloudflare Pages の環境変数 PUBLIC_ADSENSE_CLIENT に ca-pub-… を入れる
  adsenseClient: import.meta.env.PUBLIC_ADSENSE_CLIENT ?? '',
  // GA4 の測定ID（G-…）。未設定なら計測タグを出さない
  gaId: import.meta.env.PUBLIC_GA_ID ?? '',
};

// ストリートチーム日本のSNS（URLを受け取ったら埋める。空のものは「準備中」表示）
export const STREET_TEAM = {
  instagram: '',
  x: '',
  facebook: '',
  joinForm: '',
};

export const NAV = [
  { href: '/ja/', label: 'トップ' },
  { href: '/ja/gear/', label: '機材比較' },
  { href: '/ja/quiz/', label: '診断' },
  { href: '/ja/nita-street-team/', label: 'ストリートチーム' },
  { href: '/ja/glossary/', label: '用語集' },
  { href: '/ja/news/', label: '更新情報' },
];
