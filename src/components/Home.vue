<template>
  <div>
    <h1>{{$options.json.title}}</h1>
    <p v-html="$options.json.body"></p>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  font-size: 10vmin;
}

p {
  font-size: 6vmin;
}
</style>

<script lang="ts">
import { Data } from '../data/home'

export default {
  json: Data,
}
</script>
