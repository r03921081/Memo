<template>
  <form @submit="changeOrders" class="order">
    <div v-for="(col) in columns" :key="col.title" class="order__col">
      <input
        v-if="col.tag === 'input'"
        v-model="item[col.title]"
        :type="col.options.type"
        :disabled="!item.isEdit"
        :required="col.required || false"
        :onkeyup="col.options.onkeyup || null"
        class="order__input"
        :class="{ 'order__input-enabled': item.isEdit }"
      />
      <textarea
        v-if="col.tag === 'textarea'"
        v-model="item.description"
        :disabled="!item.isEdit"
        :required="col.required || false"
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
    changeOrders(e) {
      e.preventDefault();
      if (this.item.isEdit) {
        this.saveOrders(this.item);
      } else {
        this.editOrders(this.item);
      }
    },
    editOrders(item) {
      item.isEdit = true;
    },
    saveOrders(item) {
      item.price = parseInt(item.price, 10);
      item.isEdit = false;
    },
    deleteOrder(item) {
      this.$emit("deleteOrder", item);
    }
  }
};
</script>
