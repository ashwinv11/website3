<template>
  <article :key="project.slug">
    <div v-if="!project">
      Loading...
    </div>

    <div v-else>
      <h1>{{project.title}}</h1>
      <h3>{{project.date}}</h3>
      <img v-if="project.imageAlt" :src="imageURL" :alt="project.imageAlt">
      <div v-html="project.body"></div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Projects } from '@/data/projects'
import { Project } from '@/interfaces/project'

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
  },
  methods: {
    setData(data: Project): void {
      this.project = data
    },
  },
})
</script>

<style scoped lang="scss">
article {
  position: relative;
  height: 100%;
}

img {
  @include border-radius();
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  opacity: 0.2;
  height: 40vmin;
}
</style>
