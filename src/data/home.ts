export const Data: object = {
  title: `Hi, I'm Ashwin`,
  body: `<span class="italic">Senior Software Engineer</span> at
        <a href="https://www.sweetgreen.com/" target="_blank" class="italic">Sweetgreen</a>,
        with a <span class="italic">BFA in
        <a href="https://mtiid.calarts.edu/" target="_blank">Music Technology</a>
        & the Digital Arts.</span>
        Previously <span class="italic">Software Engineer</span> at
        <span class="italic">Philosophie</span> and
        <span class="italic">Adjunct Faculty</span> at
        <span class="italic">CalArts</span>.`,
}

const synopsis = `colorful. creative. coder. Ashwin Vaswani is a Software Engineer based in Los Angeles, California. Proficient in languages like Ruby, JavaScript, and PHP, he's interested in modern full stack web development and solving human problems through code.`
const imgURL = 'https://ashwinvaswani.com/images/ashwin-vaswani-glitch.png'

export const AppMeta: any = {
  title: 'Ashwin Vaswani',
  meta: [
    {
      name: 'og:site_name',
      property: 'og:site_name',
      content: 'Ashwin Vaswani',
    },
    { name: 'og:title', property: 'og:title', content: 'Ashwin Vaswani' },
    { name: 'og:type', property: 'og:type', content: 'website' },
    {
      name: 'og:url',
      property: 'og:url',
      content: 'https://ashwinvaswani.com',
    },
    {
      name: 'og:image',
      property: 'og:image',
      content: imgURL,
      itemprop: 'image',
    },
    { name: 'og:description', property: 'og:description', content: synopsis },
    { name: 'description', property: 'description', content: synopsis },
    { name: 'twitter:card', property: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', property: 'twitter:site', content: '@ashwinv11' },
    {
      name: 'twitter:title',
      property: 'twitter:title',
      content: 'Ashwin Vaswani',
    },
    {
      name: 'twitter:description',
      property: 'twitter:description',
      content: synopsis,
    },
    {
      name: 'twitter:image',
      property: 'twitter:image',
      content: imgURL,
    },
  ],
}
