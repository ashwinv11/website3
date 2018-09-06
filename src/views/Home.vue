<template>
  <div class="home">
    <h1>{{$options.json.title}}</h1>
    <p v-html="$options.json.body"></p>
    <h3><router-link to="projects">Projects &#8594;</router-link></h3>
  </div>
</template>

<script lang="ts">
import { Data } from '@/data/home'

export default {
  json: Data,
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @include md {
    height: auto;
  }

  p {
    margin-top: 0;
  }
}
</style>
