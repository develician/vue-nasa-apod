<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <viewer-template></viewer-template>
  </div>
</template>

<script>
import ViewerTemplate from "./components/ViewerTemplate/ViewerTemplate.vue";

export default {
  components: {
    ViewerTemplate
  }
};
</script>


<style lang="scss">
@import "./styles/base.scss";
</style>
