import { Project, Category, TechTag } from '@/interfaces'

export const Tireget: Project = {
  slug: 'tireget',
  title: 'Tireget',
  category: Category.work,
  tags: [
    TechTag.rails,
    TechTag.solidus,
    TechTag.postgres,
    TechTag.js,
    TechTag.sass,
  ],
  date: 'September 9, 2017',
  body: `<p>I helped create an e-commerce web app with Ruby on Rails & Solidus
         for selling wholesale tires direct to the consumer.</p>

         <p>I architected the app's object & data models, and wrote an interface
         for bulk product uploading by parsing user added CSV files.
         I also setup a Docker container for the app & upgraded it to Rails 5.</p>`,
  link: 'https://www.tireget.com/',
  imageFile: 'tireget-featured.png',
  imageAlt: 'Screenshot of Tireget Website',
}
