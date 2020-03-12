<template>
  <div class="layout">
    <!-- 表頭 -->
    <div class="order">
      <div v-for="(col) in columns" :key="col.title">
        <div class="order__col">
          {{ col.title }}
          <img
            v-if="col.sort"
            @click="changeSortBy(col.title)"
            :src="col.options.sortBy === 'ASC' ? image.upArrow : image.downArrow"
            class="order__image layout__arrow"
          />
        </div>
      </div>
      <div class="order__col--sm"></div>
      <div class="order__col--sm"></div>
    </div>
    <!-- 新增訂單 -->
    <AddOrder :columns="columns" v-on:addOrder="addOrder"></AddOrder>
    <!-- 訂單 -->
    <div v-for="(item) in orders" :key="item.id" v-bind:id="item.id">
      <ShowOrders :columns="columns" :item="item" v-on:deleteOrder="deleteOrder"></ShowOrders>
    </div>
  </div>
</template>

<script>
import AddOrder from "./addOrder";
import ShowOrders from "./showOrders";

export default {
  name: "OrderList",
  components: {
    AddOrder,
    ShowOrders
  },
  props: ["columns"],
  data() {
    return {
      orders: [],
      image: {
        upArrow: "https://img.icons8.com/ios/18/000000/up.png",
        downArrow: "https://img.icons8.com/ios/18/000000/down.png"
      }
    };
  },
  methods: {
    changeSortBy(title) {
      const sortValue = this.columns
        .filter(obj => obj.title === title)
        .map(x => x.options.sortBy)[0];
      if (sortValue === "ASC") {
        this.columns.filter(obj => obj.title === title)[0]["options"][
          "sortBy"
        ] = "DESC";
        this.orders.sort((a, b) => (a[title] < b[title] ? 1 : -1));
      } else {
        this.columns.filter(obj => obj.title === title)[0]["options"][
          "sortBy"
        ] = "ASC";
        this.orders.sort((a, b) => (a[title] > b[title] ? 1 : -1));
      }
    },
    addOrder(item) {
      this.orders.push(item);
    },
    deleteOrder(item) {
      this.orders = this.orders.filter(obj => obj.id !== item.id);
    }
  }
};
</script>

<style scoped>
.layout {
  margin: 1em;
}
.layout__arrow {
  float: right;
}
</style>