import { Category, TechTag } from '@/enums'
import { Project } from '@/interfaces'

export const Cogni: Project = {
  slug: 'cogni',
  title: 'Cogni',
  category: Category.work,
  tags: [
    TechTag.rails,
    TechTag.reactNative,
    TechTag.react,
    TechTag.alloy,
    TechTag.branch,
    TechTag.plaid,
    TechTag.sendgrid,
    TechTag.heroku,
  ],
  date: 'August 5, 2018',
  body: `<p>Cogni’s mission was to build a modern bank geared towards today’s lifestyle.
         They learned that most of the future generation's income was from part-time
         employment opportunities; that most people had trouble saving for their goals,
         that it was hard to receive payments from clients, and that their current bank’s
         cash back solutions left more to be desired.</p>

         <p>I supported Cogni by developing their products during pre-launch campaign,
         which helped the team raise additional funding from investors. I also engineered
         essential features for their main mobile applications, bringing them closer to launch.</p>

         <p>Through our help, Cogni was able to acheive an average weekly user growth rate of 9%.
         They also had 239 real user referral based app downloads in less than 2 months – all pre-marketing.</p>

         <p>I architected the backend RESTful API for the iOS and Android applications.
         I helped create a referral gamification system that incentivized people to
         download the app.
         I also engineered features allowing users to transfer funds to other
         users on the platform, control their savings easier, send invoices
         and payment reminders to clients, and receive high cash back at
         retailers and restaurants. I also helped develop their marketing website.</p>`,
  link: 'https://cogni.is/',
  imageFile: 'cogni-featured.png',
  imageAlt: `Screenshot of Cogni's iOS application`,
  meta: {
    tallImage: true,
  },
}
