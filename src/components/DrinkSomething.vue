<template>
  <table class="table">
    <!-- 表頭 -->
    <tr>
      <th class="table__th">
        Name
        <img
          @click="changeSortBy('name')"
          :src="sortBy.name === 'ASC' ? image.upArrow : image.downArrow"
          class="table__image table__arrow"
        >
      </th>
      <th class="table__th">
        Price
        <img
          @click="changeSortBy('price')"
          :src="sortBy.price === 'ASC' ? image.upArrow : image.downArrow"
          class="table__image table__arrow"
        >
      </th>
      <th class="table__th">Description</th>
      <th class="table__th table__th--sm"></th>
      <th class="table__th table__th--sm"></th>
    </tr>
    <!-- 表內容 -->
    <tr v-for="(item) in drinks" :key="item.id" v-bind:id="item.id">
      <td class="table__td">
        <input v-model="item.name" type="text" disabled class="table__input">
      </td>
      <td class="table__td">
        <input v-model="item.price" type="number" min="0" disabled onkeyup="value=value.replace(/^[^\d]+/g,'')" class="table__input">
      </td>
      <td class="table__td">
        <textarea v-model="item.description" disabled class="table__textarea"></textarea>
      </td>
      <td class="table__td table__td--sm">
        <img :src="item.isEdit ? image.save : image.edit" @click="changeDrinks(item)" class="table__image">
      </td>
      <td class="table__td table__td--sm">
        <img :src="image.delete" @click="deleteDrinks(item)" class="table__image">
      </td>
    </tr>
    <!-- 新增功能 -->
    <tr>
      <td class="table__td">
        <input v-model="name" type="text" class="table__input table__input-enabled">
      </td>
      <td class="table__td">
        <input v-model="price" type="number" required min="0" onkeyup="value=value.replace(/^[^\d]+/g,'')" class="table__input table__input-enabled">
      </td>
      <td class="table__td">
        <textarea v-model="description" class="table__textarea table__textarea-enabled"></textarea>
      </td>
      <td class="table__td table__td--sm">
        <img :src="image.add" @click="addDrinks()" class="table__image">
      </td>
    </tr>
  </table>
</template>

<script>
import Validation from "../utils/validation";

export default {
  name: "DrinkSomething",
  data() {
    return {
      id: 1,
      name: "",
      price: "",
      description: "",
      sortBy: {
        name: "ASC",
        price: "ASC",
        description: "ASC"
      },
      drinks: [],
      image: {
        upArrow: "https://img.icons8.com/ios/18/000000/up.png",
        downArrow: "https://img.icons8.com/ios/18/000000/down.png",
        edit: "https://img.icons8.com/ios/24/000000/edit.png",
        save: "https://img.icons8.com/ios/24/000000/ok.png",
        delete: "https://img.icons8.com/ios/24/000000/delete-sign.png",
        add: "https://img.icons8.com/ios/24/000000/add.png"
      }
    };
  },
  methods: {
    changeSortBy(key) {
      const sortValue = this.sortBy[key];
      if (sortValue === "ASC") {
        this.sortBy[key] = "DESC";
        this.drinks.sort((a, b) => (a[key] < b[key] ? 1 : -1));
      } else {
        this.sortBy[key] = "ASC";
        this.drinks.sort((a, b) => (a[key] > b[key] ? 1 : -1));
      }
    },
    addDrinks() {
      if (!Validation.IsNotEmpty(this.name)) {
        alert('Please enter your name.')
      } else if (!Validation.IsPrice(this.price)) {
        alert('Please enter the price.')
      } else {
        this.drinks.push({
          id: ++this.id,
          name: this.name,
          price: parseInt(this.price, 10),
          description: this.description,
          isEdit: false
        });
        this.clear();
      }
    },
    changeDrinks(item) {
      if (item.isEdit) {
        this.saveDrinks(item);
      } else {
        this.editDrinks(item);
      }
    },
    editDrinks(item) {
      const td = document.getElementById(item.id).children;
      for (const i in td) {
        if (td[i].children) {
          td[i].children[0].classList.add('table__input-enabled');
          td[i].children[0].disabled = false;
        }
      }
      item.isEdit = true;
    },
    saveDrinks(item) {
      if (!Validation.IsNotEmpty(item.name)) {
        alert('Please enter your name.')
      } else if (!Validation.IsPrice(item.price)) {
        alert('Please enter the price.')
      } else {
        item.price = parseInt(item.price, 10)
        item.isEdit = false;

        const td = document.getElementById(item.id).children;
        for (const i in td) {
          if (td[i].children) {
            td[i].children[0].classList.remove('table__input-enabled');
            td[i].children[0].disabled = true;
          }
        }
      }
    },
    deleteDrinks(item) {
      this.drinks = this.drinks.filter(obj => obj.id !== item.id);
    },
    clear() {
      this.name = "";
      this.price = "";
      this.description = "";
    }
  }
};
</script>

<style scoped>
.table {
  border-collapse: collapse;
  width: 62em; 
  margin: 0 auto;
  word-wrap: break-word;
  border-spacing: 10px;
}
.table__th {
  vertical-align: center;
  width: 16em;
}
.table__th--sm {
  width: 7em;
}
.table__td {
  padding: 5px;
  vertical-align: top;
}
.table__td--sm {
  vertical-align: middle;
}
.table__input {
  width: 90%;
  height: 2.2em;
}
.table__input-enabled {
  background-color: white;
}
.table__textarea {
  width: 90%;
  min-height: 2.2em;
  resize: vertical;
}
.table__textarea-enabled {
  background-color: white;
}
.table__image {
  cursor: pointer;
}
.table__arrow {
  float: right;
}

</style>
