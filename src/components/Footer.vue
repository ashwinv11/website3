<template>
  <footer class="app__footer">
    <router-link class="app__footer-project-nav block-link" v-if="previousProject" :to="{ name: 'project', params: { slug: previousProject }}" >&#8592; Previous</router-link>
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
    <router-link class="app__footer-project-nav block-link" v-if="nextProject" :to="{ name: 'project', params: { slug: nextProject }}">Next &#8594;</router-link>
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
    prev: Projects[projectIndex - 1] ? Projects[projectIndex - 1].slug : '',
    next: Projects[projectIndex + 1] ? Projects[projectIndex + 1].slug : '',
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

  a {
    color: $accent;
    box-shadow: none;
    margin-right: 4vmin;
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
  font-size: 4vmin;
}

.app__footer-social {
  flex: 1;
  text-align: center;

  svg {
    filter: drop-shadow(0.2rem 0.4rem $neutral-7);
  }
}
</style>
