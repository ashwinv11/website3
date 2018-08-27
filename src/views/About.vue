<template>
  <div class="about">
    <h1>{{$options.json.title}}</h1>
    <p v-html="$options.json.body"></p>
  </div>
</template>

<script lang="ts">
import { Data } from '@/data/about'

export default {
  json: Data,
}
</script>
