export enum Category {
  art = 'Art',
  work = 'Work',
}

export interface Project {
  title: string
  date: string
  category: Category
  slug: string
  body: string
  imageFile?: string
  imageAlt?: string
}
