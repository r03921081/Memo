<template>
  <OrderList :columns="columns"></OrderList>
</template>

<script>
import OrderList from "../Orders";

export default {
  name: "BuyCar",
  components: {
    OrderList
  },
  data() {
    return {
      columns: [
        {
          title: "BRAND",
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
          title: "MODEL",
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
          title: "FUEL CONSUMPTION",
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
          title: "LENGTH",
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
          title: "WIDTH",
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
          title: "HEIGHT",
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
          title: "ENGINE TYPE",
          default: "",
          tag: "textarea",
          sort: false,
          required: false,
          options: {}
        },
        {
          title: "ENGINE DISPLACEMENT",
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
          title: "HORSEPOWER",
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
          title: "TORQUE",
          default: "",
          tag: "input",
          sort: true,
          required: true,
          options: {
            type: "text",
            sortBy: "ASC"
          }
        }
      ]
    };
  }
};
</script>
