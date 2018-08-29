<template>
  <footer class="app__footer">
    <div class="app__footer-project-nav-container">
      <router-link class="app__footer-project-nav block-link" :title="previousProject.title" v-tippy v-if="previousProject" :to="{ name: 'project', params: { slug: previousProject.slug }}" >&#8592; <span>Previous Project</span></router-link>
    </div>
    <div class="app__footer-social">
      <a href="mailto:ashwin@vaswani.us?subject=Hey There Ashwin!" title="Email" class="block-link">
        <icon name="envelope"></icon>
      </a>
      <a href="https://github.com/ashwinv11" title="Github" class="block-link" target="_blank">
        <icon name="brands/github"></icon>
      </a>
      <a href="https://www.linkedin.com/pub/ashwin-vaswani/82/328/410" title="Linkedin" class="block-link" target="_blank">
        <icon name="brands/linkedin"></icon>
      </a>
      <a href="https://instagram.com/ashwinv11" title="Instagram" class="block-link" target="_blank">
        <icon name="brands/instagram"></icon>
      </a>
      <a href="https://soundcloud.com/aries-official-music/" title="Soundcloud" class="block-link" target="_blank">
        <icon name="brands/soundcloud"></icon>
      </a>
    </div>
    <div class="app__footer-project-nav-container">
      <router-link class="app__footer-project-nav block-link" :title="nextProject.title" v-tippy v-if="nextProject" :to="{ name: 'project', params: { slug: nextProject.slug }}"><span>Next Project</span> &#8594;</router-link>
    </div>
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
import VueTippy from 'vue-tippy'

Vue.use(VueTippy, {
  animateFill: false,
  animation: 'shift-toward',
  theme: 'footer',
  size: 'large',
  performance: true,
})

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

.app__footer-project-nav-container:first-child .app__footer-project-nav {
  margin: 0 auto 0 2vmin;
}

.app__footer-project-nav-container:last-child .app__footer-project-nav {
  margin: 0 2vmin 0 auto;
}

.app__footer-project-nav {
  font-size: 10vmin;

  span {
    display: none;
  }
}

@include sm {
  .app__footer-project-nav {
    font-size: 5vmin;
  }
}

@include lg {
  .app__footer-project-nav {
    font-size: 3vmin;

    span {
      display: inline;
    }
  }
}

.app__footer-project-nav-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.app__footer-social {
  flex: 1;
  display: flex;
  justify-content: center;

  a {
    margin: 0 3vmin;

    @include sm {
      margin: 0 2vmin;
    }
  }

  svg {
    filter: drop-shadow(0.2rem 0.4rem $neutral-7);
  }
}
</style>
