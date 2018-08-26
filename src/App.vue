<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/projects">Projects</router-link>
    </nav>
    <router-view class="app__content"/>
  </div>
</template>

<style lang="scss">
</style>
