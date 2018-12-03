<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,html{margin: 0;padding: 0;height: 100%;width: 100%;overflow: hidden;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 750px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  touch-action: manipulation;
  position: relative;
  margin: 0 auto;
}
</style>
