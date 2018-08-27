<template>
  <div class="projects">
    <a href="#" class="projects__item block-link"></a>
    <a href="#" class="projects__item block-link"></a>
    <a href="#" class="projects__item block-link"></a>
    <a href="#" class="projects__item block-link"></a>
    <a href="#" class="projects__item block-link"></a>
    <a href="#" class="projects__item block-link"></a>
  </div>
</template>

<style lang="scss">
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30vmin, 1fr));
  grid-auto-rows: minmax(30vmin, auto);
  grid-gap: 1rem;
}

.projects__item {
  @include border-radius();
  border: 1px groove $garnet;

  &:hover,
  &:focus,
  &:active {
    @include elevation(4);
    background-color: $ruby;
    border: 1px groove $ruby;
  }
}
</style>
