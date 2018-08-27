import { Project } from '@/interfaces/project'

export const Censored: Project = {
  slug: 'censored',
  title: 'censored',
  date: 'May 11, 2016',
  body: `<p>Censored is an interactive website that visualizes statistics on
        sexual assault and rape cases in India. The data is taken from the
        Open Government Data Platform of India, which is used by the Government
        of India to publish their datasets for public use.
        Although this is a step in the right direction, these numbers are
        only reported cases till the year 2013. Most cases aren't reported.
        Many cases are buried under bureaucracy and corruption.
        In Maharashtra alone, the number of reported cases has
        <span class="italic">more than doubled</span> in just 4 years.
        Today’s numbers are unknown, but we can only imagine what they are.</p>

        <p>The animations in this video are slowed down due to the screen
        recording, but the source code can be found
        <a href="https://github.com/ashwinv11/censored" target="_blank">here</a>.</p>`,
}
