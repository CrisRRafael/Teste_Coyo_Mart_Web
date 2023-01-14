<template>
  <TitlePage :title="titlePage" />
</template>

<script>
import TitlePage from "../components/TitlePage.vue";
export default {
  components: {
    TitlePage,
  },
  data() {
    return {
      titlePage: "Categorias",
    };
  },
};
</script>
