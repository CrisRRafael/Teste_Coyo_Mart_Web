<template>
  <div class="container">
    <div class="header">
      <img src="../assets/logo.png" alt="Logo Coyo" />
      <img class="mart" src="../assets/logop.png" alt="Logo Mart" />
    </div>
    <div class="content">
      <router-link class="button" to="/">Home</router-link>
      <router-link class="button" to="/categories">Categorias</router-link>
      <router-link class="button" to="/products">Produtos</router-link>
      <router-link class="button" to="/clients">Clientes</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
.container {
  margin: 0;
  background: #214171;

  width: 15rem;
  height: 100vh;

  justify-content: center;

  position: fixed;
}

.header {
  padding: 1.25rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.mart {
  margin-top: 0.25rem;
}
.content {
  margin-top: 0.5rem;

  display: flex;
  flex-direction: column;
  text-align: center;
}

.button {
  width: 15rem;
  height: 2rem;

  background: rgba(0, 0, 0, 0.21);

  text-decoration: none;
  cursor: pointer;
  border: none;

  gap: 0.62rem;

  margin-top: 0.125rem;

  color: #ffffff;
  font-weight: 400;
}

.button:hover {
  background: #061a36;
}
</style>
