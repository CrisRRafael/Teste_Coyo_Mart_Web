<template>
  <div class="container">
    <h2>{{ textList }}</h2>
    <input type="text" placeholder="Procurar" />

    <div id="product-table">
      <div id="product-table-heading">
        <div class="product-id"></div>
        <div>Imagem:</div>
        <div>Descrição:</div>
        <div>Categoria:</div>
        <div>Un:</div>
        <div>Estoque:</div>
        <div>Valor:</div>
      </div>

      <div id="product-table-rows">
        <div
          class="product-table-row"
          v-for="product of products"
          :key="product.id"
        >
          <div class="product-number" @click="getId(product.id)">
            {{ product.id }}
          </div>
          <div>{{}}</div>
          <div>{{ product.description }}</div>
          <div>{{ product.category }}</div>
          <div>{{ product.unit }}</div>
          <div>{{ product.stock }}</div>
          <div>{{ product.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductsList",
  props: ["textList"],
  data() {
    return {
      products: null,
      products_id: null,
      category_id: null,
    };
  },
  methods: {
    getId(id) {
      this.$router.push(`/updateproduct/${id}`);
    },
  },

  async mounted() {
    const response = await axios.get("http://localhost:3000/products/");
    const products = response.data;
    this.products = products;
  },
};
</script>

<style scoped>
.container {
  height: auto;
  width: 68rem;

  border-radius: 8px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);

  margin-left: 16rem;
  margin-top: 2rem;
}
h2 {
  margin: 0;
  padding: 2rem 0 0 2rem;
  font-weight: 400;
  font-size: 1.25;
}

input {
  font-size: 1rem;
  box-sizing: border-box;

  position: absolute;
  width: 381px;
  height: 40px;

  background: #ffffff;
  border: 1px solid #d9d9d9;

  margin-left: 43.5rem;
  margin-top: 0.5rem;
}

#product-table {
  max-width: 65rem;

  margin: 0 auto;
  padding: 0.5rem;
}

#product-table-heading,
#product-table-rows,
.product-table-row {
  display: flex;
  flex-wrap: wrap;
}

#product-table-heading {
  font-weight: 400;
  font-size: 1rem;

  background: #d9d9d9;

  margin-top: 3rem;
}
#product-table-heading div,
.product-table-row div {
  height: 2.2rem;
  width: 13.5%;
  margin: auto;
}

.product-table-row {
  width: 100%;

  display: flex;
  font-weight: 400;
  font-size: 0.8rem;

  align-items: center;

  border-bottom: 1px solid #d9d9d9;
  border-radius: 8px;

  margin-top: 2px;
}

#product-table-heading .product-id,
.product-table-row .product-number {
  width: 8%;
}
.product-number {
  cursor: pointer;
}
</style>
