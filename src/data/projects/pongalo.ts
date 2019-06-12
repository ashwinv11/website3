import { Category, TechTag } from '@/enums'
import { Project } from '@/interfaces'

export const Pongalo: Project = {
  slug: 'pongalo',
  title: 'Pongalo',
  category: Category.work,
  tags: [
    TechTag.tabris,
    TechTag.ts,
    TechTag.csharp,
    TechTag.dotnetCore,
    TechTag.aws,
    TechTag.mongo,
    TechTag.angularjs,
  ],
  date: 'Jan 16, 2019',
  body: `<p>
    Pongalo NovelaClub brings more than 10,000 episodes of telenovelas and TV
    series from Latin America to iOS, Android, and the web.
  </p>
  <p>
    The service offers free (ad supported) or paid subscription plans to view HD
    on-demand Spanish content. I helped add new weekly, biweekly, quarterly, and
    biannual subscription plans to their iOS and Android apps. I also added
    in-app review popup that helped increase the number of reviews on the app
    store.
  </p>
  <p>
    Since this was a legacy codebase written with
    <a href="https://tabris.com" target="_blank">Tabris.js</a>, we had a high
    number of crashes due to older dependencies – particularly on Android. By
    gradually and carefully upgrading these dependencies to more stable releases,
    we were able to ship a more bug free Android experience and saw a reduced
    number of crashes in the Google Play store.
  </p>
  `,
  link: 'https://itunes.apple.com/us/app/pongalo-novelaclub/id948129298?mt=8',
  imageFile: 'pongalo.png',
  imageAlt: 'Screenshot of Pongalo NovelaClub Android App',
}
