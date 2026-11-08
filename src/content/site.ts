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
  /** If set, the row opens this file (e.g. a PDF) instead of a case-study page. */
  href?: string
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
  github: 'https://github.com/',
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
      slug: 'prelim-placeholder-1',
      title: 'Prelim Project One',
      summary: 'Placeholder — project description goes here.',
      category: 'Prelim',
      placeholder: true,
    },
    {
      slug: 'prelim-placeholder-2',
      title: 'Prelim Project Two',
      summary: 'Placeholder — project description goes here.',
      category: 'Prelim',
      placeholder: true,
    },
    {
      slug: 'the-last-cookie',
      title: 'The Last Cookie',
      summary: 'A six-panel comic about two friends and the last cookie in the jar.',
      category: 'Midterm',
      image: '/Midterm/the-last-cookie.png',
      href: '/Midterm/The_Last_Cookie_.pdf',
      team: ['Vince Esmero', 'Armaan Singh', 'Adrian Santander', 'Angelo Jules Gubaton'],
    },
    {
      slug: 'the-last-cookie-video',
      title: 'The Last Cookie (Video)',
      summary: 'A 25-second vertical video version of The Last Cookie.',
      category: 'Midterm',
      image: '/Midterm/the-last-cookie-video.jpg',
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
      slug: 'finals-placeholder-1',
      title: 'Finals Project One',
      summary: 'Placeholder — project description goes here.',
      category: 'Finals',
      placeholder: true,
    },
    {
      slug: 'finals-placeholder-2',
      title: 'Finals Project Two',
      summary: 'Placeholder — project description goes here.',
      category: 'Finals',
      placeholder: true,
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
    { label: 'GitHub', href: site.github, external: true },
    { label: 'Email', href: `mailto:${site.email}`, external: false },
  ],
}

export const contact = {
  heading: 'Contact',
  lead: "Let's build something. Reach out by email.",
}
