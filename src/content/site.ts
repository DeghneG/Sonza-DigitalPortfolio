// ─────────────────────────────────────────────────────────────
// All site copy lives here. Edit this file to change any text.
// ─────────────────────────────────────────────────────────────

export type Category = 'Prelim' | 'Midterm' | 'Finals' | 'Capstone'

export interface Project {
  slug: string
  title: string
  summary: string
  category: Category
  /** Thumbnail shown in the Work list (path under /public). */
  image?: string
  /** Thumbnail crop as CSS aspect-ratio, e.g. '1/1'. Defaults to the comic's 977/893. */
  imageRatio?: string
  /** CSS object-position for the thumbnail crop, e.g. 'top'. Defaults to center. */
  imagePosition?: string
  /** If set, the row opens this file (e.g. a PDF) instead of a case-study page. */
  href?: string
  /** Optional second link, shown as a "View more" button on the row (e.g. a Drive folder). */
  moreHref?: string
  /** Group members, other than John, credited on the project. */
  team?: string[]
  placeholder?: boolean
}

export const site = {
  name: 'John Khyne E. Sonza',
  firstName: 'John Khyne',
  lastName: 'E. Sonza',
  label: 'Digital Portfolio',
  role: 'Information Technology Student',
  tagline: 'Building clean, dependable software.',
  email: 'Jksonza@usa.edu.ph',
  resume: '/resume.pdf',
}

export const nav = [
  { label: 'about', href: '/#about' },
  { label: 'credentials', href: '/#credentials' },
  { label: 'work', href: '/#work' },
  { label: 'contact', href: '/contact' },
]

export const titleBlock = [
  { k: 'Document', v: 'Digital Portfolio' },
  { k: 'Role', v: 'Information Technology Student' },
  { k: 'Institution', v: 'University of San Agustin' },
  { k: 'Enrolled', v: '2024 — Now' },
]

export const about = {
  heading: 'About',
  bio: [
    'I am a college student at the University of San Agustin, learning to design and build software that is simple to use and sturdy under the hood.',
    'I care about clear structure, honest interfaces, and shipping work that solves a real problem.',
  ],
  stack: [
    { name: 'frontend', items: ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'GSAP'] },
    { name: 'backend', items: ['Python', 'Java', 'PHP', 'SQL'] },
    { name: 'other', items: ['C', 'Vite', 'Canva', 'Adobe Illustrator'] },
  ],
}

export const credentials = {
  heading: 'Credentials',
  items: [
    { level: 'High School', school: 'Colegio De San Jose', years: '2018 — 2022' },
    { level: 'Senior High', school: 'St. Roberts International School', years: '2022 — 2024' },
    { level: 'College', school: 'University of San Agustin', years: '2024 — Now' },
  ],
}

export const work = {
  heading: 'Work',
  intro: 'Project case studies, grouped by term.',
  categories: ['Prelim', 'Midterm', 'Finals', 'Capstone'] as Category[],
  projects: [
    {
      slug: 'community-voice-logo',
      title: 'Community Voice Logo',
      summary: 'Logo for Community Voice, an "AI-Powered. People Focused." brand.',
      category: 'Prelim',
      image: '/prelim/community-voice-logo.webp',
      imageRatio: '1/1',
      href: '/prelim/community-voice-logo.webp',
      moreHref: 'https://drive.google.com/drive/folders/1X_t8iXAuaFQZHyfuK_AGx3RzzrCwou1K',
    },
    {
      slug: 'greenstep',
      title: 'GreenStep',
      summary: 'A campaign plan for GreenStep, an app that turns everyday eco-friendly actions into rewards.',
      category: 'Prelim',
      image: '/prelim/greenstep-campaign-plan.webp',
      imageRatio: '1/1',
      imagePosition: 'top',
      href: '/prelim/greenstep-campaign-plan.webp',
    },
    {
      slug: 'dartboard-recording',
      title: 'Dartboard Recording',
      summary: 'A 36-second screen recording of a dartboard.',
      category: 'Prelim',
      image: '/final/desktop-recording-2026-11-09.webp',
      imageRatio: '1/1',
      href: '/final/desktop-recording-2026-11-09.mp4#t=28',
    },
    {
      slug: 'the-last-cookie',
      title: 'The Last Cookie',
      summary: 'A six-panel comic about two friends and the last cookie in the jar.',
      category: 'Midterm',
      image: '/Midterm/the-last-cookie.webp',
      href: '/Midterm/The_Last_Cookie_.pdf',
      team: ['Vince Esmero', 'Armaan Singh', 'Adrian Santander', 'Angelo Jules Gubaton'],
    },
    {
      slug: 'the-last-cookie-video',
      title: 'The Last Cookie (Video)',
      summary: 'A 25-second vertical video version of The Last Cookie.',
      category: 'Midterm',
      image: '/Midterm/the-last-cookie-video.webp',
      imageRatio: '1/1',
      href: '/Midterm/The%20Last%20Cookie.mp4',
    },
    {
      slug: 'one-id-one-connect',
      title: 'One ID, One Connect',
      summary:
        'Unifying student identification for enhanced digital engagement and notifications at the University of San Agustin Junior High School.',
      category: 'Capstone',
    },
    {
      slug: 'it213-final',
      title: 'IT213 Final Project',
      summary: 'An animation of a black ball and a blue ball moving across a white canvas.',
      category: 'Finals',
      image: '/final/it213-final.gif',
      imageRatio: '16/9',
      href: '/final/it213-final.gif',
    },
    {
      slug: 'rocket-animation',
      title: 'Rocket Animation',
      summary: 'A short animation of a rocket launching above the Earth.',
      category: 'Finals',
      image: '/final/rocket-animation.webp',
      imageRatio: '16/9',
      href: '/final/rocket-animation.gif',
    },
  ] as Project[],
}

export interface CaseStudy {
  title: string
  subtitle: string
  problem: { heading: string; body: string[] }
  role: { heading: string; meta: { k: string; v: string }[] }
  process: { heading: string; steps: { title: string; body: string }[] }
  results: { heading: string; body: string[]; deliverables: string[] }
  prev: { slug: string; title: string } | null
  next: { slug: string; title: string } | null
}

export const caseStudies: Record<string, CaseStudy> = {
  'one-id-one-connect': {
    title: 'One ID, One Connect',
    subtitle:
      'Unifying Student Identification for Enhanced Digital Engagement and Notifications at the University of San Agustin Junior High School',
    problem: {
      heading: 'Problem & Overview',
      body: [
        'Placeholder — describe the problem statement: how student identification and notifications were fragmented across separate systems.',
        'Placeholder — summarise the solution at a high level and who it serves.',
      ],
    },
    role: {
      heading: 'Role, Timeline & Tools',
      meta: [
        { k: 'Role', v: 'Placeholder role' },
        { k: 'Timeline', v: 'Placeholder timeline' },
        { k: 'Tools', v: 'Placeholder tools' },
      ],
    },
    process: {
      heading: 'Process',
      steps: [
        { title: 'Research', body: 'Placeholder — notes, interviews, requirements.' },
        { title: 'Wireframes', body: 'Placeholder — wireframes and flows.' },
        { title: 'Code', body: 'Placeholder — code snippets and architecture.' },
        { title: 'Visuals', body: 'Placeholder — final screens and visuals.' },
      ],
    },
    results: {
      heading: 'Results & Deliverables',
      body: ['Placeholder — outcomes, metrics, and what was delivered.'],
      deliverables: ['Placeholder deliverable one', 'Placeholder deliverable two', 'Placeholder deliverable three'],
    },
    prev: null,
    next: null,
  },
}

export const footer = {
  label: 'Footer navigation',
  links: [
    { label: 'Email', href: `mailto:${site.email}`, external: false },
  ],
}

export const contact = {
  heading: 'Contact',
  lead: "Let's build something. Reach out by email.",
}
