import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'Martínez Filoz & Asociados',
  description: 'An Astro starter for corporate/marketing/blog websites.',
  author: {
    name: 'Richard Martínez',
    twitter: '@RMFABOGADOS',
    url: 'https://martinezfiloz.com',
    email: 'director@martinezfiloz.com',
    summary: 'Outrageous actualiser.'
  },
  org: {
    name: 'Martínez Filoz & Asociados S.A.S.',
    twitter: '@RMFABOGADOS',
    url: 'https://martinezfiloz.com',
    email: 'contacto@martinezfiloz.com',
    summary:
      'Hello Tham is a boutique management consulting firm. We specialise in Business and IT strategies, operating models, strategic roadmaps, enterprise architecture, analytics and business process design.'
  },
  location: 'CALLE CARLOS ESCALLON Dg. 35 # 8-85 PISO 2 OFICINA 201 A, BARRIO CENTRO',
  latlng: [10.425297279374076, -75.54761700513578] as [number, number],
  repository: 'https://github.com/naujrevilo/martinezfiloz',
  buildTime: new Date()
}

export { default as Logo } from './assets/svg/astro/astro-icon-dark.svg'
export { default as LogoImage } from './assets/astro/astro-logo-dark.png'
export { default as FeaturedSVG } from './assets/svg/undraw/undraw_design_inspiration.svg'
export { default as DefaultSVG } from './assets/svg/undraw/undraw_my_feed.svg'
export { default as DefaultImage } from './assets/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Inicio', href: '' },
  { name: 'Blog', href: 'blog' },
  { name: 'Docs', href: 'doc/introduction' },
  { name: 'Acerca', href: 'acerca' },
  { name: 'Contacto', href: 'contacto' },
]

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/naujrevilo/martinezfiloz`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'Section Header': [
    { text: 'Introduction', link: 'doc/introduction' },
    { text: 'Page 2', link: 'doc/page-2' },
    { text: 'Page 3', link: 'doc/page-3' }
  ],
  'Another Section': [{ text: 'Page 4', link: 'doc/page-4' }]
}
