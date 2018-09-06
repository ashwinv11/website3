import { Category, TechTag } from '@/enums'
import { Project } from '@/interfaces'

export const DAE15: Project = {
  slug: 'calarts-dae15',
  title: 'CalArts Digital Arts Expo 2015',
  category: Category.work,
  tags: [TechTag.wp, TechTag.php],
  date: 'Jul 13, 2015',
  body: `<p>I created the website for CalArts' Digital Arts Expo for 2015.
        Since the client needed to add content to the site, I created it in Wordpress.
        The website has been archived
        <a href="https://expo15.calartsmusictech.com/" target="_blank">here</a>.</p>`,
  imageFile: 'expo15-featured.png',
  imageAlt: 'Screenshot of CalArts Digital Arts Expo Website 2015',
}
