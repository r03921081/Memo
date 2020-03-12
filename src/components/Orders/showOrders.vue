<template>
  <form @submit="changeDrinks" class="order">
    <div v-for="(col) in columns" :key="col.title" class="order__col">
      <input
        v-if="col.tag === 'input'"
        v-model="item[col.title]"
        :type="col.options.type"
        :disabled="!item.isEdit"
        :required="col.required"
        :onkeyup="col.options.onkeyup || null"
        class="order__input"
        :class="{ 'order__input-enabled': item.isEdit }"
      />
      <textarea
        v-if="col.tag === 'textarea'"
        v-model="item.description"
        :disabled="!item.isEdit"
        :required="col.required"
        class="order__input order__textarea"
        :class="{ 'order__input-enabled': item.isEdit }"
      ></textarea>
    </div>
    <div class="order__col--sm">
      <input
        type="image"
        :src="item.isEdit ? image.save : image.edit"
        alt="submit"
        class="order__btn"
      />
    </div>
    <div class="order__col--sm">
      <img :src="image.delete" @click="deleteOrder(item)" class="order__image" />
    </div>
  </form>
</template>

<script>
export default {
  name: "ShowOrders",
  props: ["columns", "item"],
  data() {
    return {
      image: {
        edit: "https://img.icons8.com/ios/24/000000/edit.png",
        save: "https://img.icons8.com/ios/24/000000/ok.png",
        delete: "https://img.icons8.com/ios/24/000000/delete-sign.png"
      }
    };
  },
  methods: {
    changeDrinks(e) {
      e.preventDefault();
      if (this.item.isEdit) {
        this.saveDrinks(this.item);
      } else {
        this.editDrinks(this.item);
      }
    },
    editDrinks(item) {
      item.isEdit = true;
    },
    saveDrinks(item) {
      item.price = parseInt(item.price, 10);
      item.isEdit = false;
    },
    deleteOrder(item) {
      this.$emit("deleteOrder", item);
    }
  }
};
</script>
