/**
 * Static-site localization.
 * GeoJS returns the visitor's country code. We do not store the IP or returned location;
 * we use only country_code to pick Japanese for JP, English everywhere else.
 * A saved manual selection takes precedence, even if the visitor's country changes.
 */
const translations = {
  en: {
    skip: 'Skip to content',navEditing:'Video Editing',navWorks:'Selected Work',navFeedback:'Feedback',navDevelopment:'Development',navContact:'Contact',
    heroEyebrow:'VIDEO EDITOR · CREATIVE TECHNOLOGIST',heroTitle1:'Every story',heroTitle2:'deserves impact.',heroIntro:"I'm Vũ Đình Tư (Dev), a video editor with 3 years of hands-on experience. I turn stories into engaging videos through thoughtful pacing, visual storytelling, sound and carefully crafted details.",heroStory:'My journey began with a passion for art and photography. I taught myself editing, worked on short-form videos for a Korean company, and went on to produce and operate YouTube channels for US audiences.',btnSeeVideos:'Explore my editing work',btnContact:"Let's work together",statYears:'Years editing',statMarkets:'Production experience',statFormats:'Video formats',photoBadgeTop:'Available for projects',photoBadgeBottom:'Remote · International',marqueeStory:'STORYTELLING',marqueeAI:'AI-ASSISTED WORKFLOW',
    editingKicker:'WHAT I DO',editingTitle:'Video editing<br>is my craft.',editingDescription:'Beyond cuts and transitions, I care about how a video feels — its rhythm, clarity, emotion and the reason someone keeps watching.',skill1Title:'Short-form editing',skill1Text:'YouTube Shorts, TikTok and Reels. Strong opening hooks, concise storytelling and clear on-screen text.',skill2Title:'Long-form storytelling',skill2Text:'Structured narrative edits for videos around 20–40 minutes, with attention to flow and viewer engagement.',skill3Title:'Captions & motion',skill3Text:'Readable subtitles, kinetic text, smooth motion and purposeful effects that support the story.',skill4Title:'Sound & visual polish',skill4Text:'Thoughtful BGM and SFX placement, color adjustments, visual consistency and careful asset selection.',skill5Title:'AI-assisted production',skill5Text:'Practical AI tools for efficient research, creative workflows and media production, with human review.',skill6Title:'Channel-minded editing',skill6Text:'Firsthand YouTube channel experience helps me consider audience expectations, clarity and retention from the edit.',toolsTitle:'MY TOOLKIT',toolAsset:'Asset Research',toolAudio:'Audio Editing',
    journeyKicker:'THE JOURNEY',journeyTitle:'Curiosity led me here.',journeyLead:'Art and photography taught me to notice the details. Editing gave me a way to turn them into stories.',journey1Title:'Self-taught creative foundation',journey1Text:'Started learning video editing independently, motivated by art, photography and storytelling.',journey2Title:'Short-form editing for a Korean company',journey2Text:'Worked with a Korean client on short videos, focusing on pacing, text, sound and consistent delivery.',journey3Title:'YouTube production for the US market',journey3Text:'Expanded into operating YouTube channels and producing both short and longer narrative-driven content for American viewers.',
    workKicker:'SELECTED WORK',workTitle:'The work<br>speaks for itself.',workDesc:'Selected public YouTube channels I have worked on. Follow the links to view published content and editing styles.',work1Title:'Channel production & editing',work1Desc:'Published channel portfolio — storytelling, visual selection, pacing and editing.',work2Title:'Narration-led video editing',work2Desc:'Story-led YouTube content with selected imagery, subtitles, timing and sound.',workNote:'For additional examples or a style-specific editing test, please get in touch.',
    feedbackKicker:'CLIENT FEEDBACK',feedbackTitle:'Good work.<br>Built on trust.',feedbackDesc:'Collaborating with international clients taught me to value clear communication, responsibility and a consistent standard of quality.',feedbackQuote:'Thank you for all your effort and hard work! I really hope we get to work together again under a better opportunity.',feedbackBy:'Previous video editing client',feedbackContext:'Excerpt from client correspondence · Name withheld',
    devKicker:'BEYOND THE TIMELINE',devTitle:'I also build<br>with code.',devDesc:'Alongside editing, I work with full-stack development, backend systems and applied AI. This technical background informs how I approach workflows and automation.',dev1Desc:'Document and data management systems with workflows, APIs and role-based access.',dev2Desc:'Monitoring and alert features supporting electric-vehicle charging operations.',dev3Desc:'Applied AI solutions, retrieval-augmented generation and data processing workflows.',viewProject:'View project',githubProjects:'Explore my GitHub',
    contactKicker:"LET'S CREATE SOMETHING",contactTitle:'Have a story<br>in mind?',contactDesc:"I'm open to video editing collaborations, YouTube channel work and creative technology projects. Let's discuss your brief, references and timeline.",contactFB:'Message me',contactLI:'Connect professionally',contactGH:'Developer profile',footerRights:'Made with intention.',footerLanguage:'Language is selected by visitor country via GeoJS; you can always switch manually.',backTop:'Back to top'
  },
  ja: {
    skip:'本文へ移動',navEditing:'動画編集',navWorks:'制作実績',navFeedback:'お客様の声',navDevelopment:'開発実績',navContact:'お問い合わせ',
    heroEyebrow:'動画編集者 · クリエイティブテクノロジスト',heroTitle1:'伝えたい想いを、',heroTitle2:'心に残る映像へ。',heroIntro:'はじめまして、ヴー・ディン・トゥ（Dev）と申します。動画編集歴は3年です。構成・テンポ・映像表現・音の細部まで大切にし、視聴者に伝わる動画づくりを心がけています。',heroStory:'芸術と写真への関心をきっかけに独学で編集を学び、韓国企業のショート動画制作を経験。その後、アメリカ市場向けYouTubeチャンネルの運営・動画制作にも取り組んできました。',btnSeeVideos:'動画編集の実績を見る',btnContact:'お仕事のご相談',statYears:'動画編集歴',statMarkets:'制作経験のある市場',statFormats:'対応動画形式',photoBadgeTop:'お仕事のご相談受付中',photoBadgeBottom:'リモート · 海外案件対応',marqueeStory:'ストーリーテリング',marqueeAI:'AIを活用した制作',
    editingKicker:'対応できること',editingTitle:'伝わる動画を、<br>丁寧に仕上げる。',editingDescription:'単なるカット編集ではなく、テンポ・分かりやすさ・感情の流れを意識し、「続きを見たい」と思ってもらえる映像表現を大切にしています。',skill1Title:'ショート動画編集',skill1Text:'YouTube Shorts・TikTok・Reelsに対応。冒頭のフック、テンポの良い構成、視認性の高いテロップを工夫します。',skill2Title:'長尺動画の編集',skill2Text:'20〜40分程度の動画にも対応。全体の構成や展開を意識し、視聴者が見やすい編集を行います。',skill3Title:'テロップ・モーション',skill3Text:'読みやすい字幕、動きのある文字演出、自然なアニメーションや効果を適切に使用します。',skill4Title:'音・映像の仕上げ',skill4Text:'BGM・効果音の配置、色味の調整、素材選定など、映像全体の統一感を大切にします。',skill5Title:'AIを活用した制作',skill5Text:'リサーチや制作工程にAIツールを取り入れ、最終的な品質は自身で確認しながら効率化を図ります。',skill6Title:'チャンネル運営の視点',skill6Text:'YouTube運営の経験を活かし、視聴者の反応や視聴維持率を意識した動画づくりに取り組みます。',toolsTitle:'使用ツール',toolAsset:'素材リサーチ',toolAudio:'音声編集',
    journeyKicker:'これまでの歩み',journeyTitle:'好奇心から、仕事へ。',journeyLead:'芸術や写真を通じて身についた「細部を見る視点」が、現在の映像づくりにもつながっています。',journey1Title:'独学で映像制作を学ぶ',journey1Text:'芸術・写真・ストーリーテリングへの興味をきっかけに、自ら動画編集のスキルを習得しました。',journey2Title:'韓国企業向けショート動画編集',journey2Text:'韓国のクライアントとの制作経験を通じて、テンポ、テロップ、音づくり、納品品質を意識した編集に取り組みました。',journey3Title:'アメリカ市場向けYouTube制作',journey3Text:'YouTubeチャンネルの運営にも携わり、ショート動画からナレーション中心の長尺動画まで制作の幅を広げました。',
    workKicker:'制作実績',workTitle:'これまでに<br>制作した動画。',workDesc:'これまでに携わった公開YouTubeチャンネルです。リンクから動画の内容や編集スタイルをご確認いただけます。',work1Title:'YouTubeチャンネルの動画制作',work1Desc:'構成・素材選定・テンポ・編集を意識した公開チャンネルの制作実績です。',work2Title:'ナレーション中心の動画編集',work2Desc:'ストーリーに合わせた画像・字幕・効果音・テンポを工夫したYouTube動画です。',workNote:'その他の制作例や、参考動画に合わせた編集テストについてもお気軽にご相談ください。',
    feedbackKicker:'お客様からのご評価',feedbackTitle:'信頼を大切に、<br>一つひとつの仕事を。',feedbackDesc:'海外クライアントとの仕事を通じて、丁寧なコミュニケーション、責任感、安定した品質の重要性を学びました。',feedbackQuote:'これまでの努力とお仕事、本当にありがとうございました。また良い機会に一緒にお仕事ができることを願っています。',feedbackBy:'過去の動画編集クライアント',feedbackContext:'実際のメッセージから抜粋・日本語訳／匿名',
    devKicker:'映像編集以外のスキル',devTitle:'開発の仕事にも<br>取り組んでいます。',devDesc:'動画編集に加えて、フルスタック開発・バックエンドシステム・AIの活用にも取り組んでいます。技術的な知識を制作フローの改善にも活かしています。',dev1Desc:'ワークフロー・API・権限管理を備えた文書・データ管理システム。',dev2Desc:'EV充電設備の運用を支援する監視・アラート機能。',dev3Desc:'RAGやデータ処理フローを取り入れたAI関連プロジェクト。',viewProject:'プロジェクトを見る',githubProjects:'GitHubを見る',
    contactKicker:'一緒に制作しませんか',contactTitle:'あなたのアイデアを、<br>映像に。',contactDesc:'ショート動画・長尺動画・YouTubeチャンネル運営関連のご依頼や、クリエイティブ技術分野のご相談を受け付けています。編集の方向性や納期など、ぜひお聞かせください。',contactFB:'メッセージを送る',contactLI:'ビジネスでつながる',contactGH:'開発実績を見る',footerRights:'一つひとつ丁寧に制作しています。',footerLanguage:'GeoJSでアクセス元の国を判定して言語を選択します。右上からいつでも切り替え可能です。',backTop:'ページ上部へ'
  }
};

const richTextKeys = new Set(['editingTitle','workTitle','feedbackTitle','devTitle','contactTitle']);
const siteTitle = {
  en: 'Dev | Video Editor & Creative Developer',
  ja: 'Dev | 動画編集者・クリエイティブ開発者'
};
const siteDescription = {
  en: 'Vũ Đình Tư (Dev) — 3 years of video editing experience in Shorts, long-form videos and channel production for international audiences.',
  ja: 'ヴー・ディン・トゥ（Dev）のポートフォリオ。動画編集歴3年。ショート動画、長尺動画、海外向けYouTube制作に対応。'
};

function applyLanguage(lang) {
  const selected = lang === 'ja' ? 'ja' : 'en';
  document.documentElement.lang = selected;
  document.title = siteTitle[selected];
  document.querySelector('meta[name="description"]').setAttribute('content', siteDescription[selected]);
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    const value = translations[selected][key];
    if (typeof value !== 'string') return;
    if (richTextKeys.has(key)) node.innerHTML = value;
    else node.textContent = value;
  });
  document.querySelectorAll('[data-lang]').forEach((node) => {
    node.setAttribute('aria-pressed', String(node.dataset.lang === selected));
  });
}

function getSavedLanguage() {
  try { const saved = localStorage.getItem('dev-portfolio-language'); return saved === 'en' || saved === 'ja' ? saved : null; }
  catch { return null; }
}

function saveLanguage(lang) {
  try { localStorage.setItem('dev-portfolio-language', lang); }
  catch { /* Storage may be unavailable in private contexts. */ }
}

async function detectCountryLanguage() {
  // If the geo provider cannot be reached, show English and keep manual controls usable.
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3200);
  try {
    const response = await fetch('https://get.geojs.io/v1/ip/geo.json', { signal: controller.signal, cache: 'no-store' });
    if (!response.ok) return 'en';
    const geo = await response.json();
    return geo && String(geo.country_code).toUpperCase() === 'JP' ? 'ja' : 'en';
  } catch {
    return 'en';
  } finally { clearTimeout(timeout); }
}

let hasManualSelection = Boolean(getSavedLanguage());
applyLanguage(getSavedLanguage() || 'en');

document.querySelectorAll('[data-lang]').forEach((button) => {
  button.addEventListener('click', () => {
    hasManualSelection = true;
    const lang = button.dataset.lang;
    saveLanguage(lang);
    applyLanguage(lang);
  });
});
if (!hasManualSelection) {
  detectCountryLanguage().then((lang) => { if (!hasManualSelection) applyLanguage(lang); });
}

const menuButton = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
