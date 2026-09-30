// 「あなたに合う女性ギタリスト診断」の質問。各選択肢が誰に何点入るか。
export type Choice = { label: string; points: Record<string, number> };
export type Question = { q: string; choices: Choice[] };

export const QUESTIONS: Question[] = [
  { q: 'ライブで一番テンションが上がる瞬間は？', choices: [
    { label: 'ギターソロで会場がどよめく瞬間', points: { 'nita-strauss': 2 } },
    { label: 'ツインギターがハモった瞬間', points: { 'courtney-cox': 2 } },
    { label: 'サビを全員で大合唱する瞬間', points: { 'britt-lightning': 2 } },
    { label: '知らなかったバンドに心をつかまれた瞬間', points: { 'anna-cara': 2 } },
  ]},
  { q: '好きな音楽の年代は？', choices: [
    { label: '今のモダンなサウンド', points: { 'nita-strauss': 2, 'anna-cara': 1 } },
    { label: '80年代のヘヴィメタル', points: { 'courtney-cox': 2 } },
    { label: '80年代のハードロック・ヘアメタル', points: { 'britt-lightning': 2 } },
    { label: '70年代のクラシックロック', points: { 'anna-cara': 2 } },
  ]},
  { q: 'ギターに求めるのは？', choices: [
    { label: '圧倒的な速さとテクニック', points: { 'nita-strauss': 2, 'courtney-cox': 1 } },
    { label: '疾走感と攻撃性', points: { 'courtney-cox': 2 } },
    { label: '歌心のあるキャッチーなフレーズ', points: { 'britt-lightning': 2 } },
    { label: 'ざらっとした生々しいグルーヴ', points: { 'anna-cara': 2 } },
  ]},
  { q: '推しのステージ衣装は？', choices: [
    { label: '動きやすくてとにかくカッコいい', points: { 'nita-strauss': 2 } },
    { label: 'レザーと鋲でメタル全開', points: { 'courtney-cox': 2 } },
    { label: 'きらびやかで華やか', points: { 'britt-lightning': 2 } },
    { label: 'ヴィンテージなロックスタイル', points: { 'anna-cara': 2 } },
  ]},
  { q: '休日の過ごし方は？', choices: [
    { label: 'ジムで体を動かす', points: { 'nita-strauss': 2 } },
    { label: 'レコードを大音量で聴く', points: { 'courtney-cox': 1, 'anna-cara': 1 } },
    { label: '友だちとカラオケやパーティー', points: { 'britt-lightning': 2 } },
    { label: 'SNSで新しい演奏動画を探す', points: { 'anna-cara': 2 } },
  ]},
  { q: 'ギターを弾くなら、まず何をしたい？', choices: [
    { label: 'インスト曲を完コピ', points: { 'nita-strauss': 2 } },
    { label: 'メタルの名リフを刻む', points: { 'courtney-cox': 2 } },
    { label: 'バンドで歌モノを演奏', points: { 'britt-lightning': 2 } },
    { label: '演奏動画を撮ってSNSに上げる', points: { 'anna-cara': 2 } },
  ]},
  { q: '好きなのはどっち寄り？', choices: [
    { label: 'ソロアーティストとして道を切り開く人', points: { 'nita-strauss': 2 } },
    { label: 'バンドの一員として仲間と戦う人', points: { 'courtney-cox': 1, 'britt-lightning': 1 } },
    { label: '伝説のバンドを受け継ぐ人', points: { 'britt-lightning': 2 } },
    { label: 'チャンスをつかんで大舞台に立つ人', points: { 'anna-cara': 2 } },
  ]},
  { q: '最後に、あなたの座右の銘に近いのは？', choices: [
    { label: '限界は自分で決めない', points: { 'nita-strauss': 2 } },
    { label: '信じた道を貫く', points: { 'courtney-cox': 2 } },
    { label: '楽しんだ者勝ち', points: { 'britt-lightning': 2 } },
    { label: 'チャンスは準備した人に来る', points: { 'anna-cara': 2 } },
  ]},
];
