<template>
  <div id="item-page">
    <h2>Edit your item</h2>
    <form id="edit-item">
      <label for="name">Title:</label><br>
      <input type="text" id="name" name="itemName" v-model="name"><br>
      <label for="editDescription">Description: </label><br>
      <textarea id="editDescription" v-model="description"></textarea>
      <label for="editQuantity">Quantity:</label><br>
      <input type="text" id="editQuantity" name="quantity" v-model.number="quantity">
      <label for="editPurchased">Purchase date:</label><br>
      <input type="text" id="editPurchased" name="purchaseDate" v-model="purchaseDate">
      <label for="editCost"> Purchase amount: </label><br>
      <input type="number" id="editCost" name="cost" v-model.number="price">
    </form>
    <div class="buttons">
      <router-link :to="'/'" class="btn">Back</router-link>
      <input type="button" class="btn" @click='updateItem' value="Save">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Edit',
  data() {
    return {
      id: 0,
      name: '',
      quantity: 0,
      description: '',
      price: 0,
      purchaseDate: ''
    }
  },
  created() {
    let currentItem = this.$root.$data.items[this.$route.params.id];
    this.id = currentItem.id;
    this.name = currentItem.name;
    this.quantity = currentItem.quantity;
    this.description = currentItem.description;
    this.price = currentItem.price;
    this.purchaseDate = currentItem.purchaseDate;
  },
  methods: {
    updateItem: function() {
      let currentItem = this.$root.$data.items[this.$route.params.id]
      currentItem.id = this.id;
      currentItem.name = this.name;
      currentItem.description = this.description;
      currentItem.quantity = this.quantity;
      currentItem.price = this.price;
      currentItem.purchaseDate = this.purchaseDate;
    }
  }
}

</script>

<style scoped>
h2 {
  text-align: center;
}
input {
  width: calc(100% - 10px);
  margin-bottom: 10px;
  height: 30px;
  font-size: 14pt;
}

#item-page {
  padding: 10px;
  max-width: 400px;
  margin: 0 auto;
}

.buttons {
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.btn {
  border: none;
  height: 50px;
  border-radius: 8px;
  background-color: #464444;
  font-size: .8rem;
  color: white;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn:hover {
  cursor: pointer;
  color: #0d9865;
  background-color: #d0d0d0;
}

textarea {
  width: calc(100% - 10px);
  max-width: calc(100% - 10px);
  height: 60px;
  min-width: calc(100% - 10px);
}
</style>
