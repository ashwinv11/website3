<template>
  <div id="app" class="app">
    <Nav />
    <main class="app__content">
      <transition appear name="slide-right-fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
@import 'styles/styles';
</style>

<script lang="ts">
import Vue from 'vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

import { AppMeta } from '@/data/home'

export default Vue.extend({
  name: 'app',
  metaInfo: AppMeta,
  components: {
    Nav,
    Footer,
  },
})
</script>
