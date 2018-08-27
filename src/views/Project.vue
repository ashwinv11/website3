<template>
  <article>
    <div v-if="!project">
      Loading...
    </div>

    <div v-else>
      {{project.title}}
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Projects } from '@/data/projects'
import { Project } from '@/interfaces/project'

export default Vue.extend({
  name: 'Project',
  data: () => {
    return {
      project: {},
    }
  },
  beforeRouteEnter(to, from, next) {
    const data = Projects.find(project => {
      return project.slug === to.params.slug
    })
    next(vm => {
      const VM = vm as any
      VM.setData(data)
    })
  },
  methods: {
    setData(data: Project): void {
      this.project = data
    },
  },
})
</script>
