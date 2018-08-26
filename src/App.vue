<template>
  <div id="app" class="app">
    <nav class="app__nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/projects">Projects</router-link>
    </nav>
    <main class="app__content">
      <router-view />
    </main>
    <footer class="app__footer"><span>Test</span></footer>
  </div>
</template>

<style lang="scss">
</style>
