import { Category, TechTag } from '@/enums'
import { Project } from '@/interfaces'

export const MTIID: Project = {
  slug: 'mtiid',
  title: 'MTIID',
  category: Category.work,
  tags: [TechTag.wp, TechTag.php],
  date: 'Jun 23, 2016',
  body: `<p>I lead development on the website for CalArts'
        <a href="https://mtiid.calarts.edu/" target="_blank">Music
        Technology: Interaction, Intelligence & Design (MTIID)</a> program.</p>`,
  imageFile: 'mtiid-featured.png',
  imageAlt: 'Screenshot of MTIID Website',
}
