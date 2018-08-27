<template>
  <div class="home">
    <h1>{{$options.json.title}}</h1>
    <p v-html="$options.json.body"></p>
  </div>
</template>

<script lang="ts">
import { Data } from '@/data/home'

export default {
  json: Data,
}
</script>
