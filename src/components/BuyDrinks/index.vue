<template>
  <OrderList :columns="columns"></OrderList>
</template>

<script>
import OrderList from "../Orders";

export default {
  name: "BuyDrinks",
  components: {
    OrderList
  },
  data() {
    return {
      columns: [
        {
          title: "NAME",
          default: "",
          tag: "input",
          sort: true,
          required: true,
          options: {
            type: "text",
            sortBy: "ASC"
          }
        },
        {
          title: "PRICE",
          default: "",
          tag: "input",
          sort: true,
          required: true,
          options: {
            type: "number",
            onkeyup: "value=value.replace(/^[^\\d]+/g,'')",
            sortBy: "ASC"
          }
        },
        {
          title: "DESCRIPTION",
          default: "",
          tag: "textarea",
          sort: false,
          required: false,
          options: {}
        }
      ]
    };
  }
};
</script>
