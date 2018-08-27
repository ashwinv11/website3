<template>
  <div class="projects">
    <router-link v-for="project in $options.projects" :key="project.slug" :to="{ name: 'project', params: { slug: project.slug }}" class="projects__item block-link">
      <h4>{{project.title}}</h4>
    </router-link>
  </div>
</template>

<style lang="scss">
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30vmin, 1fr));
  grid-auto-rows: minmax(30vmin, auto);
  grid-gap: 1rem;
}

.projects__item {
  @include border-radius();
  border: 1px groove $garnet;
  padding: 1rem;

  h4 {
    @include transition(0.2s);
  }

  &:hover,
  &:focus,
  &:active {
    @include elevation(4);
    background-color: $ruby;
    border: 1px groove $ruby;

    h4 {
      color: $neutral-0;
    }
  }
}
</style>

<script lang="ts">
import { Projects } from '@/data/projects'

export default {
  projects: Projects,
}
</script>
