# Order Components
- Vue toy project.
- Provides components for creating and listing orders.

## Basic funtions
Currently you have some features to use.
1. Two labels can be selected: input, textarea
2. Sorting columns
3. Add, edit and delete orders.
4. Column validation.

## How to use
1. Define your columns
```
{
        title: "",
        default: "",
        tag: input/ textarea,
        sort: true/ false,
        required: true/ false,
        options: {
        type: text/ number,
        sortBy: ASC/ DESC,
        onkeyup: ""
        }
}
```
2. Create your main view.
``` Vue
<template>
  <OrderList :columns="columns"></OrderList>
</template>

<script>
import OrderList from "../Orders";

export default {
  name: "<yourName>",
  components: {
    OrderList
  },
  data() {
    return {
      columns: [
        {
          title: "<yourColumnName>",
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
```

## Notes
For example:  
https://github.com/r03921081/Memo/blob/master/src/components/BuyDrinks/index.vue
