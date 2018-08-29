export const Data: object = {
  title: `Hi, I'm Ashwin`,
  body: `<span class="italic">Software Engineer</span> at
        <a href="https://philosophie.is/" target="_blank" class="italic">Philosophie</a>,
        with a <span class="italic">BFA in
        <a href="https://mtiid.calarts.edu/" target="_blank">Music Technology</a>
        & the Digital Arts.</span>
        Previously <span class="italic">Adjunct Faculty</span> at
        <span class="italic">CalArts</span> and
        <span class="italic">Web Engineer</span> at
        <span class="italic">Kadenze</span>.`,
}

const synopsis = `colorful. creative. coder. Ashwin Vaswani is a Software Engineer based in Los Angeles, California. Proficient in languages like Ruby, JavaScript, and PHP, he's interested in modern full stack web development and solving human problems through code.`

export const AppMeta: any = {
  title: 'Ashwin Vaswani',
  meta: [
    { name: 'og:title', content: 'Ashwin Vaswani' },
    { name: 'og:url', content: 'https://ashwinvaswani.com' },
    {
      name: 'og:image',
      content: 'https://ashwinvaswani.com/images/ashwin-vaswani-glitch.png',
    },
    { name: 'og:description', content: synopsis },
    { name: 'description', content: synopsis },
  ],
}
