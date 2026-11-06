// ─────────────────────────────────────────────────────────────
// All site copy lives here. Edit this file to change any text.
// ─────────────────────────────────────────────────────────────

export type Category = 'Prelim' | 'Midterm' | 'Finals'

export interface Project {
  slug: string
  title: string
  summary: string
  category: Category
  year: string
  placeholder?: boolean
}

export const site = {
  name: 'John Khyne E. Sonza',
  firstName: 'John Khyne',
  lastName: 'E. Sonza',
  label: 'Digital Portfolio',
  role: 'Computer Science Student',
  tagline: 'Building clean, dependable software.',
  email: 'Jksonza@usa.edu.ph',
  github: 'https://github.com/',
  resume: '/resume.pdf',
  /** Portrait for the hero frame. Drop the file in /public and set e.g. '/portrait.jpg'. Empty = blank frame. */
  photo: '',
}

export const nav = [
  { label: 'about', href: '/#about' },
  { label: 'credentials', href: '/#credentials' },
  { label: 'work', href: '/#work' },
  { label: 'contact', href: '/contact' },
]

export const titleBlock = [
  { k: 'Document', v: 'Digital Portfolio' },
  { k: 'Role', v: 'Computer Science Student' },
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
    { name: 'other', items: ['C', 'Vite'] },
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
  categories: ['Prelim', 'Midterm', 'Finals'] as Category[],
  projects: [
    {
      slug: 'prelim-placeholder-1',
      title: 'Prelim Project One',
      summary: 'Placeholder — project description goes here.',
      category: 'Prelim',
      year: '2025',
      placeholder: true,
    },
    {
      slug: 'prelim-placeholder-2',
      title: 'Prelim Project Two',
      summary: 'Placeholder — project description goes here.',
      category: 'Prelim',
      year: '2025',
      placeholder: true,
    },
    {
      slug: 'midterm-placeholder-1',
      title: 'Midterm Project One',
      summary: 'Placeholder — project description goes here.',
      category: 'Midterm',
      year: '2025',
      placeholder: true,
    },
    {
      slug: 'midterm-placeholder-2',
      title: 'Midterm Project Two',
      summary: 'Placeholder — project description goes here.',
      category: 'Midterm',
      year: '2025',
      placeholder: true,
    },
    {
      slug: 'one-id-one-connect',
      title: 'One ID, One Connect',
      summary:
        'Unifying student identification for enhanced digital engagement and notifications at the University of San Agustin Junior High School.',
      category: 'Finals',
      year: '2025',
    },
    {
      slug: 'finals-placeholder-1',
      title: 'Finals Project Two',
      summary: 'Placeholder — project description goes here.',
      category: 'Finals',
      year: '2025',
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
