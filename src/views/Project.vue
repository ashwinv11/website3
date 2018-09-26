<template>
  <article :key="project.slug">
    <div v-if="!project">
      Loading...
    </div>

    <div v-else-if="project.slug === 'photography'">
      <h1>{{project.title}}</h1>
      <h3>{{project.category}}</h3>
      <div v-for="photo in photos" :key="photo.id">
        <img :src="photo.urls.regular">
      </div>
    </div>

    <div class="app__inner-content project" v-else>
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

export default Vue.extend({
  name: 'Project',
  data() {
    return {
      project: {} as Project,
      photos: [],
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
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const VM = vm as any
      VM.setData(findProject(to.params.slug))
    })
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
      if (this.project.slug === 'photography') {
        this.loadPhotos()
      }
    },
    loadPhotos() {
      unsplash.users
        .photos('ashwinv11', 1, 10, 'latest', false)
        .then(toJson)
        .then((response: any) => {
          this.photos = response
        })
    },
  },
})
</script>

<style scoped lang="scss">
article {
  position: relative;
  height: 100%;
}

h4 {
  color: $neutral-2;
  line-height: $h3-size;
}

.project {
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
