<template>
  <TitlePage :title="titlePage" />
  <NewProductForm />
</template>

<script>
import NewProductForm from "../components/NewProductForm.vue";
import TitlePage from "../components/TitlePage.vue";
export default {
  components: {
    TitlePage,
    NewProductForm,
  },
  data() {
    return {
      titlePage: "Produtos",
    };
  },
};
</script>
<style scoped>
.main {
  font-size: 72px;
  margin-left: 16rem;
}
</style>
