<template>
  <TitlePage :title="titlePage" />
  <ClientTable />
</template>

<script>
import ClientTable from "../components/ClientTable.vue";
import TitlePage from "../components/TitlePage.vue";
export default {
  components: {
    TitlePage,
    ClientTable,
  },
  data() {
    return {
      titlePage: "Clientes",
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
