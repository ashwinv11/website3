import Unsplash from 'unsplash-js'

export const unsplash = new Unsplash({
  applicationId: process.env.VUE_APP_UNSPLASH_ACCESS_KEY,
  secret: process.env.VUE_APP_UNSPLASH_SECRET,
})
