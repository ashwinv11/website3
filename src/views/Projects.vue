<template>
  <div class="projects app__inner-content">
    <router-link
      v-for="project in $options.projects"
      :key="project.slug"
      :to="{ name: 'project', params: { slug: project.slug } }"
      class="projects__item block-link"
    >
      <h4>{{ project.title }}</h4>
      <div class="projects__item-meta lowercase">
        <h5>{{ project.category }}</h5>
        <h5>{{ project.date }}</h5>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss">
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50vmin, 1fr));
  grid-auto-rows: minmax(50vmin, auto);
  grid-gap: 6vmin;

  @include md {
    grid-template-columns: repeat(auto-fill, minmax(39vmin, 1fr));
    grid-auto-rows: minmax(39vmin, auto);
    grid-gap: 4vmin;
  }

  @include lg {
    grid-template-columns: repeat(auto-fill, minmax(32vmin, 1fr));
    grid-auto-rows: minmax(32vmin, auto);
  }
}

.projects__item {
  @include border-radius();
  position: relative;
  border: 1px groove $garnet;
  padding: 1rem;

  h4 {
    font-size: $h2-size;
    hyphens: auto;
  }

  h5 {
    margin: 0;
    font-family: $body-font-family;
    font-size: $h3-size;
    color: $neutral-1;
  }

  h4,
  h5 {
    @include transition(0.2s);
  }

  &:hover,
  &:focus,
  &:active {
    @include elevation(4);
    background-color: $garnet;
    border: 1px groove $garnet;

    h4 {
      color: $neutral-0;
    }

    h5 {
      color: $neutral-8;
    }
  }

  @include sm {
    h4 {
      font-size: $h3-size;
    }

    h5 {
      font-size: $h4-size;
    }
  }
}

.projects__item-meta {
  position: absolute;
  bottom: 4vmin;
  right: 4vmin;
  text-align: right;

  @include md {
    bottom: 2vmin;
    right: 2vmin;
  }
}
</style>

<script lang="ts">
import { Projects, ProjectsMeta } from '@/data/projects'

export default {
  projects: Projects,
  metaInfo: ProjectsMeta,
}
</script>
