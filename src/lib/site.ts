export const SITE = {
  name: 'SHRED QUEENS',
  tagline: '海外の女性ギタリスト図鑑',
  url: 'https://queensofshred.com',
  // Googleアドセンスの審査に通ったら Cloudflare Pages の環境変数 PUBLIC_ADSENSE_CLIENT に ca-pub-… を入れる
  adsenseClient: import.meta.env.PUBLIC_ADSENSE_CLIENT ?? '',
  // GA4 の測定ID（G-…）。本番（master のビルド）だけ計測し、確認用ブランチ・開発中はタグを出さない
  gaId:
    import.meta.env.PUBLIC_GA_ID ??
    (process.env.CF_PAGES_BRANCH === 'master' ? 'G-LJDR40V0CB' : ''),
};

// ストリートチーム日本のSNS（空のものは「準備中」表示）
export const STREET_TEAM = {
  instagram: 'https://www.instagram.com/hurricanejapan/',
  x: 'https://x.com/HurricaneJapan',
  facebook: 'https://www.facebook.com/profile.php?id=61586956209054',
  joinForm: '',
};

export const NAV = [
  { href: '/ja/', label: 'トップ', icon: 'home' },
  { href: '/ja/gear/', label: '機材比較', icon: 'guitar' },
  { href: '/ja/quiz/', label: '診断', icon: 'quiz' },
  { href: '/ja/nita-street-team/', label: 'ストリートチーム', icon: 'megaphone' },
  { href: '/ja/glossary/', label: '用語集', icon: 'book' },
  { href: '/ja/news/', label: '更新情報', icon: 'bell' },
];

// カードに出す国の略号（国旗の絵文字はWindowsで表示されないため文字で出す）
export const COUNTRY_CODE: Record<string, string> = {
  アメリカ: 'USA', イギリス: 'UK', 日本: 'JPN', カナダ: 'CAN', ドイツ: 'GER', スイス: 'SUI', オーストラリア: 'AUS', フランス: 'FRA', オランダ: 'NED', 韓国: 'KOR',
};
