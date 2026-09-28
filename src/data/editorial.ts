/**
 * Editorial copy for generated pages. All claims grounded in src/data/apps.ts
 * (verified baseline 2026-09-27). Voice: direct, numbers-first, anti-hype.
 * Never claim hands-on testing. Never invent ratings, prices, or features.
 */

export interface FaqItem {
  q: string;
  a: string;
}

export interface ReviewEditorial {
  intro: string;
  pricingDeepDive: string;
  methodNote: string;
  whoFor: string;
  whoSkip: string;
  faqs: FaqItem[];
}

export const reviewEditorial: Record<string, ReviewEditorial> = {
  'simply-piano': {
    intro:
      'Simply Piano is the biggest name in piano apps — by downloads, by review count, and by marketing budget. With over 275,000 combined App Store and Google Play ratings, it has been tested on more beginners than every other app on this page combined. That scale is its superpower: the curriculum has been refined against millions of real learners. It is also the most expensive course app here, and the upsell screens never quite stop.',
    pricingDeepDive:
      'Simply Piano costs $20/month or about $150/year on the annual plan, which makes it the priciest of the course-style apps — $30 a year more than Flowkey for a comparable subscription. Family plans exist and soften the blow if multiple people will use it. The 7-day free trial requires a card, so set a reminder if you only want to evaluate it. There is no lifetime option and no meaningful free tier; this is a pay-to-play app.',
    methodNote:
      'The method is mic-based: set your phone on the music stand and the app listens to any piano or keyboard — no cables, no MIDI, no setup friction. Lessons are gamified courses that progress from single notes to two-handed playing, with instant feedback on wrong notes and rhythm. Kids profiles are genuinely good, not an afterthought. The trade-off of mic input is accuracy: in a noisy room, detection suffers, and advanced players will find the feedback shallow compared to MIDI-based scoring.',
    whoFor:
      'Total beginners — especially adults starting from zero and families with kids — who want the most hand-holding and the most proven curriculum. If your priority is "tell me exactly what to practice every day," this is the app.',
    whoSkip:
      'Intermediate players (you will hit the ceiling within months), anyone in a noisy practice space where mic detection struggles, and MIDI keyboard owners who would get more precise feedback from Playground Sessions or Piano Marvel.',
    faqs: [
      {
        q: 'How much does Simply Piano cost?',
        a: 'About $150 per year on the annual plan, or $20 per month. It is the most expensive course-style app we track — Flowkey and Piano Marvel cost less per year. A 7-day free trial is available but requires a credit card.',
      },
      {
        q: 'Does Simply Piano work with a real piano?',
        a: 'Yes. It uses your device microphone to hear notes, so it works with an acoustic piano, a digital piano, or any keyboard — nothing to plug in. That convenience is the point; the trade-off is that mic detection is less precise than MIDI in noisy rooms.',
      },
      {
        q: 'Is Simply Piano good for kids?',
        a: 'It has the best kids profiles of any app we track, with age-appropriate courses and a family plan. If the app is primarily for a child, Simply Piano is the safest pick on this page.',
      },
      {
        q: 'Is Simply Piano worth it in 2026?',
        a: 'For a total beginner who will actually practice daily, yes — the curriculum is the most refined in the category. For anyone past the beginner stage, no: you will outgrow it fast at $150 a year. Start with the free trial and judge it by whether you finish the first two courses.',
      },
    ],
  },
  flowkey: {
    intro:
      'Flowkey holds our highest MetaScore — 8.9 out of 10, the best-reviewed piano app across every source we track. The formula is simple: learn songs first, theory second. You are playing recognizable music within days, not weeks, and the app listens via mic or MIDI while you do it. It is owned by Yamaha, which means the company behind it is not going anywhere.',
    pricingDeepDive:
      'Flowkey lists at $20/month or about $120/year — already $30 a year cheaper than Simply Piano. But the listed price is rarely the real price: Flowkey runs discounts constantly, and the effective annual cost is often well under $120. Check our deals page before paying full price. The 7-day free trial requires a card. There is no lifetime plan.',
    methodNote:
      'The method is song-first: pick a song, and Flowkey breaks it into wait-mode, slow, and full-speed practice with hand-separate options. Feedback comes through mic or MIDI, and it runs on phone, tablet, or computer — the widest device coverage of the course apps. What it does not do is hand you a strict curriculum. Beginners who need structure ("tell me what to do on day 14") get less guidance here than from Simply Piano or Skoove.',
    whoFor:
      'Learners motivated by playing real songs quickly — especially adults with 20 minutes a day who want practice to feel like playing, not homework. Also a strong pick for iPad users.',
    whoSkip:
      'Absolute beginners who want a rigid day-by-day curriculum, and advanced players who will exhaust the lesson path in months. Technique-focused students should look at Skoove or Piano Marvel.',
    faqs: [
      {
        q: 'Is Flowkey worth it?',
        a: 'For most learners, yes — it is our top-ranked app because users rate it more consistently than anything else in the category. The main caveat is structure: if you need a strict curriculum rather than song-based learning, Simply Piano or Skoove fit better.',
      },
      {
        q: 'How much does Flowkey cost?',
        a: 'About $120 per year or $20 per month at list price, but discounts are frequent and the real price is often lower. Never pay full price without checking the current offers on our deals page first.',
      },
      {
        q: 'Flowkey vs Simply Piano — which is better?',
        a: 'Flowkey is higher-rated and cheaper, and better for song-motivated learners. Simply Piano has the more structured curriculum and better kids profiles. We compare them head-to-head on our dedicated comparison page.',
      },
      {
        q: 'Does Flowkey work with a MIDI keyboard?',
        a: 'Yes — Flowkey accepts both mic and MIDI input, and runs on iOS, Android, and the web. MIDI gives you more precise feedback than the microphone.',
      },
    ],
  },
  skoove: {
    intro:
      'Skoove is the connoisseur pick of the course apps: the smallest song library here, the most serious teaching method. Where competitors optimize for streaks and fun, Skoove optimizes for playing correctly — technique, fingering, dynamics — and backs it with one-on-one support from real piano instructors. Our MetaScore of 8.4 reflects a smaller but devoted user base.',
    pricingDeepDive:
      'Skoove costs $20/month or about $150/year, putting it at the top of the price range alongside Simply Piano. The price stings less when you count what is bundled: one-on-one instructor support is included in the subscription, which none of the cheaper apps offer. The 7-day free trial requires a card. Judge it on the lessons, not the song count.',
    methodNote:
      'The method is the most teacher-like here: AI listening via mic or MIDI, but with feedback weighted toward technique rather than just right notes. Lessons are clean and adult — no cartoon gamification, no mascots. It runs on phone, tablet, and desktop. The honest weakness is repertoire: roughly 400 songs, an order of magnitude fewer than Simply Piano or Yousician, so song-driven learners will feel the thin catalog.',
    whoFor:
      'Adults who want to learn properly — posture, fingering, dynamics — and value instructor backup over entertainment. If you would hire a teacher for technique but want an app for daily practice, this is your app.',
    whoSkip:
      'Song-variety seekers (400 songs will feel thin fast), kids (no kids mode, no gamification), and anyone motivated primarily by streaks and rewards.',
    faqs: [
      {
        q: 'Is Skoove good for beginners?',
        a: 'Yes, but with a caveat: Skoove assumes a bit more self-direction than Simply Piano. Beginners who want maximum hand-holding should start with Simply Piano; beginners who want to build correct technique from day one will do better with Skoove.',
      },
      {
        q: 'How much does Skoove cost?',
        a: 'About $150 per year or $20 per month, with a 7-day free trial (card required). It is priced at the top of the range, but one-on-one instructor support is included — no other course app bundles that.',
      },
      {
        q: 'Skoove vs Flowkey — which should I pick?',
        a: 'Pick Flowkey if songs and fun keep you practicing; pick Skoove if correct technique matters more to you than variety. We break down the trade-off on our head-to-head comparison page.',
      },
    ],
  },
  pianote: {
    intro:
      'Pianote is the premium play: video lessons from real teachers, live Q&A sessions, and an active student community — closer to an online music school than an app. It is the only option here with a genuine multi-year path for advanced players, and its per-user ratings are the highest we track. It is also, at $240 a year, the most expensive by a wide margin.',
    pricingDeepDive:
      'Pianote costs $30/month or about $240/year — double the course-app average. There is no way around it: this is a serious financial commitment, roughly the cost of two months of private lessons. The 7-day free trial requires a card. Whether it is worth it depends entirely on whether you will use the community and live sessions; if you just want an app that listens to your playing, you are overpaying.',
    methodNote:
      'The method is video-first: structured courses taught by real pianists, practice tools, and a community where you can post videos for feedback, plus scheduled live Q&A. What it does not have is automated note detection — nobody is listening to your playing in real time. That is the fundamental trade-off: human teaching depth in exchange for instant feedback. It covers beginner through advanced, the widest skill range here.',
    whoFor:
      'Serious, self-motivated learners — especially returning players and intermediates — who want real teachers and a community, and a path that lasts years rather than months.',
    whoSkip:
      'Budget buyers (this is 2x the category average), anyone who wants instant "you missed that note" feedback, and casual learners who just want to play a few songs for fun — that is massive overkill at $240.',
    faqs: [
      {
        q: 'Why is Pianote so expensive?',
        a: 'Because you are paying for human teachers: video courses, live Q&A sessions, and a staffed community. At $240/year it costs double the average app — but it is still far cheaper than private lessons, which run $40–$80 per hour.',
      },
      {
        q: 'Is Pianote good for beginners?',
        a: 'Yes, it covers beginners well — but beginners who just need structure and feedback usually get more per dollar from Flowkey or Simply Piano. Pianote makes sense for beginners who know they are in this for years.',
      },
      {
        q: 'Does Pianote listen to my playing?',
        a: 'No. Pianote has no automated note detection. Feedback comes from the community and instructors when you post practice videos, or from self-assessment. If instant feedback matters to you, pick a mic/MIDI app instead.',
      },
    ],
  },
  'playground-sessions': {
    intro:
      'Playground Sessions is the value pick for one specific buyer: someone with a MIDI keyboard and a computer. Its interactive sheet music — real notation with built-in scoring and playback — is the best in the category, and the $290 lifetime option pays for itself in under two years. Co-created with Quincy Jones, the curriculum has genuine musical credibility. The catch is absolute: no MIDI keyboard, no app.',
    pricingDeepDive:
      'Playground Sessions costs $18/month or about $150/year — but the number that matters is $290 for lifetime access. Against the $150 annual plan, lifetime breaks even in under two years, making it the best long-term deal of any app here if you commit. Monthly is $18. The 7-day free trial requires a card. Remember the hidden cost: you need a MIDI/USB keyboard, which starts around $150–$300 if you do not own one.',
    methodNote:
      'The method is notation-first: video lessons paired with interactive sheet music that scores your timing and accuracy in real time over MIDI. This is the closest any app gets to reading real music from day one, and it is excellent for players who already read a little. Platform coverage is the narrowest here — iOS, PC, and Mac, but no Android — and the interface feels dated next to Flowkey.',
    whoFor:
      'MIDI keyboard owners who want real sheet music and measurable scoring, and anyone ready to commit long enough for the lifetime plan to pay off.',
    whoSkip:
      'Acoustic piano owners (no mic fallback — the app cannot hear you), phone-only learners, and Android users (no app). If any of those describe you, this is a non-starter regardless of price.',
    faqs: [
      {
        q: 'Do I need a MIDI keyboard for Playground Sessions?',
        a: 'Yes — non-negotiable. There is no microphone mode, so the app cannot hear an acoustic piano or a keyboard without MIDI/USB. Factor a MIDI keyboard ($150–$300+) into the true cost if you do not own one.',
      },
      {
        q: 'Is the Playground Sessions lifetime plan worth it?',
        a: 'If you will use it for two or more years, yes: $290 breaks even against the $150 annual plan in under two years, and it is the cheapest lifetime deal in the category. If you might quit in six months, stick with monthly.',
      },
      {
        q: 'Playground Sessions vs Simply Piano?',
        a: 'Different buyers entirely. Simply Piano works with any piano via mic and holds your hand; Playground Sessions demands a MIDI keyboard and teaches you to read real notation. We compare them directly on our head-to-head page.',
      },
    ],
  },
  'piano-marvel': {
    intro:
      'Piano Marvel is the sleeper of this list: the cheapest full-featured subscription, the longest free trial (30 days), and a method built around measurable sight-reading progress that real piano teachers actually assign. It is also the least fun app here — utilitarian to a fault. If your goal is measurable skill per dollar and you own a MIDI keyboard, nothing touches it.',
    pricingDeepDive:
      'Piano Marvel costs $15/month or about $120/year — the joint-cheapest annual plan of any full-featured app here. The standout is the trial: 30 days, a full month to evaluate, versus 7 days everywhere else. At these prices the financial risk of trying it is essentially zero. Like Playground Sessions, it requires a MIDI keyboard, so budget for one if needed.',
    methodNote:
      'The method centers on SASR — the Standard Assessment of Sight Reading — a proprietary scoring system that measures and tracks your reading progress numerically. Around it sits a structured technique curriculum and a 6,000+ piece library spanning method books to repertoire. Feedback is MIDI-based and precise. The interface is spartan and there is no gamification to speak of; motivation must come from you.',
    whoFor:
      'Technique-focused learners, students already working with a teacher who want a practice tool, and sight-reading builders. The 30-day trial makes it the lowest-risk experiment on this page.',
    whoSkip:
      'Anyone who needs gamification or entertainment to practice, acoustic piano owners (MIDI required), and phone-only learners.',
    faqs: [
      {
        q: 'What is SASR in Piano Marvel?',
        a: 'The Standard Assessment of Sight Reading — Piano Marvel\u2019s proprietary scoring system that measures your sight-reading ability and tracks it over time. It is unique to Piano Marvel and the main reason teachers recommend it: progress is a number, not a feeling.',
      },
      {
        q: 'How much does Piano Marvel cost?',
        a: 'About $120 per year or $15 per month — the cheapest full-featured plan we track — with an unmatched 30-day free trial. You will need a MIDI keyboard, which is the real cost to factor in.',
      },
      {
        q: 'Piano Marvel vs Playground Sessions?',
        a: 'Both require MIDI and both are notation-serious. Piano Marvel is cheaper ($120 vs $150/yr), has the longer trial (30 vs 7 days), and wins on sight-reading measurement; Playground Sessions has the lifetime option and more polished video lessons.',
      },
    ],
  },
  yousician: {
    intro:
      'Yousician is the best value in music apps — with one enormous asterisk. A single $140/year subscription covers piano, guitar, ukulele, bass, and singing, with the strongest gamification in the category. As a piano-only app, though, it loses to the piano-first competition on curriculum depth and feedback quality. Buy it for the bundle, not for the piano course.',
    pricingDeepDive:
      'Yousician costs $20/month or about $140/year. The math only works as a bundle: $140 for five instruments is $28 per instrument per year, which is absurd value. As a piano-only purchase at $140, it is mid-priced and outclassed by Flowkey at $120. The 7-day free trial requires a card — and note that subscription-cancellation complaints are the most common negative reviews, so trial with intent.',
    methodNote:
      'The method is gamified across the board: mic-based real-time feedback, levels, challenges, and streaks tuned to keep kids and casual learners engaged. It runs on everything — iOS, Android, PC, Mac — the widest platform support here. The piano content is shallower than the piano-first apps and there is no sheet-music focus, which rules it out for classical-track learners.',
    whoFor:
      'Multi-instrumentalists (the bundle math is unbeatable), families with kids who want music to feel like a game, and casual learners sampling instruments.',
    whoSkip:
      'Piano-only serious learners — Flowkey or Simply Piano give you more piano per dollar — and anyone on a classical track needing sheet-music training.',
    faqs: [
      {
        q: 'Is Yousician good for piano?',
        a: 'It is decent for casual piano learning, especially for kids, but the piano content is shallower than piano-first apps like Flowkey or Simply Piano. If piano is your only instrument, pick a piano-first app.',
      },
      {
        q: 'How much does Yousician cost?',
        a: 'About $140 per year or $20 per month — one subscription covering piano, guitar, ukulele, bass, and singing. As a five-instrument bundle it is excellent value; as a piano-only app it is merely average.',
      },
      {
        q: 'Yousician vs Simply Piano for kids?',
        a: 'Both engage kids well. Simply Piano is the better pure piano teacher with superior kids profiles; Yousician wins if the child might bounce between piano, guitar, and ukulele.',
      },
    ],
  },
  'piano-tree': {
    intro:
      'Piano Tree is the underdog on this page: a newer course app growing on word of mouth, with early reviews that are strongly positive — 4.5+ on both app stores. Our MetaScore of 7.9 comes with a wide confidence interval (3 sources versus 6 for the leaders), so treat the number as provisional. The risk-free way to evaluate it is the free tier: try the actual product before paying anything.',
    pricingDeepDive:
      'Piano Tree offers a free tier — the only app here you can evaluate without a card or a trial clock. Paid plan pricing is not yet published on a stable page, so verify current pricing on their site before committing. We will update this page when stable pricing is confirmed. (For transparency: Piano Tree runs an open partner program paying 20% recurring commission, which we have applied to. It does not affect the MetaScore or ranking.)',
    methodNote:
      'The method is a modern guided course with mic or MIDI note detection, clean lesson design, and none of the legacy-app clutter. With a fraction of the review volume of the leaders, the honest assessment is that the product is promising but the evidence base is thin. The free tier is the correct way to resolve that uncertainty for yourself.',
    whoFor:
      'Early adopters and budget-cautious beginners who want to try a full product free before committing money anywhere.',
    whoSkip:
      'Learners who want proven catalog depth and thousands of data points behind the recommendation — the established apps have 20–200x the review volume.',
    faqs: [
      {
        q: 'Is Piano Tree legit?',
        a: 'Yes — it is a real, published app with 4.5+ star early ratings on both app stores. It is simply new, so the evidence base is thin compared to the leaders. The free tier lets you verify the quality yourself at zero cost.',
      },
      {
        q: 'How much does Piano Tree cost?',
        a: 'There is a free tier with no card required. Paid plan pricing is not yet published on a stable page — check their site for current pricing, and we will update this page when it stabilizes.',
      },
      {
        q: 'Why is Piano Tree ranked below apps with similar scores?',
        a: 'Our ranking weights evidence volume: Piano Tree\u2019s 7.9 comes from 3 sources versus 6 for the leaders, so we rank it conservatively until the data firms up. That is the methodology working as designed, not a penalty.',
      },
    ],
  },
  'piano-player': {
    intro:
      'Piano Player — from WebPianoTeacher.com — takes a different approach from every other app on this page: instead of listening to your playing, it shows you how to play. Songs are performed by real artists, captured with motion capture, and rendered as cinematic 3D animation of real hands. You slow it down, isolate each hand, loop sections, and zoom into measures. It is a watch-and-learn model, not a feedback model — closer to a masterclass video than a piano teacher.',
    pricingDeepDive:
      'Piano Player costs $11.99/month or $120/year — the joint-cheapest annual plan here, undercutting most competitors. The 7-day free trial has cancel-anytime terms. The web player is live today and runs in any browser; native iOS, Android, Mac, and Windows apps are marked "coming soon," so for now this is a web-first product.',
    methodNote:
      'The method is observational: there is no automated note detection — the app does not listen to you play. You learn by watching motion-captured professional performances from the best possible angle, with practice tools (slowdown, hand isolation, looping, measure zoom) controlling the video. That is a genuine differentiator for visual learners and a genuine limitation for everyone else: nothing here will tell you that you played the wrong note.',
    whoFor:
      'Visual learners who absorb by watching, and web-first users who want to start in a browser today with nothing to install.',
    whoSkip:
      'Anyone who wants feedback on their own playing (there is none — no note detection), mobile-app-only users (native apps are still "coming soon"), and learners who need a large proven song catalog: the library page is currently empty, so evaluate the 3D experience, not the catalog.',
    faqs: [
      {
        q: 'Is Piano Player an app I can download?',
        a: 'Not yet. The web player is live today and works in a browser on computer or tablet. Native apps for iPhone, iPad, Android, Mac, and Windows are all marked "coming soon."',
      },
      {
        q: 'Does Piano Player listen to my playing?',
        a: 'No. Piano Player has no microphone or MIDI note detection. It is a watch-and-learn product: motion-captured 3D performances you study with slowdown, hand isolation, and looping tools.',
      },
      {
        q: 'How much does Piano Player cost?',
        a: '$11.99 per month or $120 per year, with a 7-day free trial and cancel-anytime terms. The annual plan is among the cheapest here.',
      },
      {
        q: 'Why is its MetaScore marked provisional?',
        a: 'Piano Player is new with a thin public review footprint — our score draws on a single source so far. We mark it provisional rather than pretend the evidence base matches the established apps.',
      },
    ],
  },
};

export interface VsEditorial {
  /** e.g. "Pick Simply Piano if…" */
  pickA: string;
  pickB: string;
  /** 2 short paragraphs */
  body: string[];
}

export const vsEditorial: Record<string, VsEditorial> = {
  'simply-piano-vs-flowkey': {
    pickA:
      'Pick Simply Piano if you are a total beginner who wants the most structured, hand-holding curriculum — or if the app is mainly for kids.',
    pickB:
      'Pick Flowkey if you want the highest-rated app overall, a song-first approach, and to pay $30/year less.',
    body: [
      'This is the heavyweight fight of piano apps: the most-downloaded (Simply Piano, MetaScore 8.6) against the highest-rated (Flowkey, MetaScore 8.9). Both use your device microphone, both run on phone and tablet, and both will take a beginner from zero to playing songs. The difference is philosophy, not quality.',
      'Simply Piano is a curriculum: day-by-day courses, gamified progression, excellent kids profiles. Flowkey is a songbook with a teacher attached: pick music you like, slow it down, learn it in sections. On price, Flowkey wins at about $120/year versus $150 — and its frequent discounts widen the gap. Unless you need maximum structure or kids profiles, Flowkey is the pick for most people.',
    ],
  },
  'flowkey-vs-skoove': {
    pickA:
      'Pick Flowkey if songs and fun keep you practicing — the higher ratings and bigger library win on motivation.',
    pickB:
      'Pick Skoove if correct technique matters more to you than variety, and you want instructor backup.',
    body: [
      'Flowkey (MetaScore 8.9) versus Skoove (8.4) is the clearest fun-vs-rigor trade-off in piano apps. Flowkey\u2019s 1,500-song library and song-first method keep practice feeling like playing; Skoove\u2019s ~400 songs and technique-focused AI feedback keep practice honest.',
      'The price gap is real: about $120/year for Flowkey against $150 for Skoove — though Skoove bundles one-on-one instructor support, which no other course app includes. Both take mic or MIDI input. Choose by what makes you open the app on day 30: if it is songs, Flowkey; if it is the idea of playing correctly, Skoove.',
    ],
  },
  'simply-piano-vs-skoove': {
    pickA:
      'Pick Simply Piano if you want maximum hand-holding, gamified motivation, or kids profiles — the most beginner-proof curriculum here.',
    pickB:
      'Pick Skoove if you are an adult who would rather learn correctly than quickly, with instructor support when you stall.',
    body: [
      'Both cost about $150/year, both target beginners, and both end up on every serious shortlist — but they are built for different learners. Simply Piano (8.6) is the mass-market curriculum: polished, gamified, tested on millions, with 5,000+ songs and the best kids mode available.',
      'Skoove (8.4) is the teacher\u2019s answer to Simply Piano: ~400 songs, technique-first feedback, adult design with no mascots, and real instructors on call. Simply Piano is the safer gift for a kid; Skoove is the better tool for an adult who winces at being condescended to by an app.',
    ],
  },
  'pianote-vs-playground-sessions': {
    pickA:
      'Pick Pianote if you are serious about piano for years — video teachers, live Q&A, and the only true advanced path here.',
    pickB:
      'Pick Playground Sessions if you own a MIDI keyboard and want interactive notation scoring, ideally on the $290 lifetime plan.',
    body: [
      'Pianote (8.8, ~$240/year) and Playground Sessions (8.3, ~$150/year or $290 lifetime) serve the committed learner from opposite directions. Pianote is a video school: real teachers, community feedback, live sessions, content from beginner to advanced. Playground Sessions is a scoring engine: real sheet music on screen, your MIDI keyboard graded in real time.',
      'The deciding questions are budget and hardware. Pianote costs nearly twice as much annually but needs nothing beyond a phone mic; Playground Sessions is cheaper (or lifetime) but useless without a MIDI keyboard. Note the feedback gap: Pianote has no automated note detection, Playground Sessions has nothing but.',
    ],
  },
  'simply-piano-vs-playground-sessions': {
    pickA:
      'Pick Simply Piano if you want to start today with whatever piano or keyboard you own — mic input, zero setup.',
    pickB:
      'Pick Playground Sessions if you own a MIDI keyboard and want to learn real sheet music with precise scoring.',
    body: [
      'This comparison is really a hardware question wearing an app costume. Simply Piano (8.6) hears any piano through your phone\u2019s microphone: acoustic, digital, keyboard, no cables. Playground Sessions (8.3) requires a MIDI/USB keyboard and gives you nothing until you plug one in.',
      'If you have a MIDI keyboard and a computer, Playground Sessions\u2019 interactive notation and $290 lifetime option are the better long-term value — annual plans cost the same ~$150. If you have an acoustic piano, a phone, and ten minutes, Simply Piano is the only one of the two that works at all.',
    ],
  },
  'flowkey-vs-yousician': {
    pickA:
      'Pick Flowkey if piano is the instrument — deeper piano curriculum, higher ratings, lower price.',
    pickB:
      'Pick Yousician if you want piano plus guitar, ukulele, bass, and singing under one $140 subscription.',
    body: [
      'Flowkey (8.9) is a piano specialist; Yousician (7.9) is a music generalist. That single fact decides this comparison. Flowkey\u2019s piano curriculum, song library, and feedback are all deeper — and at ~$120/year it is cheaper than Yousician\u2019s ~$140.',
      'Yousician\u2019s case is the bundle: five instruments, one subscription, the strongest gamification in the category, and platform support everywhere including desktop. If anyone in the house might pick up a guitar, the bundle math is unbeatable. If the goal is learning piano well, the specialist wins.',
    ],
  },
  'simply-piano-vs-piano-marvel': {
    pickA:
      'Pick Simply Piano if motivation is the risk — gamified courses and kids profiles keep beginners practicing.',
    pickB:
      'Pick Piano Marvel if measurable skill is the goal — SASR sight-reading scores, teacher-approved method, 30-day trial.',
    body: [
      'Simply Piano (8.6, ~$150/year) and Piano Marvel (8.2, ~$120/year) represent opposite theories of learning. Simply Piano believes practice follows fun: streaks, songs, polished progression. Piano Marvel believes practice follows measurement: the SASR sight-reading assessment turns progress into a number, and the 6,000-piece library is built for students, not scrollers.',
      'The practical split is hardware and temperament. Simply Piano works with any piano via mic; Piano Marvel demands a MIDI keyboard. Simply Piano entertains; Piano Marvel trains. Piano Marvel\u2019s 30-day trial (versus 7) makes it the cheapest experiment of the two — try the serious tool first, and if you bounce off it, you have your answer about what motivates you.',
    ],
  },
  'flowkey-vs-pianote': {
    pickA:
      'Pick Flowkey if you want the best-reviewed app experience at $120/year — songs, feedback, done.',
    pickB:
      'Pick Pianote if you are committing to piano for years and want human teachers, at $240/year.',
    body: [
      'This is the value-versus-premium decision. Flowkey (8.9) is the people\u2019s champion: highest MetaScore, song-first learning, mic or MIDI feedback, ~$120/year. Pianote (8.8) is the connoisseur\u2019s choice: video lessons from real teachers, live Q&A, community, content through advanced — at ~$240/year, double the price.',
      'Flowkey tells you instantly when you miss a note; Pianote has no automated feedback at all, trading it for human teaching depth. Casual-to-intermediate learners get more per dollar from Flowkey. Learners who know they will still be playing in three years should price Pianote against private lessons ($40–$80/hour), whereupon $240 a year looks like a bargain.',
    ],
  },
  'skoove-vs-yousician': {
    pickA:
      'Pick Skoove if piano technique is the mission — the most teacher-like method of the course apps.',
    pickB:
      'Pick Yousician if the household plays multiple instruments and fun is the retention strategy.',
    body: [
      'Skoove (8.4, ~$150/year) and Yousician (7.9, ~$140/year) both cost about the same and could not be more different. Skoove is a piano purist: ~400 songs, technique-first AI feedback, instructor support, adult design. Yousician is a music arcade: five instruments, heavy gamification, 10,000 songs, kids included.',
      'The question is what you are optimizing. Optimizing for playing piano well? Skoove, comfortably. Optimizing for a family where the kids might quit piano for guitar by March? Yousician\u2019s bundle keeps the subscription useful either way.',
    ],
  },
  'simply-piano-vs-pianote': {
    pickA:
      'Pick Simply Piano if you want an interactive course that listens and corrects — the beginner default at ~$150/year.',
    pickB:
      'Pick Pianote if you want to learn from human teachers on video, with a path past intermediate, at ~$240/year.',
    body: [
      'Simply Piano (8.6) is software that teaches: structured courses, mic feedback, gamified progression from zero. Pianote (8.8) is teachers on video: real pianists, live Q&A, community critique, and the only advanced curriculum here. One listens to you; the other shows you.',
      'Price reflects the model: ~$150/year for the app, ~$240/year for the school. Beginners who need daily structure and instant correction do better with Simply Piano. Self-motivated learners — especially returning players — get more from Pianote\u2019s depth, and should compare $240 against the cost of actual lessons before flinching.',
    ],
  },
  'flowkey-vs-playground-sessions': {
    pickA:
      'Pick Flowkey if you want songs, simplicity, and the highest user ratings — works with any piano via mic.',
    pickB:
      'Pick Playground Sessions if you read (or want to read) real notation and own a MIDI keyboard — lifetime $290 available.',
    body: [
      'Flowkey (8.9, ~$120/year) is the song-first app: pick music you love, slow it down, learn it by ear and by eye, with mic or MIDI feedback on phone, tablet, or web. Playground Sessions (8.3, ~$150/year or $290 lifetime) is the notation-first app: real sheet music on screen, scored in real time over MIDI, co-created with Quincy Jones.',
      'Flowkey is the better first app for most people — higher rated, cheaper, zero hardware requirements. Playground Sessions is the better second app for the committed: once you own a MIDI keyboard and care about reading music, its interactive notation and lifetime pricing are unmatched.',
    ],
  },
  'simply-piano-vs-piano-tree': {
    pickA:
      'Pick Simply Piano if you want the proven quantity — 275,000+ ratings, millions of learners, the most refined beginner curriculum in existence.',
    pickB:
      'Pick Piano Tree if you want to try the underdog free first — modern lessons, strongly positive early reviews, zero cost to evaluate.',
    body: [
      'This is the giant versus the upstart. Simply Piano (8.6) has been tested on more beginners than every other app combined; its 8.6 MetaScore rests on six sources and hundreds of thousands of reviews. Piano Tree (7.9) has a few thousand reviews, three sources, and a free tier.',
      'The rational play is sequential, not either-or: try Piano Tree\u2019s free tier this week at zero cost. If the lessons click, you may never need the $150/year giant. If they feel thin, Simply Piano\u2019s depth is worth paying for — you will know within the 7-day trial.',
    ],
  },
};

export interface AlternativesIntro {
  intro: string;
}

export const alternativesIntro: Record<string, string> = {
  'simply-piano':
    'Simply Piano is the default beginner pick — but it is also the priciest course app, mic-only, and easy to outgrow. These alternatives fix one of those things: cheaper, MIDI-precise, more serious, or free to try.',
  flowkey:
    'Flowkey is our top-ranked app, which makes "alternatives" sound odd — but rankings are averages, and you are not average. These picks beat Flowkey for strict curricula, live teachers, technique training, or multi-instrument households.',
  skoove:
    'Skoove is the technique-first pick with the thinnest song library and a top-of-range price. If the method appeals but the catalog or cost does not, these alternatives keep the rigor and fix the trade-offs.',
  pianote:
    'Pianote is the premium video school at $240/year — superb if you are all-in, overkill otherwise. These alternatives deliver serious learning for less, or swap video depth for instant feedback.',
};

export const VS_PAIRS: [string, string][] = [
  ['simply-piano', 'flowkey'],
  ['flowkey', 'skoove'],
  ['simply-piano', 'skoove'],
  ['pianote', 'playground-sessions'],
  ['simply-piano', 'playground-sessions'],
  ['flowkey', 'yousician'],
  ['simply-piano', 'piano-marvel'],
  ['flowkey', 'pianote'],
  ['skoove', 'yousician'],
  ['simply-piano', 'pianote'],
  ['flowkey', 'playground-sessions'],
  ['simply-piano', 'piano-tree'],
];

export const ALTERNATIVES_APPS = ['simply-piano', 'flowkey', 'skoove', 'pianote'];

// Apps with a dedicated "is it worth it?" cost-vs-value page (URL: /is-{slug}-worth-it/)
export const WORTH_IT_APPS = ['flowkey', 'simply-piano', 'skoove'];

export const worthItUrl = (slug: string) => `/is-${slug}-worth-it/`;
