export const SITE = {
  name: 'Best Piano App',
  domain: 'bestpianoapp.com',
  url: 'https://bestpianoapp.com',
  tagline: 'The independent, data-driven guide to piano apps — we read 1,000+ reviews so you don\u2019t have to.',
};

export const NAV = [
  { label: 'Best Apps', href: '/best-piano-apps/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Comparisons', href: '/comparisons/' },
  { label: 'Deals', href: '/deals/' },
  { label: 'Quiz', href: '/quiz/' },
  { label: 'How We Rate', href: '/how-we-rate/' },
];

export interface Persona {
  slug: string;
  label: string;
  title: string;
  description: string;
  intro: string;
  priorities: string[];
  url: string;
}

export const PERSONAS: Persona[] = [
  {
    slug: 'beginners',
    label: 'Beginners',
    title: 'Best Piano App for Beginners (2026): Start Here',
    description:
      'The best piano apps for total beginners, ranked by data. We compare free trials, course structure, and real user ratings so you start with the right app.',
    intro:
      'If you have never touched a piano, the app you pick matters more than the piano. A good beginner app teaches posture, note reading, and rhythm from day one; a bad one teaches you to chase falling notes and call it progress. We ranked every major piano app on course structure, feedback quality, and what 300,000+ reviewers actually say — here is where to start.',
    priorities: [
      'A real curriculum — lessons that build on each other, not a random song pile',
      'Instant feedback on wrong notes so bad habits do not stick',
      'Zero setup friction — mic input beats cables when you are starting out',
      'A free trial long enough to finish the first course section',
    ],
    url: '/best-piano-app-for-beginners/',
  },
  {
    slug: 'adults',
    label: 'Adults',
    title: 'Best Piano App for Adults Learning in 2026',
    description:
      'The best piano apps for adult learners: flexible practice, real song libraries, and no cartoon gamification. Ranked by data, priced honestly.',
    intro:
      'Adults learn piano differently than kids: you have twenty minutes after work, not two hours after school, and you want to play songs you actually like. The best apps for adults respect your time — structured sessions, music you chose, and none of the cartoon mascots. These are the apps adult learners rate highest, with the pricing laid out plainly.',
    priorities: [
      'Flexible, bite-sized sessions — progress in 15–20 minutes a day',
      'A song library with music you actually want to play',
      'An adult interface — no streak mascots, no condescension',
      'Honest pricing: what the year really costs, trial included',
    ],
    url: '/best-piano-app-for-adults/',
  },
  {
    slug: 'kids',
    label: 'Kids',
    title: 'Best Piano App for Kids (2026): What Parents Should Know',
    description:
      'The best piano apps for kids, ranked by data. Gamification that motivates, parent-friendly pricing, and honest notes on screen time.',
    intro:
      'Kids do not practice because an app told them to — they practice because the app is fun enough to choose over everything else competing for their attention. The apps below are the ones families rate highest for keeping kids engaged past the first month, with notes on parental controls, family plans, and what each one really costs per year.',
    priorities: [
      'Gamification that survives past week three — streaks, rewards, characters',
      'Kids profiles or family plans so siblings are not sharing one account',
      'Parent-visible progress without hovering',
      'Mic input — no cables for small hands to lose',
    ],
    url: '/best-piano-app-for-kids/',
  },
  {
    slug: 'ipad',
    label: 'iPad',
    title: 'Best Piano App for iPad (2026)',
    description:
      'The best piano apps optimized for iPad: touch interfaces, mic input, and split-screen practice. Ranked by data.',
    intro:
      'The iPad is the ideal piano-app device — big enough to read notation, portable enough to sit on any music stand, and every major app supports mic input so there is nothing to plug in. These are the apps with the best tablet experience: touch-optimized interfaces, landscape notation views, and no desktop-only features you will miss.',
    priorities: [
      'A true tablet interface — not a blown-up phone app',
      'Mic input so the iPad just sits on the stand, no cables',
      'Landscape notation and hand-separate practice views',
      'Offline downloads for practice away from Wi-Fi',
    ],
    url: '/best-piano-app-for-ipad/',
  },
];

export const KEYBOARDS = [
  {
    name: 'Yamaha P-45',
    price: 500,
    keys: '88 fully weighted',
    why: 'The default recommendation for app learners: real weighted keys, USB MIDI, dead simple. If you buy one keyboard for piano apps, this is it.',
    searchUrl: 'https://www.amazon.com/s?k=yamaha+p-45+digital+piano',
  },
  {
    name: 'Alesis Recital Pro',
    price: 300,
    keys: '88 hammer-action',
    why: 'The budget 88-key pick. Hammer-action keys at nearly half the Yamaha price — the compromise is in speaker quality, not key feel.',
    searchUrl: 'https://www.amazon.com/s?k=alesis+recital+pro',
  },
  {
    name: 'Roland FP-10',
    price: 550,
    keys: '88 PHA-4 weighted',
    why: 'The step-up pick: Roland\u2019s PHA-4 key action is the best-feeling in this price range, and Bluetooth MIDI pairs cleanly with every app here.',
    searchUrl: 'https://www.amazon.com/s?k=roland+fp-10',
  },
  {
    name: 'Casio CT-S1',
    price: 200,
    keys: '61 touch-sensitive',
    why: 'The compact pick for apartments and kids. Sixty-one keys is enough for the first year; USB MIDI works with all the mic-or-MIDI apps.',
    searchUrl: 'https://www.amazon.com/s?k=casio+ct-s1',
  },
  {
    name: 'Donner DEP-20',
    price: 380,
    keys: '88 weighted',
    why: 'The value 88-key option: weighted keys, furniture stand included, hundreds less than the big brands. Build quality is the trade-off.',
    searchUrl: 'https://www.amazon.com/s?k=donner+dep-20+digital+piano',
  },
];

export const DIGITAL_PIANOS = [
  {
    name: 'Yamaha P-45',
    price: 500,
    keys: '88 fully weighted (GHS)',
    why: 'Still the default: weighted keys that feel like a piano, USB MIDI for apps, and a used market full of them if you want to save $150.',
    searchUrl: 'https://www.amazon.com/s?k=yamaha+p-45+digital+piano',
  },
  {
    name: 'Roland FP-10',
    price: 550,
    keys: '88 PHA-4 weighted',
    why: 'Better key action than the Yamaha and Bluetooth MIDI built in. Worth the extra $50 if you will practice daily.',
    searchUrl: 'https://www.amazon.com/s?k=roland+fp-10',
  },
  {
    name: 'Alesis Recital Pro',
    price: 300,
    keys: '88 hammer-action',
    why: 'Proof you do not need $500 to start. Twelve voices, lesson mode that splits the keyboard for teacher/student — great for kids starting out.',
    searchUrl: 'https://www.amazon.com/s?k=alesis+recital+pro',
  },
  {
    name: 'Donner DEP-20',
    price: 380,
    keys: '88 weighted',
    why: 'Furniture stand and three pedals in the box — it looks like a piano, not a keyboard on an X-stand. Solid for the price.',
    searchUrl: 'https://www.amazon.com/s?k=donner+dep-20+digital+piano',
  },
  {
    name: 'Casio Privia PX-S1100',
    price: 700,
    keys: '88 Smart Scaled hammer action',
    why: 'The slim premium pick: full weighted action in a body half the depth of the others. For small rooms where a P-45 will not fit.',
    searchUrl: 'https://www.amazon.com/s?k=casio+privia+px-s1100',
  },
];
