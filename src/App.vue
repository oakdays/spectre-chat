<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  .sc-panel {
    position: absolute;
    height: 98%;
    width: 99%;
  }

  /* CSS that should be displayed if width is equal to or less than 800px goes here */
  @media (max-width: 800px) {
    .sc-panel {
      position: absolute;
      height: 97%;
      width: 97%;
    }
  }
</style>
