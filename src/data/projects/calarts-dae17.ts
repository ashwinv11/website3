import { Category, TechTag } from '@/enums'
import { Project } from '@/interfaces'

export const DAE17: Project = {
  slug: 'calarts-dae17',
  title: 'CalArts Digital Arts Expo 2017',
  category: Category.work,
  tags: [TechTag.wp, TechTag.php],
  date: 'May 22, 2017',
  body: `<p>I lead development on the website for CalArts' Digital Arts Expo for 2017.
        This was also created in Wordpress. Check it out
        <a href="https://digitalartsexpo.calarts.edu/">here</a>.</p>`,
  imageFile: 'expo17-featured.png',
  imageAlt: 'Screenshot of CalArts Digital Arts Expo Website 2017',
}
