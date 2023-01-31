<template>
  <div class="container">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "TitlePage",
  props: ["title"],
};
</script>

<style scoped>
.container {
  display: flex;
  height: 3.5rem;
  background: #d9d9d9;
  margin-left: 16rem;
  align-items: center;
}
h1 {
  font-size: 1.563rem;
  color: #ffffff;

  margin-left: 1rem;
  font-weight: 400;
}

@media only screen and (max-width: 800px) {
  .container {
    margin-left: 0;
    margin-top: 4rem;
    width: 100vw;
  }
}
</style>

>
