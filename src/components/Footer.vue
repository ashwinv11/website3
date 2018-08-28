<template>
  <footer class="app__footer">
    <span class="app__footer-project-nav-container">
      <router-link class="app__footer-project-nav block-link" v-if="previousProject" :to="{ name: 'project', params: { slug: previousProject.slug }}" >&#8592; {{previousProject.title}}</router-link>
    </span>
    <div class="app__footer-social">
      <a href="mailto:ashwin@vaswani.us?subject=Hey There Ashwin!" class="block-link">
        <icon name="envelope"></icon>
      </a>
      <a href="https://github.com/ashwinv11" class="block-link" target="_blank">
        <icon name="brands/github"></icon>
      </a>
      <a href="https://www.linkedin.com/pub/ashwin-vaswani/82/328/410" class="block-link" target="_blank">
        <icon name="brands/linkedin"></icon>
      </a>
      <a href="https://instagram.com/ashwinv11" class="block-link" target="_blank">
        <icon name="brands/instagram"></icon>
      </a>
      <a href="https://soundcloud.com/aries-official-music/" class="block-link" target="_blank">
        <icon name="brands/soundcloud"></icon>
      </a>
    </div>
    <span class="app__footer-project-nav-container">
      <router-link class="app__footer-project-nav block-link" v-if="nextProject" :to="{ name: 'project', params: { slug: nextProject.slug }}">{{nextProject.title}} &#8594;</router-link>
    </span>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from 'vue-awesome/components/Icon.vue'
import 'vue-awesome/icons/envelope'
import 'vue-awesome/icons/brands/github'
import 'vue-awesome/icons/brands/linkedin'
import 'vue-awesome/icons/brands/instagram'
import 'vue-awesome/icons/brands/soundcloud'

import { Projects } from '@/data/projects'
import { Project } from '@/interfaces/project'

const findProjectNavItems = (slug: string): any => {
  const projectIndex = Projects.findIndex(project => slug === project.slug)
  return {
    prev: Projects[projectIndex - 1] ? Projects[projectIndex - 1] : null,
    next: Projects[projectIndex + 1] ? Projects[projectIndex + 1] : null,
  }
}

export default Vue.extend({
  name: 'Footer',
  components: {
    Icon,
  },
  computed: {
    previousProject(): any {
      if (this.$route.name !== 'project') {
        return
      }

      return findProjectNavItems(this.$route.params.slug).prev
    },
    nextProject(): any {
      if (this.$route.name !== 'project') {
        return
      }

      return findProjectNavItems(this.$route.params.slug).next
    },
  },
})
</script>

<style lang="scss">
.app__footer {
  display: flex;
  align-items: center;

  a {
    color: $accent;
    box-shadow: none;

    &:hover,
    &:focus,
    &:active {
      color: $neutral-1;
      box-shadow: none;

      svg {
        filter: drop-shadow(0.2rem 0.4rem $neutral-5);
      }
    }
  }
}

.app__footer-project-nav {
  font-size: 3vmin;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 24vmin;
}

.app__footer-project-nav-container {
  width: 32vmin;
  min-width: 0;

  &:last-of-type {
    text-align: right;
  }
}

.app__footer-social {
  flex: 1;
  text-align: center;

  a {
    margin-right: 4vmin;
  }

  svg {
    filter: drop-shadow(0.2rem 0.4rem $neutral-7);
  }
}
</style>
