<template>
  <div class="home">
    <Home/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Home from '@/components/Home.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    Home,
  },
})
</script>
