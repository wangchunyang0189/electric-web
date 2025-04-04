<template>
  <div class="container">
    <Banner></Banner>
    <Types></Types>
    <Info></Info>
    <Feature></Feature>
    <Process></Process>
    <Bottom></Bottom>
  </div>
</template>
<script setup>
import Banner from "./Banner.vue";
import Types from "./Types.vue";
import Info from "./Info.vue";
import Feature from "./Feature.vue";
import Process from "./Process.vue";
import Bottom from "./Bottom.vue";
</script>
<style lang="scss">
.container {
  height: 100vh;
  background: black;
}
</style>
