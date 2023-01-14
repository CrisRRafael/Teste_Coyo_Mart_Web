<template>
  <form id="product-form" @submit.prevent="createProduct">
    <span>Editar Produto</span>
    <div class="input-container">
      <label for="description">Descrição </label>
      <input
        class="text"
        type="text"
        id="description"
        name="description"
        placeholder="Informe a descrição do produto"
        v-model="description"
      />
      <p
        class="error"
        v-for="error of v$.description.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </p>
    </div>
    <div class="input-container">
      <label for="category">Categoria </label>
      <select name="category" id="category" class="text" v-model="category">
        <option value="Categoria A">Categoria A</option>
        <option value="Categoria B">Categoria B</option>
        <option value="Categoria C">Categoria C</option>
      </select>

      <p class="error" v-for="error of v$.category.$errors" :key="error.$uid">
        {{ error.$message }}
      </p>
    </div>
    <div class="input-container">
      <label for="un">Unidade de Medida </label>
      <select name="un" id="un" class="text" v-model="un">
        <option value="Unidade">Unidade</option>
        <option value="Metro">Metro</option>
        <option value="kilo">Kilo</option>
      </select>
      <p class="error" v-for="error of v$.un.$errors" :key="error.$uid">
        {{ error.$message }}
      </p>
    </div>
    <div class="input-container">
      <label for="storage">Estoque </label>
      <input
        class="text"
        type="text"
        id="storage"
        name="storage"
        v-model="storage"
        placeholder="Informe a quantidade em estoque"
      />

      <p class="error" v-for="error of v$.storage.$errors" :key="error.$uid">
        {{ error.$message }}
      </p>
    </div>
    <div class="input-container">
      <label for="price">Valor </label>
      <input
        class="text"
        type="text"
        id="price"
        name="price"
        v-model="price"
        placeholder="Informe o valor do produto"
      />
      <p class="error" v-for="error of v$.price.$errors" :key="error.$uid">
        {{ error.$message }}
      </p>
    </div>
    <div class="check">
      <input
        class="checkbox"
        type="checkbox"
        name="destaque"
        v-model="destaque"
        value="destaque"
      />
      <label for="destaque">Em Destaque?</label>
    </div>
    <div class="buttons">
      <button
        class="submit-btn"
        value="Salvar"
        @click="updateProduct($event, $route.params.id)"
      >
        Salvar
      </button>
      <button
        class="delete-btn"
        value="Excluir"
        @click="deleteProduct(this.$route.params.id)"
      >
        Excluir
      </button>
    </div>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { helpers, numeric, required } from "@vuelidate/validators";

export default {
  name: "NewProductForm",

  data() {
    return {
      v$: useVuelidate(),
      description: null,
      category: null,
      un: null,
      storage: null,
      price: null,
      destaque: null,
    };
  },
  validations() {
    return {
      description: {
        required: helpers.withMessage("Descrição é obrigatório", required),
        $autoDirty: true,
        $invalid: true,
      },
      category: {
        required: helpers.withMessage("Categoria é obrigatório", required),
        $autoDirty: true,
      },
      un: {
        required: helpers.withMessage(
          "Unidade de Medida é obrigatório",
          required
        ),
        $autoDirty: true,
      },
      storage: {
        required: helpers.withMessage(
          "Quantidade em estoque é obrigatório",
          required
        ),
        numeric: helpers.withMessage(
          "Um valor numérico é obrigatório",
          numeric
        ),
        $autoDirty: true,
      },
      price: {
        required: helpers.withMessage("Preço é obrigatório", required),
        numeric: helpers.withMessage(
          "Um valor numérico é obrigatório",
          numeric
        ),
        $autoDirty: true,
      },
    };
  },

  methods: {
    async deleteProduct(id) {
      const reqD = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
      const resDelete = await reqD.json();
      this.$router.go();
      alert("Cadastro excluído com sucesso");
    },

    async updateProduct(event, id) {
      const data = {
        description: this.description,
        category: this.category,
        un: this.un,
        storage: this.storage,
        price: this.price,
        destaque: this.destaque,
      };

      const dataJson = JSON.stringify(data);
      const req = await fetch(`http://localhost:3000/products/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      alert("Dados atualizados com sucesso");

      const res = await req.json();
    },
  },

  submit(e) {
    this.$v.$touch();
  },
  async mounted() {
    const id = this.$route.params.id;
    console.log(id);

    if (id != undefined) {
      const req = await fetch("http://localhost:3000/products");
      const data = await req.json();
      const product = data.filter((product) => product.id == id);

      this.description = product[0].description;
      this.category = product[0].category;
      this.un = product[0].un;
      this.storage = product[0].storage;
      this.price = product[0].price;
      this.destaque = product[0].destaque;
    }
  },
};
</script>

<style scoped>
span {
  font-weight: 400;
  font-size: 1.25rem;
}
#product-form {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;

  position: absolute;
  width: 800px;
  height: auto;
  left: 256px;
  top: 71px;

  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}
.input-container {
  display: flex;
  flex-direction: column;
}
.text {
  background: #f5f5f5;
  border: 1px solid #d9d9d9;
  color: #7b7b7b;
  width: 320px;
  height: 1.8rem;
  padding: 0;
  font-size: 0.9rem;
  font-weight: 400;
  padding: 0 0.5rem;
}
.input-container label {
  font-size: 0.8rem;
  color: #000000;
  padding: 0.2rem;
}
#description {
  width: 680px;
}

.ckeck {
  flex: row;
}
.checkbox {
  min-width: 23px;
  min-height: 23px;
  margin-right: 5px;
}
.submit-btn {
  width: 101px;
  height: 31px;

  background: #214171;
  border-radius: 8px;
  border: none;

  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
}

.delete-btn {
  width: 101px;
  height: 31px;

  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #214171;

  color: #214171;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  text-align: center;

  margin-left: 1rem;
}

.submit-btn:hover .delete-btn:hover {
  background: #061a36;
}
.buttons {
  flex-direction: row;
  justify-content: space-between;
}

p {
  font-size: 0.8rem;
  margin: 3px;
  color: red;
}
</style>
