export const Data: object = {
  title: `Hi, I'm Ashwin`,
  body: `<span class="italic">Engineering Manager</span> at
        <a href="https://get.chownow.com/" target="_blank" class="italic">ChowNow</a>,
        with a <span class="italic">BFA in
        <a href="https://mtiid.calarts.edu/" target="_blank">Music Technology</a>
        & the Digital Arts.</span>
        Previous work at <span class="italic">sweetgreen</span>,
        <span class="italic">Philosophie</span>, and
        <span class="italic">CalArts</span>.`,
}

const synopsis = `colorful. creative. coder. Ashwin Vaswani is an empathetic engineering leader and coder with a passion for building high-performing, happy teams and solving problems through technology.`
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
