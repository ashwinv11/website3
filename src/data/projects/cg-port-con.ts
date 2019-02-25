import { Category, TechTag } from '@/enums'
import { Project } from '@/interfaces'

export const CgPortCon: Project = {
  slug: 'cg-port-con',
  title: 'Capital Group',
  category: Category.work,
  tags: [
    TechTag.angular6,
    TechTag.ts,
    TechTag.d3,
    TechTag.foundation,
    TechTag.sass,
  ],
  date: 'November 3, 2018',
  body: `<p>Capital Group is one of America's oldest and largest investment
        management organizations, with $1.87 trillion in assets under management
        as of 2019. As part of their endeavor to assist advisors, they wanted
        to build an internal portfolio construction and management tool.</p>

        <p>The idea was that advisors could work and iterate on sample portfolios
        before presenting them to clients. Portfolios could be created from
        either existing American Funds models, sleeves and funds, or from non
        Capital Group funds. Users could view saved portfolios associated to
        meetings, manage their portfolios, answer questions surrounding the
        portfolio's intent, and view detailed performance analyses on them.</p>

        <p>I lead frontend development on this project and integrated the APIs
        Capital Group's backend team was delivering to us in order to make the
        project come to fruition. Some notable features I built included a
        robust fund searching and portfolio creation interface and detailed
        interactive visualizations of a portfolio's projected performance.</p>`,
  link: 'https://www.capitalgroup.com/',
  imageFile: 'cg-port-con-featured.png',
  imageAlt: `Screenshot of Capital Group's Portfolio Construction web application`,
}
