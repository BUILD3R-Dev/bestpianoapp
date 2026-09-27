/**
 * bestpianoapp.com — single source of truth for the comparison engine.
 * Every page template renders from this file. No hand-maintained tables.
 *
 * PRICING POLICY: numbers below are the verified baseline (2026-09-27).
 * Re-verify monthly; bump LAST_VERIFIED. Pages render "prices verified {date}".
 *
 * HONESTY POLICY: MetaScores synthesize PUBLIC ratings (app stores, Reddit,
 * YouTube reviewers, expert sites). We never claim hands-on testing we didn't do.
 * See /how-we-rate/ for the full methodology.
 */

export interface PianoApp {
  slug: string;
  name: string;
  maker: string;
  tagline: string;
  pricing: {
    monthly?: number;
    annual?: number;
    lifetime?: number;
    currency: 'USD';
  };
  freeTrial: string;
  platforms: ('iOS' | 'Android' | 'Web' | 'PC' | 'Mac')[];
  inputMethod: 'mic' | 'midi' | 'both' | 'none';
  songLibrarySize?: number | null;
  format: 'course' | 'library' | 'hybrid';
  sheetMusic: boolean;
  feedbackType: string;
  skillLevels: ('beginner' | 'intermediate' | 'advanced')[];
  kidsMode: boolean;
  bestFor: string[];
  ratings: {
    appStore?: { score: number; count: number };
    googlePlay?: { score: number; count: number };
  };
  metaScore: number;
  metaScoreSources: number;
  provisionalScore?: boolean;   // thin public data — badge renders "(provisional)"
  affiliate: {
    type: 'direct' | 'network' | 'none' | 'revshare-assumed';
    program: string;
    rate: string;
    link: string;
    status: 'live' | 'applied' | 'pending';
  };
  /** Official maker URL — placeholder target for /go/ redirects until affiliate links are approved. */
  siteUrl: string;
  /** Reserved for the WebPianoTeacher launch-partner slot (Appendix A). Renders the featured card when true. */
  featured?: boolean;
  pros: string[];
  cons: string[];
  verdict: string;
  lastVerified: string;
}

/** Bump this on every monthly re-verification pass. */
export const LAST_VERIFIED = '2026-09-27';
export const LAST_VERIFIED_LABEL = 'September 27, 2026';

export const apps: PianoApp[] = [
  {
    slug: 'simply-piano',
    name: 'Simply Piano',
    maker: 'Simply (formerly JoyTunes)',
    tagline: 'The most-downloaded piano course app — structured lessons from zero to playing songs.',
    pricing: { monthly: 20, annual: 150, currency: 'USD' },
    freeTrial: '7-day free trial (card required)',
    platforms: ['iOS', 'Android'],
    inputMethod: 'mic',
    songLibrarySize: 5000,
    format: 'course',
    sheetMusic: true,
    feedbackType: 'Mic-based note and rhythm detection; works with any piano or keyboard, no cable needed',
    skillLevels: ['beginner', 'intermediate'],
    kidsMode: true,
    bestFor: ['beginners', 'kids', 'ipad'],
    ratings: {
      appStore: { score: 4.4, count: 182000 },
      googlePlay: { score: 4.2, count: 96000 },
    },
    metaScore: 8.6,
    metaScoreSources: 6,
    affiliate: {
      type: 'none',
      program: 'Direct partner outreach — pending',
      rate: 'TBD (target: $15–25 CPA)',
      link: '/go/simply-piano/',
      status: 'pending',
    },
    siteUrl: 'https://www.joytunes.com',
    pros: [
      'Largest user base in the category — courses are battle-tested on millions of beginners',
      'Mic input means zero setup: put your phone on the music stand and play',
      'Genuinely good kids profiles and family plans',
      'Clear, gamified progression from first notes to two-handed playing',
    ],
    cons: [
      'Priciest of the course apps at ~$150/yr with aggressive upsell screens',
      'Mic detection struggles in noisy rooms; MIDI users get little benefit',
      'Song library leans pop; classical and jazz players will outgrow it',
    ],
    verdict:
      'Simply Piano is the default recommendation for total beginners for a reason: the course structure is the most refined in the business, and mic input removes every setup excuse. But it is the most expensive course app here, and intermediate players hit a ceiling fast. Start with the free trial; if you finish the first two courses, it earned its price.',
    lastVerified: LAST_VERIFIED,
  },
  {
    slug: 'flowkey',
    name: 'Flowkey',
    maker: 'Flowkey (a Yamaha company)',
    tagline: 'Learn songs first, theory second — huge library with instant feedback.',
    pricing: { monthly: 20, annual: 120, currency: 'USD' },
    freeTrial: '7-day free trial (card required)',
    platforms: ['iOS', 'Android', 'Web'],
    inputMethod: 'both',
    songLibrarySize: 1500,
    format: 'hybrid',
    sheetMusic: true,
    feedbackType: 'Mic or MIDI note detection with slowdown, looping, and hand-separate practice',
    skillLevels: ['beginner', 'intermediate'],
    kidsMode: false,
    bestFor: ['beginners', 'adults', 'ipad'],
    ratings: {
      appStore: { score: 4.7, count: 61000 },
      googlePlay: { score: 4.5, count: 41000 },
    },
    metaScore: 8.9,
    metaScoreSources: 6,
    affiliate: {
      type: 'none',
      program: 'Direct partner outreach — pending',
      rate: 'TBD (target: $15–25 CPA)',
      link: '/go/flowkey/',
      status: 'pending',
    },
    siteUrl: 'https://www.flowkey.com',
    pros: [
      'Highest MetaScore in our dataset — consistently the best-reviewed app across stores',
      'Song-first approach: you are playing recognizable music within days',
      'Both mic and MIDI input; works on phone, tablet, or computer',
      'Backed by Yamaha — the company is not going anywhere',
    ],
    cons: [
      'Course depth is thinner than Simply Piano for absolute beginners',
      'Full price is ~$120/yr but the "real" price is whatever the current discount is — check /deals/',
      'Advanced players will exhaust the lesson path quickly',
    ],
    verdict:
      'Flowkey is our top-ranked app because users love it more consistently than anything else in the category: the highest store ratings, the most forgiving learning curve, and a song library that keeps practice fun. Its weakness is structure — if you want a strict curriculum, look at Simply Piano or Skoove. For everyone else, this is the safest first download.',
    lastVerified: LAST_VERIFIED,
  },
  {
    slug: 'skoove',
    name: 'Skoove',
    maker: 'Skoove GmbH',
    tagline: 'Real piano lessons online — AI feedback with an actual teaching method behind it.',
    pricing: { monthly: 20, annual: 150, currency: 'USD' },
    freeTrial: '7-day free trial (card required)',
    platforms: ['iOS', 'Android', 'Web'],
    inputMethod: 'both',
    songLibrarySize: 400,
    format: 'course',
    sheetMusic: true,
    feedbackType: 'AI listening via mic or MIDI with technique-focused feedback',
    skillLevels: ['beginner', 'intermediate'],
    kidsMode: false,
    bestFor: ['adults', 'beginners'],
    ratings: {
      appStore: { score: 4.5, count: 24000 },
      googlePlay: { score: 4.3, count: 17000 },
    },
    metaScore: 8.4,
    metaScoreSources: 5,
    affiliate: {
      type: 'none',
      program: 'Direct partner outreach — pending',
      rate: 'TBD (target: $15–25 CPA)',
      link: '/go/skoove/',
      status: 'pending',
    },
    siteUrl: 'https://www.skoove.com',
    pros: [
      'The most "teacher-like" of the course apps — emphasizes technique, not just hitting right notes',
      'One-on-one support from real piano instructors included in the subscription',
      'Clean, adult-friendly design with no cartoon gamification',
      'Works with mic or MIDI across phone, tablet, and desktop',
    ],
    cons: [
      'Smallest song library here (~400 songs) — variety is the weak point',
      '~$150/yr puts it at the top of the price range',
      'Fewer beginner hand-holding features than Simply Piano',
    ],
    verdict:
      'Skoove is the connoisseur pick: fewer songs, higher standards. If you care about playing correctly — posture, fingering, dynamics — rather than racking up streaks, its teaching method is the most serious of the course apps. The price is steep for what you get in songs, but the included instructor support narrows the gap.',
    lastVerified: LAST_VERIFIED,
  },
  {
    slug: 'pianote',
    name: 'Pianote',
    maker: 'Pianote (Musora)',
    tagline: 'The Netflix of piano lessons — video courses plus a live community.',
    pricing: { monthly: 30, annual: 240, currency: 'USD' },
    freeTrial: '7-day free trial (card required)',
    platforms: ['iOS', 'Android', 'Web'],
    inputMethod: 'mic',
    songLibrarySize: 500,
    format: 'hybrid',
    sheetMusic: true,
    feedbackType: 'Video lessons with practice tools; community feedback and live Q&A sessions',
    skillLevels: ['beginner', 'intermediate', 'advanced'],
    kidsMode: false,
    bestFor: ['adults', 'returning'],
    ratings: {
      appStore: { score: 4.8, count: 12000 },
      googlePlay: { score: 4.6, count: 8000 },
    },
    metaScore: 8.8,
    metaScoreSources: 5,
    affiliate: {
      type: 'none',
      program: 'Direct partner outreach — pending (co-branded trial precedent exists)',
      rate: 'TBD (target: $15–25 CPA)',
      link: '/go/pianote/',
      status: 'pending',
    },
    siteUrl: 'https://www.pianote.com',
    pros: [
      'The only option here that serves advanced players — a genuine multi-year path',
      'Huge video lesson library with real teachers, not animations',
      'Live Q&A and an active student community',
      'Highest per-user ratings of any app we track',
    ],
    cons: [
      'Most expensive at ~$240/yr — double the course-app average',
      'No automated note feedback; you assess yourself or ask the community',
      'Overkill if you just want to play a few songs for fun',
    ],
    verdict:
      'Pianote is the premium play and it shows in the ratings: real teachers, real community, and content that lasts years instead of months. The catch is the price — $240 a year — and the lack of instant note feedback. If you are serious about piano and self-motivated, it is worth every cent. If you want an app to tell you when you miss a note, get Flowkey instead.',
    lastVerified: LAST_VERIFIED,
  },
  {
    slug: 'playground-sessions',
    name: 'Playground Sessions',
    maker: 'Playground Sessions Inc. (co-created with Quincy Jones)',
    tagline: 'Video lessons plus interactive sheet music — the course for keyboard-and-computer setups.',
    pricing: { monthly: 18, annual: 150, lifetime: 290, currency: 'USD' },
    freeTrial: '7-day free trial (card required)',
    platforms: ['iOS', 'PC', 'Mac'],
    inputMethod: 'midi',
    songLibrarySize: 1000,
    format: 'course',
    sheetMusic: true,
    feedbackType: 'Real-time MIDI scoring on interactive notation; needs a MIDI/USB keyboard',
    skillLevels: ['beginner', 'intermediate'],
    kidsMode: false,
    bestFor: ['beginners', 'returning'],
    ratings: {
      appStore: { score: 4.6, count: 9000 },
      googlePlay: { score: 4.2, count: 5000 },
    },
    metaScore: 8.3,
    metaScoreSources: 5,
    affiliate: {
      type: 'none',
      program: 'Direct partner outreach — pending',
      rate: 'TBD (target: $15–25 CPA)',
      link: '/go/playground-sessions/',
      status: 'pending',
    },
    siteUrl: 'https://www.playgroundsessions.com',
    pros: [
      'Best-in-class interactive sheet music — scoring and playback built into real notation',
      'Lifetime purchase option ($290) pays for itself in under two years vs. annual',
      'Co-created with Quincy Jones; the curriculum has genuine musical credibility',
      'Excellent for players who already read a little music',
    ],
    cons: [
      'MIDI keyboard required — no mic fallback, so no acoustic pianos and no phone-only setup',
      'No Android app; the platform coverage is the narrowest here',
      'Interface feels dated next to Flowkey and Simply Piano',
    ],
    verdict:
      'Playground Sessions is the value pick for one specific buyer: someone with a MIDI keyboard and a computer who wants real sheet music, not animations. The lifetime option is the best deal in the category if you commit. Everyone else should note the hard requirement — no MIDI keyboard, no app.',
    lastVerified: LAST_VERIFIED,
  },
  {
    slug: 'piano-marvel',
    name: 'Piano Marvel',
    maker: 'Piano Marvel LLC',
    tagline: 'The method-book killer — structured technique training for serious students.',
    pricing: { monthly: 15, annual: 120, currency: 'USD' },
    freeTrial: '30-day free trial (card required)',
    platforms: ['iOS', 'PC', 'Mac'],
    inputMethod: 'midi',
    songLibrarySize: 6000,
    format: 'course',
    sheetMusic: true,
    feedbackType: 'MIDI-based assessment with the proprietary SASR (Standard Assessment of Sight Reading)',
    skillLevels: ['beginner', 'intermediate', 'advanced'],
    kidsMode: false,
    bestFor: ['returning', 'adults'],
    ratings: {
      appStore: { score: 4.5, count: 6000 },
      googlePlay: { score: 4.4, count: 4000 },
    },
    metaScore: 8.2,
    metaScoreSources: 4,
    affiliate: {
      type: 'none',
      program: 'Direct partner outreach — pending',
      rate: 'TBD (target: $15–25 CPA)',
      link: '/go/piano-marvel/',
      status: 'pending',
    },
    siteUrl: 'https://www.pianomarvel.com',
    pros: [
      'Cheapest full-featured option here at ~$120/yr, with the longest free trial (30 days)',
      'SASR sight-reading assessment is unique — measurable progress on reading music',
      'Huge library (6,000+ pieces) spanning method books to repertoire',
      'Widely used by actual piano teachers as a practice tool',
    ],
    cons: [
      'MIDI keyboard required — acoustic piano owners are out of luck',
      'Utilitarian interface; zero gamification or entertainment value',
      'Smaller review footprint means a thinner MetaScore evidence base',
    ],
    verdict:
      'Piano Marvel is the sleeper: the cheapest subscription, the longest trial, and the most teacher-approved method of the bunch. It is also the least fun. If your goal is measurable skill — especially sight reading — and you own a MIDI keyboard, nothing beats it per dollar. If you need motivation mechanics, look elsewhere.',
    lastVerified: LAST_VERIFIED,
  },
  {
    slug: 'yousician',
    name: 'Yousician',
    maker: 'Yousician Ltd.',
    tagline: 'The multi-instrument gamified trainer — piano plus guitar, ukulele, bass, and singing.',
    pricing: { monthly: 20, annual: 140, currency: 'USD' },
    freeTrial: '7-day free trial (card required)',
    platforms: ['iOS', 'Android', 'PC', 'Mac'],
    inputMethod: 'mic',
    songLibrarySize: 10000,
    format: 'hybrid',
    sheetMusic: false,
    feedbackType: 'Mic-based real-time feedback across all instruments',
    skillLevels: ['beginner', 'intermediate'],
    kidsMode: true,
    bestFor: ['beginners', 'kids'],
    ratings: {
      appStore: { score: 4.6, count: 121000 },
      googlePlay: { score: 4.1, count: 83000 },
    },
    metaScore: 7.9,
    metaScoreSources: 6,
    affiliate: {
      type: 'none',
      program: 'Direct partner outreach — pending',
      rate: 'TBD (target: $15–25 CPA)',
      link: '/go/yousician/',
      status: 'pending',
    },
    siteUrl: 'https://www.yousician.com',
    pros: [
      'One subscription covers piano, guitar, ukulele, bass, and singing — unbeatable if you play more than one',
      'Strongest gamification in the category; kids stay engaged',
      'Widest platform support: phone, tablet, and desktop',
      'Huge song catalog across instruments',
    ],
    cons: [
      'Piano content is shallower than the piano-first apps — it is a generalist',
      'No sheet music focus; weak for classical-track learners',
      'Subscription complaints are the most common negative reviews (cancellation friction)',
    ],
    verdict:
      'Yousician is the best value in music apps if — and only if — you want more than piano. As a piano-only app it loses to Flowkey and Simply Piano on depth, feedback quality, and curriculum. Buy it for the bundle, not for the piano course. Piano-only learners should skip it.',
    lastVerified: LAST_VERIFIED,
  },
  {
    slug: 'piano-tree',
    name: 'Piano Tree',
    maker: 'Piano Tree',
    tagline: 'The underdog — a newer piano course app growing fast on word of mouth.',
    pricing: { currency: 'USD' },
    freeTrial: 'Free tier available; paid plans — see site for current pricing',
    platforms: ['iOS', 'Android', 'Web'],
    inputMethod: 'both',
    songLibrarySize: null,
    format: 'course',
    sheetMusic: true,
    feedbackType: 'Mic or MIDI note detection with guided lessons',
    skillLevels: ['beginner', 'intermediate'],
    kidsMode: false,
    bestFor: ['beginners'],
    ratings: {
      appStore: { score: 4.6, count: 800 },
      googlePlay: { score: 4.5, count: 500 },
    },
    metaScore: 7.9,
    metaScoreSources: 3,
    affiliate: {
      type: 'direct',
      program: 'Piano Tree Partners',
      rate: '20% recurring commission',
      link: '/go/piano-tree/',
      status: 'applied',
    },
    siteUrl: 'https://www.piano-tree.com',
    pros: [
      'Free tier lets you evaluate the actual product before paying anything',
      'Early reviews are strongly positive (4.5+ on both stores)',
      'Modern, clean lesson design without legacy-app clutter',
    ],
    cons: [
      'Smallest evidence base we track — 3 sources vs. 6 for the leaders, so the MetaScore is less certain',
      'Pricing not yet published on a stable page; verify before committing',
      'No kids mode and a thinner song catalog than established rivals',
    ],
    verdict:
      'Piano Tree is the interesting gamble: early adopters rate it highly, the free tier removes the risk of trying it, and the lesson design feels modern. But be clear-eyed — with a fraction of the reviews of the leaders, our 7.9 MetaScore carries wider error bars. Try the free tier; pay only if the lessons click for you.',
    lastVerified: LAST_VERIFIED,
  },
  {
    slug: 'piano-player',
    name: 'Piano Player',
    maker: 'WebPianoTeacher.com (Web Piano Teacher)',
    tagline: 'The app that shows you how to play.',
    pricing: { monthly: 11.99, annual: 120, currency: 'USD' },
    freeTrial: '7-day free trial, cancel anytime',
    platforms: ['Web'],
    inputMethod: 'none',
    songLibrarySize: null,
    format: 'library',
    sheetMusic: true,
    feedbackType:
      'No automated note detection — learn by watching motion-captured 3D performances; slow down, isolate each hand, loop sections, and zoom into measures',
    skillLevels: ['beginner', 'intermediate'],
    kidsMode: false,
    bestFor: [],
    ratings: {},
    metaScore: 7.5,
    metaScoreSources: 1,
    provisionalScore: true,
    affiliate: {
      type: 'revshare-assumed',
      program: 'Featured partner — 25% recurring rev-share (assumed, terms unconfirmed)',
      rate: '25% recurring (assumed, unconfirmed)',
      // CTA points DIRECTLY at the maker site until terms are confirmed.
      // /go/ Worker is not deployed yet (would 404), and there's no tracking to lose yet.
      // When terms land: switch link to '/go/piano-player/' and deploy the redirect.
      link: 'https://pianoplayerapp.com',
      status: 'pending',
    },
    siteUrl: 'https://pianoplayerapp.com',
    featured: true,
    pros: [
      'Cinematic 3D view of real hands — motion-captured performances by real artists, not falling-note gameplay',
      'Practice tools that matter: slow down, isolate each hand, loop sections, zoom into measures',
      'Web player is live today — runs in the browser on computer or tablet, nothing to install',
      'One membership works across devices; $120/yr undercuts most competitors here',
      '7-day free trial with cancel-anytime terms',
    ],
    cons: [
      'Song library page is currently empty despite the homepage claiming "hundreds of songs" — catalog size is unproven',
      'Native iOS, Android, macOS, and Windows apps are all still "coming soon" — web-only for now',
      'No automated feedback on your playing: you learn by watching, the app does not listen',
      'Brand-new with thin public ratings — our MetaScore is provisional until more data exists',
    ],
    verdict:
      'Piano Player is the most visually ambitious piano app we track: watching motion-captured pro hands in 3D is a genuinely different way to learn a song. But go in clear-eyed — the song library is currently empty, native apps are still coming soon, and nothing checks your playing. The 7-day trial costs nothing; judge the 3D experience yourself before paying $120 a year.',
    lastVerified: LAST_VERIFIED,
  },
];

/** Apps sorted by MetaScore, descending. Ties broken by source count. */
export const rankedApps: PianoApp[] = [...apps].sort(
  (a, b) => b.metaScore - a.metaScore || b.metaScoreSources - a.metaScoreSources,
);

export function appBySlug(slug: string): PianoApp {
  const app = apps.find((a) => a.slug === slug);
  if (!app) throw new Error(`Unknown app slug: ${slug}`);
  return app;
}

/** The featured partner slot (Appendix A). Empty until WebPianoTeacher details land. */
export const featuredApp: PianoApp | undefined = apps.find((a) => a.featured);
