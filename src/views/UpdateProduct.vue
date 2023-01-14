<template>
  <TitlePage :title="titlePage" />
  <UpdateProductForm />
</template>

<script>
import TitlePage from "../components/TitlePage.vue";
import UpdateProductForm from "../components/UpdateProductForm.vue";
export default {
  components: {
    TitlePage,
    UpdateProductForm,
  },
  data() {
    return {
      titlePage: "Editar Produtos",
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
