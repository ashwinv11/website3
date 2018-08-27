<template>
  <footer class="app__footer">
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

export default Vue.extend({
  name: 'Footer',
  components: {
    Icon,
  },
})
</script>
<style lang="scss">
.app__footer {
  svg {
    margin-right: 4vmin;
    filter: drop-shadow(0.2rem 0.4rem $neutral-7);
  }

  a {
    color: $accent;
    box-shadow: none;
    &:hover,
    &:focus,
    &:active {
      color: $neutral-1;
      box-shadow: none;

      svg {
        filter: drop-shadow(0.2rem 0.4rem $wine);
      }
    }
  }
}
</style>
