<script setup>
import TheLayout from "./components/TheLayout.vue";
import "./assets/base.css";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <template v-if="$route.name !== 'login'">
    <header class="header"><NavBar /></header>

    <TheLayout> <RouterView /> </TheLayout
  ></template>
  <template v-else>
    <RouterView />
  </template>
  <footer class="footer" :class="{ inside: $route.name === 'login' }">
    &copy;KyleLiu. All Rights Reserved
  </footer>
</template>

<style scoped>
.header {
  height: 80px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
}

.footer {
  text-align: center;
  padding: 38px 0;
  color: #828282;
}
.footer.inside {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
