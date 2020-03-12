<template>
  <form @submit="addOrder" class="order">
    <div v-for="(col) in columns" :key="col.title">
      <div class="order__col">
        <input
          v-if="col.tag === 'input'"
          v-model="col.default"
          :required="col.required"
          :type="col.options.type"
          :onkeyup="col.options.onkeyup || null"
          class="order__input"
        />
        <textarea
          v-if="col.tag === 'textarea'"
          v-model="col.default"
          class="order__input order__textarea"
        ></textarea>
      </div>
    </div>
    <div class="order__col--sm">
      <input type="image" :src="image.add" alt="submit" class="order__btn" />
    </div>
    <div class="order__col--sm"></div>
  </form>
</template>

<script>
export default {
  name: "AddOrder",
  props: ["columns"],
  data() {
    return {
      id: 1,
      image: { add: "https://img.icons8.com/ios/24/000000/add.png" }
    };
  },
  methods: {
    addOrder(e) {
      e.preventDefault();

      const item = {
        id: ++this.id,
        isEdit: false
      };
      this.columns.forEach(x => {
        item[x.title] = x.default;
      });
      this.$emit("addOrder", item);
      this.clear();
    },
    clear() {
      this.columns.forEach(x => {
        x.default = "";
      });
    }
  }
};
</script>
