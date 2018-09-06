import { Category, TechTag } from '@/enums'
import { Project } from '@/interfaces'

export const DAE16: Project = {
  slug: 'calarts-dae16',
  title: 'CalArts Digital Arts Expo 2016',
  category: Category.work,
  tags: [TechTag.wp, TechTag.php],
  date: 'May 11, 2016',
  body: `<p>I lead development on the website for CalArts' Digital Arts Expo for 2016.
        This was also created in Wordpress. Check it out
        <a href="https://expo16.calartsmusictech.com/" target="_blank">here</a>.</p>`,
  imageFile: 'expo16-featured.png',
  imageAlt: 'Screenshot of CalArts Digital Arts Expo Website 2016',
}
