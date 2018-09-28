<template>
  <article :key="project.slug" class="project">
    <div v-if="!project">
      Loading...
    </div>

    <div class="app__inner-content project__content--photography"v-else-if="project.slug === 'photography'">
      <h1>{{project.title}}</h1>
      <h3>{{project.date}} // {{project.category}}</h3>
      <h4 v-html="project.body"></h4>
      <div class="project__photo" v-for="photo in photos" :key="photo.id">
        <progressive-img :src="photo.urls.regular" :placeholder="photo.urls.thumb" />
      </div>
    </div>

    <div class="app__inner-content project__content" v-else>
      <h1>{{project.title}}</h1>
      <h3>{{project.date}} // {{project.category}}</h3>
      <h4 v-if="tags !== ''">Tech Used &#8594; {{tags}}</h4>
      <img v-if="project.imageAlt" :src="imageURL" :alt="project.imageAlt" :class="imgClass">
      <div v-html="project.body"></div>
      <h3 v-if="project.link">
        <a :href="project.link" target="_blank">Link &#8594;</a>
      </h3>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { unsplash } from '@/utils'
import { toJson } from 'unsplash-js'

import { Projects } from '@/data/projects'
import { Project } from '@/interfaces'

const findProject = (slug: string): any => {
  return Projects.find(project => {
    return project.slug === slug
  })
}

const debounce = (func: () => void, wait = 50) => {
  let h: any
  return () => {
    clearTimeout(h)
    h = setTimeout(() => func(), wait)
  }
}

export default Vue.extend({
  name: 'Project',
  data() {
    return {
      project: {} as Project,
      photos: [],
      canLoadMore: true,
      currentPage: 1,
    }
  },
  metaInfo() {
    const vm = this as any
    return {
      title: `Ashwin Vaswani // ${vm.project.title}`,
    }
  },
  watch: {
    $route(to, from) {
      this.project = findProject(to.params.slug)
      this.loadPhotos()
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const VM = vm as any
      VM.setData(findProject(to.params.slug))
    })
  },
  mounted() {
    this.scroll()
  },
  computed: {
    imageURL(): string {
      return `${process.env.BASE_URL}images/${this.project.imageFile}`
    },
    imgClass(): object {
      return this.project.meta === undefined
        ? {}
        : { 'img--tall': this.project.meta.tallImage }
    },
    tags(): string {
      return this.project.tags === undefined
        ? ''
        : this.project.tags.join(' // ')
    },
  },
  methods: {
    setData(data: Project): void {
      this.project = data
      this.loadPhotos()
    },
    loadPhotos(): void {
      if (this.project.slug === 'photography' && this.canLoadMore) {
        const perPage = 5

        unsplash.users
          .photos('ashwinv11', this.currentPage, perPage, 'latest', false)
          .then(toJson)
          .then((response: any) => {
            if (response.length !== perPage) {
              this.canLoadMore = false
            }
            this.photos = this.photos.concat(response)
          })
      }
    },
    scroll() {
      const el = document.getElementsByClassName(
        'app__content',
      )[0] as HTMLElement

      el.onscroll = debounce(() => {
        if (
          el.scrollTop >= el.scrollHeight - el.offsetHeight - 1000 &&
          this.canLoadMore
        ) {
          this.currentPage++
          this.loadPhotos()
        }
      }, 300)
    },
  },
})
</script>

<style scoped lang="scss">
.project {
  position: relative;
  height: 100%;
}

h4 {
  color: $neutral-2;
  line-height: $h3-size;
}

.project__photo {
  margin: $main-padding auto;
  text-align: center;

  &:last-of-type {
    margin: 0 auto;
  }
}

.project__content {
  img {
    @include border-radius();
    @include transition(0.2s);
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    height: 40vmin;
    opacity: 0;

    &.img--tall {
      height: 60vmin;
    }

    @include md {
      opacity: 0.2;
    }
  }
}
</style>
