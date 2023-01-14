<template>
  <TitlePage :title="titlePage" />
  <router-link id="new_product" to="/newproduct"
    >Inserir novo produto</router-link
  >
  <ProductsList :textList="text_list" />
</template>

<script>
import ProductsList from "@/components/ProductsList.vue";
import TitlePage from "../components/TitlePage.vue";
export default {
  components: {
    TitlePage,
    ProductsList,
  },
  data() {
    return {
      titlePage: "Produtos",
      text_list: "Listagem de Produtos",
    };
  },
};
</script>

<style scoped>
.buttonIsert {
  background: #214171;

  color: #fff;
  font-weight: 700;

  border: none;
  border-radius: 8px;
  position: absolute;

  width: 6.313rem;
  padding: 0.5rem;

  align-self: flex-end;

  left: 75rem;
  margin-top: 3rem;

  z-index: 10;

  cursor: pointer;
}
#new_product {
  background: #214171;
  color: #ffffff;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 0px 16px rgb(0 0 0 / 15%);
  margin-left: 72rem;
  margin-top: 3rem;
  position: absolute;
  text-decoration: none;
  width: 10rem;
  height: 1.5rem;
  text-align: center;
}
</style>
