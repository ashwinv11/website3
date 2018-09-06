export enum Category {
  art = 'Art',
  work = 'Work',
}

export enum TechTag {
  rails = 'Ruby On Rails',
  wp = 'Wordpress',
  php = 'PHP',
  js = 'JavaScript',
  ts = 'TypeScript',
  sass = 'SASS',
  arduino = 'Arduino',
  of = 'openframeworks',
  d3 = 'D3.js',
  p5 = 'p5.js',
  postgres = 'PostgreSQL',
  mongo = 'MongoDB',
  solidus = 'Solidus',
  vue = 'Vue.js',
  knockout = 'Knockout.js',
  docker = 'Docker',
  webpack = 'Webpack',
}

export interface Project {
  title: string
  date: string
  category: Category
  tags?: TechTag[]
  slug: string
  body: string
  link?: string
  imageFile?: string
  imageAlt?: string
}
