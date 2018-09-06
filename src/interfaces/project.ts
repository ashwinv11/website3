import { Category, TechTag } from '@/enums'

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
  meta?: any
}
