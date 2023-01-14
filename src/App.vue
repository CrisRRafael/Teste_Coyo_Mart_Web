<template>
  <Sidebar id="sidebar" />
  <router-view />
</template>

<script>
import Sidebar from "./components/SideBar.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>

<style>
body {
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  width: 100vw;
  height: 100vh;
  margin: 0;
}
#sidebar {
  height: 100%;
}
</style>
