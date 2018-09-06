import { Project, Category } from '@/interfaces'

export const DigitalReflections: Project = {
  slug: 'digital-reflections',
  title: 'Digital Reflections',
  category: Category.art,
  date: 'May 11, 2016',
  body: `<p>Digital Reflections is an interactive mixed reality piece.
        You see yourself in the mirror, but you also see a digital representation
        of yourself. This breaks down the dichotomy between the physical and
        digital world, creating another reality. Wave your hands and make some
        noise to see your reflection change.</p>`,
  imageFile: 'digital-reflections-featured.jpg',
  imageAlt: `Viewer looking into a double sided mirror, behind one side is a
            screen with a digital representation of one's self`,
}
