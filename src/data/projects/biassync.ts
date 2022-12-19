import { Category, TechTag } from '@/enums'
import { Project } from '@/interfaces'

export const Biassync: Project = {
  slug: 'biassync',
  title: 'Biassync',
  category: Category.work,
  tags: [
    TechTag.react,
    TechTag.gatsby,
    TechTag.ts,
    TechTag.cssInJs,
    TechTag.emotion,
    TechTag.videojs,
    TechTag.contentful,
    TechTag.netlify,
  ],
  date: 'Jun 11, 2019',
  body: `<p>
    BiasSync is a science-based software solution designed to help organizations
    more effectively assess and manage unconscious bias in the work environment.
    Their purpose is to create a more fair and respectful workplace.
  </p>
  <p>
    The software's advanced bias assessment tools gave managers an accurate,
    comprehensive and quantitative view of bias and associated personality
    measures across the entire organization.
  </p>
  <p>
    After learning about their impactful mission, I was keen to start working with
    them. I lead development on their new marketing
    <a href="https://biassync.com">website</a>. I worked closely
    with their CTO, Dan Gould to help bring their vision to fruition.
  </p>
  <p>
    One of Dan's requirements was that all the content on the site should be
    editable by anyone without having to touch any code. After some evaluation, we
    went with Contentful that served as a headless CMS to our frontend Gatsby app.
    This both fulfilled his requirement, and let us develop using the newest
    technologies, without any SEO or performance sacrifices.
  </p>
  `,
  link: 'https://biassync.com',
  imageFile: 'biassync.png',
  imageAlt: 'Screenshot of Biassync Website',
}
