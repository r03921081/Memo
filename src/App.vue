<template>
  <div id="app">
    <h1>BuyDrinks</h1>
    <BuyDrinks />
    <h1>BuyCar</h1>
    <BuyCar />
  </div>
</template>

<script>
import BuyDrinks from "./components/BuyDrinks/index.vue";
import BuyCar from "./components/BuyCar/index.vue";

export default {
  name: "App",
  components: {
    BuyDrinks,
    BuyCar
  }
};
</script>
