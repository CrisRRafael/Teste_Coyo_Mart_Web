<template>
  <div class="card">
    <div class="products">
      <h1>{{ textCard }}</h1>
      <h2>{{ valueCard }}</h2>
    </div>
    <img :src="image" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["textCard", "valueCard", "image", "alt"],
};
</script>

<style scoped>
.card {
  align-items: center;
  display: flex;
  justify-content: space-around;

  width: 25rem;
  height: 10rem;

  border-radius: 8px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);

  margin-left: 16rem;
  margin-top: 2rem;
}
h1 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 400;
}

h2 {
  margin: 0;
  font-size: 4.063rem;
  font-weight: 700;
}
img {
  width: 3.875rem;
  height: 3.875rem;

  align-self: start;
  margin-top: 2rem;
}
</style>
