import { Category, TechTag } from '@/enums'
import { Project } from '@/interfaces'

export const Kadenze: Project = {
  slug: 'kadenze',
  title: 'Kadenze',
  category: Category.work,
  tags: [
    TechTag.rails,
    TechTag.js,
    TechTag.sass,
    TechTag.vue,
    TechTag.knockout,
    TechTag.postgres,
    TechTag.docker,
    TechTag.webpack,
  ],
  date: 'March 2, 2018',
  body: `<p>Kadenze is an online education platform (MOOC) for the creative arts.
          The company also created a learning management software (LMS) that was used in
          multiple institutions across the globe. I worked at Kadenze as a QA Engineer
          and later as a Web Engineer.</p>

          <p>During my time there, I worked on multiple parts of the business. I created the
          company's <a href="https://blog.kadenze.com" target="_blank">blog</a>,
          wrote automated tests to run against the web team's codebase, but mainly
          worked on the web app that served the company's core products.</p>

          <p>I worked on multiple features including but not limited to
          the dashboard, attendance, lecture & resources modules. I also built a generic
          frontend data table class that was extended in multiple view models across the site.
          I implemented new user roles as well as site-wide email redesigns. I also
          created a new library to track events, emails & user engagement, and
          migrated the app’s analytics backend to use a Dockerized in-house solution using PostgreSQL.
          </p>`,
  link: 'https://www.kadenze.com/',
  imageFile: 'kadenze-featured.png',
  imageAlt: `Screenshot of Kadenze's Website`,
}
