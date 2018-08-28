<template>
  <article>
    <div v-if="!project">
      Loading...
    </div>

    <div v-else>
      <h1>{{project.title}}</h1>
      <h3>{{project.date}}</h3>
      <div v-html="project.body"></div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Projects } from '@/data/projects'
import { Project } from '@/interfaces/project'

const findProject = (slug: string): Project => {
  return Projects.find(project => {
    return project.slug === slug
  })
}

export default Vue.extend({
  name: 'Project',
  data: () => {
    return {
      project: {},
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
  methods: {
    setData(data: Project): void {
      this.project = data
    },
  },
})
</script>
