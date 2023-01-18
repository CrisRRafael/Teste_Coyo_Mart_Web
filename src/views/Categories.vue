<template>
  <TitlePage :title="titlePage" />
  <CategoryList />
</template>

<script>
import CategoryList from "../components/CategoryList.vue";
import TitlePage from "../components/TitlePage.vue";
export default {
  components: {
    TitlePage,
    CategoryList,
  },
  data() {
    return {
      titlePage: "Categorias",
    };
  },
};
</script>
