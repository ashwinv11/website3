import { Category, TechTag } from '@/enums'
import { Project } from '@/interfaces'

export const Obvious: Project = {
  slug: 'obvious',
  title: 'Obvious Ventures',
  category: Category.work,
  tags: [
    TechTag.react,
    TechTag.gatsby,
    TechTag.cssInJs,
    TechTag.emotion,
    TechTag.prismic,
    TechTag.netlify,
  ],
  date: 'Dec 2, 2019',
  body: `<p>
    Obvious Ventures is an early stage venture capital firm for startups
    reimagining trillion-dollar industries through a world positive lens.
    With an impressive portfolio including companies like Beyond Meat, Diamond
    Foundry, Medium, Magic Leap, VSCO, and more, Obvious has raised a total
    of more than $585 million.
  </p>
  <p>
    Obvious was looking to announce their latest fund of ~$272 million, and as
    part of their efforts they were looking to refresh their current website.
    They wanted a new design to match up to modern standards, and also wanted to
    upgrade their old deprecated tech stack (Node 0.10). After working with the
    talented Pineapple design firm in San Francisco, we were ready to start
    developing their new vision.
  </p>
  <p>
    The old website was pulling data from Prismic, a headless CMS, and our main
    stakeholder Gabe wanted us to build on top of the existing data source. After
    learning of this requirement, we decided to build a Gatsby app. This let us
    use the more modern tech, yet allowed Gabe to have complete control over the
    content on the site.
  </p>
  <p>
    Although we were fortunate to use an existing Prismic source plugin for Gatsby,
    we had to overcome a few hurdles that Prismic's API threw at us. Since Prismic
    only supports sending 20 items per API call, we had to implement our data
    fetching and page creation flow. This approach made it possible to not rely on
    Prismic for anything at runtime other than some asset loading, as all data was
    pulled in at build time by Gatsby! We also worked closely with the design team
    to implement the complex animations throughout the site, which helped bring
    that finer level of quality to the overall product.
  </p>
  `,
  link: 'https://obvious.com',
  imageFile: 'obvious.png',
  imageAlt: `Screenshot of Obvious Venture's Website`,
}
