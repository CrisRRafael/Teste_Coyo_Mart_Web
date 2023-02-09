<template>
  <div class="container">
    <div class="header">
      <div class="logo">
        <img src="../assets/logo.png" alt="Logo Coyo" />
        <img class="mart" src="../assets/logop.png" alt="Logo Mart" />
      </div>
      <MenuIcon
        @click="toggleMobileNav"
        v-show="this.mobile"
        class="icon-mobile"
        :class="{ 'icon-active': mobileNav }"
      />
    </div>

    <!-- <div class="header">
    <img class="icon" src="../assets/logo.png" alt="Logo Coyo" />
    <img class="icon" src="../assets/logop.png" alt="Logo Mart" />
  </div> -->

    <div class="navbar-not-mobile" v-show="!mobile">
      <router-link class="button" to="/">Home</router-link>
      <router-link class="button" to="/categories">Categorias</router-link>
      <router-link class="button" to="/products">Produtos</router-link>
      <router-link class="button" to="/clients">Clientes</router-link>
    </div>

    <div class="navbar-mobile" v-show="mobile">
      <transition>
        <div v-show="mobileNav" class="dropdown-nav">
          <router-link class="button-nav" to="/">Home</router-link>
          <router-link class="button-nav" to="/categories"
            >Categorias</router-link
          >
          <router-link class="button-nav" to="/products">Produtos</router-link>
          <router-link class="button-nav" to="/clients">Clientes</router-link>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";

export default {
  name: "SideBar",
  components: {
    MenuIcon,
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 750) {
        this.mobile = true;

        console.log(this.mobile);

        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },

  mounted() {
    window.addEventListener("resize", this.checkScreen);
    console.log(this.mobile);
  },
};
</script>

<style scoped>
.container {
  background: #214171;
  position: fixed;
}
.navbar-not-mobile {
  display: flex;
  flex-direction: column;
  margin: 0;
  background: #214171;
  text-align: center;

  width: 100%;

  width: 15rem;
  height: 100vh;

  position: fixed;
}
.content {
  margin: 0;
  background: #214171;

  width: 15rem;

  position: fixed;
}
.header {
  background: #214171;

  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 12.5rem;
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

.button,
.button-nav {
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

.icon-mobile {
  display: flex;
  color: #f2f2f2;
  right: 40px;
  height: 100%;
  cursor: pointer;
  transition: 0.8s ease all;
  position: relative;
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  background: #214171;
  width: 15rem;
  /* position: fixed; */
  text-align: center;
}

.navbar-mobile {
  background: #214171;
  margin-top: 0;
  width: 100%;
}

.icon-active {
  color: #1c1c1c;
}

.button-nav:hover {
  text-decoration: underline;
}

@media only screen and (max-width: 800px) {
  .header {
    background: #214171;
    width: 100vw;
    padding: 1rem;
    height: 1rem;
    justify-content: space-between;
  }
}
</style>
