/* =========================================================
   VIRA STUDIOS — Bilingual content
   Default: English (en) · Secondary: Arabic (ar, RTL)
   All contact details below are placeholders — swap freely.
   ========================================================= */

export type Locale = "en" | "ar";

export const en = {
  meta: {
    title: "VIRA STUDIOS — Growth, Experiences & Creative",
    description:
      "VIRA STUDIOS is a modern growth, experiences, and creative studio. We help brands, events, and organizations grow through strategy, partnerships, and creative execution.",
  },

  brand: {
    name: "VIRA",
    suffix: "STUDIOS",
    tagline: "Growth · Experiences · Creative",
  },

  nav: {
    home: "Home",
    services: "Services",
    experience: "Experience",
    work: "Work",
    about: "About",
    contact: "Contact",
    cta: "Start a Project",
  },

  loader: {
    line: "Growth · Experiences · Creative",
  },

  hero: {
    eyebrow: "Growth · Experiences · Creative Studio",
    headlineLines: ["Building Brands", "& Experiences", "That Matter."],
    subheadline:
      "We help brands, events, and organizations grow through partnerships, creative execution, audience development, and operational excellence.",
    ctaPrimary: "Start a Project",
    ctaSecondary: "Explore Our Work",
    scroll: "Scroll",
    metrics: [
      { value: 40, suffix: "+", label: "Projects Supported" },
      { value: 25, suffix: "+", label: "Brands Collaborated" },
      { value: 60, suffix: "+", label: "Partnerships Managed" },
      { value: 120, suffix: "+", label: "Growth Opportunities Created" },
    ],
  },

  about: {
    index: "01",
    eyebrow: "Who We Are",
    headline: "Growth Beyond Marketing.",
    body: [
      "VIRA STUDIOS exists to help brands and experiences grow through strategic thinking, creative execution, partnerships, and operational excellence.",
      "We combine creativity with execution to turn ambitious ideas into meaningful results — the kind people remember long after the lights go down.",
    ],
    focusTitle: "Where we focus",
    focus: ["Growth", "Experiences", "Partnerships", "Creativity", "Operations"],
    statement:
      "Not a traditional agency. A studio built around the work — and the people who make it happen.",
  },

  services: {
    index: "02",
    eyebrow: "Capabilities",
    title: "What We Do",
    intro:
      "Eight disciplines, one team. We move between strategy, creative, and operations so nothing falls through the cracks.",
    items: [
      {
        title: "Brand Growth Strategy",
        description:
          "Positioning, narrative, and a plan for where the brand goes next — grounded in the audience you actually want.",
      },
      {
        title: "Creative Campaign Development",
        description:
          "Ideas with a point of view, built to travel across channels, formats, and rooms.",
      },
      {
        title: "Event Experiences",
        description:
          "Moments designed end to end — from the first invite to the last handshake on the floor.",
      },
      {
        title: "Partnership Management",
        description:
          "Finding the right partners, structuring the deal, and keeping the relationship healthy long after signing.",
      },
      {
        title: "Sponsorship Development",
        description:
          "Packaging value sponsors care about, then delivering on every promise made in the pitch.",
      },
      {
        title: "Audience Growth",
        description:
          "Building a real audience — not vanity numbers — through content, community, and consistency.",
      },
      {
        title: "Operations Management",
        description:
          "The unglamorous part done well: timelines, vendors, budgets, and the thousand details in between.",
      },
      {
        title: "Content & Social Strategy",
        description:
          "A voice worth following and a rhythm worth keeping, mapped to where the brand is heading.",
      },
    ],
  },

  experience: {
    index: "03",
    eyebrow: "Featured Experience",
    client: "MN NEXUS",
    clientTag: "Event Operations · Partnerships · Commercial",
    description:
      "VIRA STUDIOS contributed to operational coordination, sales management, partnership communication, and event execution support through collaboration with MN NEXUS.",
    responsibilitiesTitle: "What we owned",
    responsibilities: [
      "Sales Team Management",
      "Contract Follow-Up",
      "Stakeholder Communication",
      "Partnership Coordination",
      "Operations Management",
      "Event Execution Support",
      "Reporting & Performance Tracking",
    ],
    impactTitle: "The impact",
    impact:
      "This experience strengthened expertise in event operations, partnership development, commercial coordination, and execution excellence.",
    timelineTitle: "How it moved",
    timeline: [
      { phase: "Align", text: "Set objectives, owners, and a shared definition of done." },
      { phase: "Coordinate", text: "Ran sales, contracts, and stakeholder communication day to day." },
      { phase: "Execute", text: "Supported live operations and on-the-ground event delivery." },
      { phase: "Report", text: "Tracked performance and turned it into clear, usable insight." },
    ],
  },

  work: {
    index: "04",
    eyebrow: "Selected Work",
    title: "Selected Work",
    intro:
      "A look at how we move from a brief to something people show up for. Representative engagements across brand, event, and partnership work.",
    fieldChallenge: "Challenge",
    fieldApproach: "Approach",
    fieldExecution: "Execution",
    fieldResults: "Results",
    projects: [
      {
        title: "Lumen Festival",
        category: "Experience · Partnerships",
        year: "2025",
        challenge:
          "A regional festival with a loyal but plateaued audience needed to grow attendance without losing the intimacy that made it special.",
        approach:
          "We rebuilt the partnership model around fewer, better-fit sponsors and reshaped the on-site experience into clear, sharable moments.",
        execution:
          "Managed sponsor delivery, restructured the floor plan, and coordinated a content team capturing the weekend in real time.",
        results: [
          { value: 38, suffix: "%", label: "Attendance growth" },
          { value: 3, suffix: "x", label: "Sponsor renewals" },
          { value: 2.1, suffix: "M", label: "Content reach" },
        ],
      },
      {
        title: "Atelier North",
        category: "Brand Growth · Creative",
        year: "2024",
        challenge:
          "A lifestyle brand had a beautiful product and no story — strong taste, but nothing that traveled beyond the shop floor.",
        approach:
          "We found the throughline in how they actually worked and built a narrative and campaign system the whole team could carry.",
        execution:
          "Delivered positioning, a launch campaign, and a content rhythm the in-house team could run without us.",
        results: [
          { value: 64, suffix: "%", label: "Audience growth" },
          { value: 4, suffix: "", label: "New retail partners" },
          { value: 27, suffix: "%", label: "Repeat customers" },
        ],
      },
      {
        title: "The Coastline Sessions",
        category: "Event · Sponsorship",
        year: "2024",
        challenge:
          "A new conference series needed credibility and commercial backing before a single ticket had been sold.",
        approach:
          "We packaged the opportunity around outcomes sponsors could measure, then ran the rooms where those conversations happen.",
        execution:
          "Built the sponsorship program, managed contracts and follow-up, and supported execution across two cities.",
        results: [
          { value: 7, suffix: "", label: "Founding partners" },
          { value: 92, suffix: "%", label: "Sell-through" },
          { value: 1.4, suffix: "M", label: "Commercial value" },
        ],
      },
    ],
  },

  process: {
    index: "05",
    eyebrow: "Method",
    title: "How We Work",
    steps: [
      {
        number: "01",
        title: "Discover",
        text: "Understand objectives, audience, and opportunities.",
      },
      {
        number: "02",
        title: "Strategize",
        text: "Develop growth, partnership, and creative plans.",
      },
      {
        number: "03",
        title: "Execute",
        text: "Coordinate campaigns, operations, and experiences.",
      },
      {
        number: "04",
        title: "Deliver",
        text: "Measure success and create meaningful outcomes.",
      },
    ],
  },

  why: {
    index: "06",
    eyebrow: "Why VIRA STUDIOS",
    title: "Built to make it happen.",
    highlights: [
      { title: "Strategic Thinking", text: "We start with the why before touching the how." },
      { title: "Creative Excellence", text: "Work with a point of view, made to be remembered." },
      { title: "Partnership Expertise", text: "Relationships managed like they matter — because they do." },
      { title: "Operational Strength", text: "The details handled so the big moments land." },
      { title: "Audience Growth", text: "Real reach, built on trust rather than noise." },
      { title: "Execution Capability", text: "From plan to floor, we see it all the way through." },
    ],
    stats: [
      { value: 98, suffix: "%", label: "Partner satisfaction" },
      { value: 60, suffix: "+", label: "Partnerships managed" },
      { value: 12, suffix: "", label: "Sectors served" },
      { value: 100, suffix: "%", label: "Hands-on delivery" },
    ],
  },

  testimonials: {
    index: "07",
    eyebrow: "In Their Words",
    title: "Trusted in the room.",
    items: [
      {
        quote:
          "They didn't just advise — they ran the floor with us. By the second day it felt like one team.",
        name: "Layla Hassan",
        role: "Festival Director",
        company: "Lumen Festival",
      },
      {
        quote:
          "The partnership work was the difference. Sponsors stayed, renewed, and brought others with them.",
        name: "Omar Khalid",
        role: "Head of Partnerships",
        company: "The Coastline Sessions",
      },
      {
        quote:
          "We finally had a story that matched the product. Calm, sharp, and completely on it.",
        name: "Nadia Farouk",
        role: "Founder",
        company: "Atelier North",
      },
      {
        quote:
          "Operations were flawless. Contracts, vendors, reporting — nothing slipped, even under pressure.",
        name: "Yusuf Amin",
        role: "Operations Lead",
        company: "MN NEXUS",
      },
    ],
  },

  finalCta: {
    headlineLines: ["Let's Build", "Something Meaningful."],
    subheadline:
      "Whether you're growing a brand, launching an event, or building an experience, VIRA STUDIOS helps bring ambitious ideas to life.",
    ctaPrimary: "Start a Project",
    ctaSecondary: "Book a Call",
  },

  contact: {
    index: "08",
    eyebrow: "Contact",
    title: "Let's talk.",
    intro:
      "Tell us what you're building. We read every message and reply within two working days.",
    form: {
      name: "Your name",
      email: "Email",
      company: "Company / Project",
      message: "Tell us about it",
      submit: "Send message",
      sending: "Sending…",
      sent: "Thank you — we'll be in touch.",
      error: "Something went wrong. Email us directly instead.",
    },
    channelsTitle: "Or reach us directly",
    email: "hello@virastudios.co",
    whatsappLabel: "WhatsApp",
    whatsapp: "+20 100 000 0000",
    instagramLabel: "Instagram",
    instagram: "@virastudios",
  },

  footer: {
    tagline: "A modern growth, experiences, and creative studio.",
    navTitle: "Navigate",
    socialTitle: "Social",
    contactTitle: "Contact",
    rights: "All rights reserved.",
    crafted: "Designed & built with intent.",
    backToTop: "Back to top",
  },

  langSwitch: {
    label: "Language",
    en: "EN",
    ar: "ع",
    toArabic: "العربية",
    toEnglish: "English",
  },
} as const;

/** Widen literal types (produced by `as const`) to their base types while
 *  preserving the overall structure — so the Arabic dictionary can hold
 *  different strings/numbers under exactly the same shape as English. */
type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? readonly Widen<U>[]
        : { readonly [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<typeof en>;

/* ---------------------------------------------------------
   Arabic — professionally localized, RTL
   --------------------------------------------------------- */
export const ar: Dictionary = {
  meta: {
    title: "فيرا ستوديوز — نمو وتجارب وإبداع",
    description:
      "فيرا ستوديوز ستوديو حديث للنمو والتجارب والإبداع. نساعد العلامات والفعاليات والمؤسسات على النمو عبر الاستراتيجية والشراكات والتنفيذ الإبداعي.",
  },

  brand: {
    name: "فيرا",
    suffix: "ستوديوز",
    tagline: "نمو · تجارب · إبداع",
  },

  nav: {
    home: "الرئيسية",
    services: "خدماتنا",
    experience: "تجربتنا",
    work: "أعمالنا",
    about: "من نحن",
    contact: "تواصل",
    cta: "ابدأ مشروعاً",
  },

  loader: {
    line: "نمو · تجارب · إبداع",
  },

  hero: {
    eyebrow: "ستوديو للنمو والتجارب والإبداع",
    headlineLines: ["نبني علامات", "وتجارب", "ذات قيمة."],
    subheadline:
      "نساعد العلامات والفعاليات والمؤسسات على النمو عبر الشراكات والتنفيذ الإبداعي وتنمية الجمهور والتميّز في التشغيل.",
    ctaPrimary: "ابدأ مشروعاً",
    ctaSecondary: "استكشف أعمالنا",
    scroll: "مرّر",
    metrics: [
      { value: 40, suffix: "+", label: "مشروعاً دعمناه" },
      { value: 25, suffix: "+", label: "علامة تعاونّا معها" },
      { value: 60, suffix: "+", label: "شراكة أدرناها" },
      { value: 120, suffix: "+", label: "فرصة نمو صنعناها" },
    ],
  },

  about: {
    index: "01",
    eyebrow: "من نحن",
    headline: "نموٌّ يتجاوز التسويق.",
    body: [
      "وُجدت فيرا ستوديوز لمساعدة العلامات والتجارب على النمو عبر التفكير الاستراتيجي والتنفيذ الإبداعي والشراكات والتميّز في التشغيل.",
      "نمزج الإبداع بالتنفيذ لنحوّل الأفكار الطموحة إلى نتائج ملموسة — من النوع الذي يبقى في الذاكرة طويلاً بعد انتهاء الحدث.",
    ],
    focusTitle: "أين نركّز",
    focus: ["النمو", "التجارب", "الشراكات", "الإبداع", "التشغيل"],
    statement:
      "لسنا وكالة تقليدية. نحن ستوديو بُني حول العمل — وحول من ينجزه.",
  },

  services: {
    index: "02",
    eyebrow: "قدراتنا",
    title: "ما الذي نقدّمه",
    intro:
      "ثماني تخصصات وفريق واحد. ننتقل بين الاستراتيجية والإبداع والتشغيل كي لا يضيع أي تفصيل.",
    items: [
      {
        title: "استراتيجية نمو العلامة",
        description:
          "التموضع والسرد وخطة لما هو قادم — مبنية على الجمهور الذي تريده فعلاً.",
      },
      {
        title: "تطوير الحملات الإبداعية",
        description:
          "أفكار لها وجهة نظر، مصمّمة لتنتقل عبر القنوات والصيغ والمساحات.",
      },
      {
        title: "تجارب الفعاليات",
        description:
          "لحظات مصمّمة من البداية للنهاية — من أول دعوة إلى آخر مصافحة على الأرض.",
      },
      {
        title: "إدارة الشراكات",
        description:
          "اختيار الشريك المناسب، وبناء الاتفاق، والحفاظ على العلاقة بعد التوقيع بوقت طويل.",
      },
      {
        title: "تطوير الرعايات",
        description:
          "تشكيل قيمة تهمّ الراعي، ثم الوفاء بكل وعد قُطع في العرض.",
      },
      {
        title: "تنمية الجمهور",
        description:
          "بناء جمهور حقيقي — لا أرقام شكلية — عبر المحتوى والمجتمع والاستمرارية.",
      },
      {
        title: "إدارة العمليات",
        description:
          "الجزء غير اللامع مُنجَزٌ بإتقان: الجداول والموردون والميزانيات وآلاف التفاصيل بينها.",
      },
      {
        title: "استراتيجية المحتوى والتواصل",
        description:
          "صوتٌ يستحق المتابعة وإيقاعٌ يستحق الالتزام، مرسوم وفق وجهة العلامة.",
      },
    ],
  },

  experience: {
    index: "03",
    eyebrow: "تجربة مميّزة",
    client: "MN NEXUS",
    clientTag: "عمليات الفعاليات · الشراكات · التجاري",
    description:
      "ساهمت فيرا ستوديوز في التنسيق التشغيلي وإدارة المبيعات والتواصل مع الشركاء ودعم تنفيذ الفعاليات بالتعاون مع MN NEXUS.",
    responsibilitiesTitle: "ما تولّيناه",
    responsibilities: [
      "إدارة فريق المبيعات",
      "متابعة العقود",
      "التواصل مع أصحاب المصلحة",
      "تنسيق الشراكات",
      "إدارة العمليات",
      "دعم تنفيذ الفعاليات",
      "إعداد التقارير وتتبّع الأداء",
    ],
    impactTitle: "الأثر",
    impact:
      "عزّزت هذه التجربة الخبرة في عمليات الفعاليات وتطوير الشراكات والتنسيق التجاري والتميّز في التنفيذ.",
    timelineTitle: "كيف سار العمل",
    timeline: [
      { phase: "المواءمة", text: "تحديد الأهداف والمسؤوليات وتعريف مشترك للإنجاز." },
      { phase: "التنسيق", text: "إدارة المبيعات والعقود والتواصل مع الشركاء يومياً." },
      { phase: "التنفيذ", text: "دعم العمليات المباشرة وتنفيذ الفعالية على الأرض." },
      { phase: "التقارير", text: "تتبّع الأداء وتحويله إلى رؤى واضحة قابلة للاستخدام." },
    ],
  },

  work: {
    index: "04",
    eyebrow: "أعمال مختارة",
    title: "أعمال مختارة",
    intro:
      "نظرة على كيفية انتقالنا من فكرة إلى شيء يحضر له الناس. نماذج تمثيلية من أعمال العلامات والفعاليات والشراكات.",
    fieldChallenge: "التحدّي",
    fieldApproach: "المقاربة",
    fieldExecution: "التنفيذ",
    fieldResults: "النتائج",
    projects: [
      {
        title: "مهرجان لومن",
        category: "تجربة · شراكات",
        year: "٢٠٢٥",
        challenge:
          "مهرجان إقليمي بجمهور وفيّ لكنه ثابت، احتاج إلى نمو الحضور دون فقدان الحميمية التي ميّزته.",
        approach:
          "أعدنا بناء نموذج الشراكات حول رعاة أقل وأكثر ملاءمة، وأعدنا تشكيل التجربة في الموقع إلى لحظات واضحة قابلة للمشاركة.",
        execution:
          "أدرنا تنفيذ الرعاة، وأعدنا تصميم المخطط، ونسّقنا فريق محتوى يوثّق العطلة لحظة بلحظة.",
        results: [
          { value: 38, suffix: "%", label: "نمو الحضور" },
          { value: 3, suffix: "×", label: "تجديد الرعاة" },
          { value: 2.1, suffix: "M", label: "وصول المحتوى" },
        ],
      },
      {
        title: "أتيليه نورث",
        category: "نمو العلامة · إبداع",
        year: "٢٠٢٤",
        challenge:
          "علامة لايف ستايل بمنتج جميل بلا حكاية — ذوق قوي، لكن لا شيء ينتقل خارج المتجر.",
        approach:
          "وجدنا الخيط الجامع في طريقة عملهم الفعلية، وبنينا سرداً ونظام حملة يستطيع الفريق كله حمله.",
        execution:
          "سلّمنا التموضع وحملة الإطلاق وإيقاع محتوى يقدر الفريق الداخلي على إدارته بدوننا.",
        results: [
          { value: 64, suffix: "%", label: "نمو الجمهور" },
          { value: 4, suffix: "", label: "شركاء بيع جدد" },
          { value: 27, suffix: "%", label: "عملاء متكررون" },
        ],
      },
      {
        title: "جلسات الساحل",
        category: "فعالية · رعاية",
        year: "٢٠٢٤",
        challenge:
          "سلسلة مؤتمرات جديدة احتاجت إلى مصداقية ودعم تجاري قبل بيع تذكرة واحدة.",
        approach:
          "صُغنا الفرصة حول نتائج يستطيع الراعي قياسها، ثم أدرنا الغرف التي تجري فيها هذه المحادثات.",
        execution:
          "بنينا برنامج الرعاية، وأدرنا العقود والمتابعة، ودعمنا التنفيذ في مدينتين.",
        results: [
          { value: 7, suffix: "", label: "شركاء مؤسّسون" },
          { value: 92, suffix: "%", label: "نسبة البيع" },
          { value: 1.4, suffix: "M", label: "القيمة التجارية" },
        ],
      },
    ],
  },

  process: {
    index: "05",
    eyebrow: "منهجنا",
    title: "كيف نعمل",
    steps: [
      {
        number: "01",
        title: "نكتشف",
        text: "نفهم الأهداف والجمهور والفرص.",
      },
      {
        number: "02",
        title: "نضع الاستراتيجية",
        text: "نطوّر خطط النمو والشراكات والإبداع.",
      },
      {
        number: "03",
        title: "ننفّذ",
        text: "ننسّق الحملات والعمليات والتجارب.",
      },
      {
        number: "04",
        title: "نسلّم",
        text: "نقيس النجاح ونصنع نتائج ذات معنى.",
      },
    ],
  },

  why: {
    index: "06",
    eyebrow: "لماذا فيرا ستوديوز",
    title: "بُنينا لننجزه.",
    highlights: [
      { title: "تفكير استراتيجي", text: "نبدأ بالـ«لماذا» قبل أن نلمس الـ«كيف»." },
      { title: "تميّز إبداعي", text: "عملٌ بوجهة نظر، مصنوع ليُتذكَّر." },
      { title: "خبرة في الشراكات", text: "علاقات تُدار وكأنها تهم — لأنها كذلك." },
      { title: "قوة تشغيلية", text: "التفاصيل مُحكمة كي تنجح اللحظات الكبرى." },
      { title: "تنمية الجمهور", text: "وصولٌ حقيقي، مبنيّ على الثقة لا الضجيج." },
      { title: "قدرة على التنفيذ", text: "من الخطة إلى الأرض، نراها حتى النهاية." },
    ],
    stats: [
      { value: 98, suffix: "%", label: "رضا الشركاء" },
      { value: 60, suffix: "+", label: "شراكة أُديرت" },
      { value: 12, suffix: "", label: "قطاعاً خدمناه" },
      { value: 100, suffix: "%", label: "تنفيذ عملي" },
    ],
  },

  testimonials: {
    index: "07",
    eyebrow: "بكلماتهم",
    title: "موثوقون في الميدان.",
    items: [
      {
        quote:
          "لم يكتفوا بالمشورة — أداروا الميدان معنا. وبحلول اليوم الثاني صرنا فريقاً واحداً.",
        name: "ليلى حسن",
        role: "مديرة المهرجان",
        company: "مهرجان لومن",
      },
      {
        quote:
          "كان عمل الشراكات هو الفارق. بقي الرعاة وجدّدوا وأحضروا غيرهم معهم.",
        name: "عمر خالد",
        role: "رئيس الشراكات",
        company: "جلسات الساحل",
      },
      {
        quote:
          "أخيراً صار لدينا حكاية تليق بالمنتج. هادئون ودقيقون ومنخرطون تماماً.",
        name: "نادية فاروق",
        role: "المؤسِّسة",
        company: "أتيليه نورث",
      },
      {
        quote:
          "كانت العمليات بلا أخطاء. العقود والموردون والتقارير — لم يفلت شيء، حتى تحت الضغط.",
        name: "يوسف أمين",
        role: "مسؤول العمليات",
        company: "MN NEXUS",
      },
    ],
  },

  finalCta: {
    headlineLines: ["لنصنع", "شيئاً ذا معنى."],
    subheadline:
      "سواء كنت تنمّي علامة أو تطلق فعالية أو تبني تجربة، تساعد فيرا ستوديوز على بثّ الحياة في الأفكار الطموحة.",
    ctaPrimary: "ابدأ مشروعاً",
    ctaSecondary: "احجز مكالمة",
  },

  contact: {
    index: "08",
    eyebrow: "تواصل",
    title: "لنتحدّث.",
    intro:
      "أخبرنا بما تبنيه. نقرأ كل رسالة ونردّ خلال يومَي عمل.",
    form: {
      name: "اسمك",
      email: "البريد الإلكتروني",
      company: "الشركة / المشروع",
      message: "أخبرنا عنه",
      submit: "إرسال الرسالة",
      sending: "جارٍ الإرسال…",
      sent: "شكراً لك — سنتواصل معك.",
      error: "حدث خطأ ما. راسلنا مباشرةً بدلاً من ذلك.",
    },
    channelsTitle: "أو تواصل معنا مباشرةً",
    email: "hello@virastudios.co",
    whatsappLabel: "واتساب",
    whatsapp: "+20 100 000 0000",
    instagramLabel: "إنستغرام",
    instagram: "@virastudios",
  },

  footer: {
    tagline: "ستوديو حديث للنمو والتجارب والإبداع.",
    navTitle: "تنقّل",
    socialTitle: "تواصل اجتماعي",
    contactTitle: "تواصل",
    rights: "جميع الحقوق محفوظة.",
    crafted: "صُمّم وبُني بنيّة واضحة.",
    backToTop: "إلى الأعلى",
  },

  langSwitch: {
    label: "اللغة",
    en: "EN",
    ar: "ع",
    toArabic: "العربية",
    toEnglish: "English",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, ar };
