<template class="container">
  <div class="home">
    <TitlePage :title="titlePage" />
    <div class="content">
      <Card
        class="card"
        :textCard="text"
        :valueCard="value"
        :image="image_src"
        :alt="image_name"
      />
      <Card
        class="card_product"
        :textCard="text_product"
        :valueCard="value_product"
        :image="image_src_product"
        :alt="image_name_product"
      />
    </div>

    <ProductList :textList="text_list" />
  </div>
</template>

<script>
import axios from "axios";
import ImagemClient from "../assets/clients.png";
import ImagemProduct from "../assets/products.png";

import Card from "../components/Card.vue";
import TitlePage from "../components/TitlePage.vue";

import ProductList from "../components/ProductsList.vue";

export default {
  components: {
    TitlePage,
    Card,
    ProductList,
  },
  data() {
    return {
      titlePage: "Dashboard",
      text: "Número de Clientes",
      value: "",
      image_src: ImagemClient,
      image_name: "Clientes",
      text_product: "Produtos Cadastrados",
      value_product: "",
      image_src_product: ImagemProduct,
      image_name_product: "Produtos",
      text_list: "Listagem de Produtos em Destaque",
    };
  },
  async mounted() {
    const req_products = await axios.get("http://localhost:3000/products/");
    const value_product = req_products.data.length;
    this.value_product = value_product;
  },
};
</script>

<style scoped>
.card_product {
  display: flex;
  margin-top: -10rem;
  margin-left: 42rem;
}

h1 {
  margin-left: 60rem;
}

@media only screen and (max-width: 750px) {
  .container {
    align-items: center;
    justify-content: center;
    place-content: center;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0;
  }
  .card_product {
    margin-top: 0;
  }
  .card {
    margin-top: 1rem;
    margin-left: 0;
  }
}
</style>
