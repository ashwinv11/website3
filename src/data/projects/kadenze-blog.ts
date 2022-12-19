import { Category, TechTag } from '@/enums'
import { Project } from '@/interfaces'

export const KadBlog: Project = {
  title: 'Kadenze Blog',
  slug: 'kadenze-blog',
  category: Category.work,
  tags: [TechTag.wp, TechTag.php],
  date: 'Jun 22, 2016',
  body: `<p>Kadenze brings together educators, artists, and engineers from leading
         universities across the globe to provide world-class education in the
         fields of art and creative technology.</p>

         <p>I lead development on the company's
         <a href="https://blog.kadenze.com/">Wordpress blog</a>.
         Over the years it has gone through 3 major design iterations and has
         migrated between hosting providers. As lead developer, I implemented
         the design team's vision on each page. I developed a custom theme
         built ontop of the Uncode template. I wrote backend code to track
         the user's visited blog categories, so that our web app's API could
         show users relevant courses based on their reading interests.
         I developed an email tracking system using Sendgrid's API.</p>

         <p>Besides development, I also provisioned servers, created staging
         enviornments, added version control via Git, documented our development
         and deployment process, and installed a CDN and SSL using Let's Encrypt.
         I also reworked our asset loading and database queries, helping improve performance.
         This, coupled with switching our hosting providers, helped bring down
         the Time to First Interactive (TTFI) by up to 600%.</p>`,
  imageFile: 'kadblog-featured.png',
  imageAlt: `Screenshot of Kadenze Blog Website 2017`,
}
