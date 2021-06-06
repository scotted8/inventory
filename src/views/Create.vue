<template>
  <div class="create">
    <h2>Add a new item for your home inventory</h2>
    <form id="inventory-item">
      <label for="itemName">Title:</label><br>
      <input type="text" id="itemName" name="itemName" v-model="name"><br>
      <label for="description">Description: </label><br>
      <textarea id="description" v-model="description"></textarea>
      <label for="quantity">Quantity:</label><br>
      <input type="text" id="quantity" name="quantity" v-model.number="quantity">
      <label for="purchased">Purchase date:</label><br>
      <input type="text" id="purchaseDate" name="purchaseDate" v-model="purchaseDate">
      <label for="cost"> Purchase amount: </label><br>
      <input type="text" id="cost" name="cost" v-model.number="price">
    </form>
    <div class="buttons">
      <router-link :to="'/'" class="btn">Back</router-link>
      <input type="button" class="btn" @click='addItem' value="Add item">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Create',
  data() {
    return {
      id: 0,
      name: '',
      quantity: null,
      description: '',
      price: 9.99,
      purchaseDate: ''
    }
  },
  methods: {
    addItem: function() {
      let items = this.$root.$data.items
      let newItem = {}
      newItem.id = items.length;
      newItem.name = this.name;
      newItem.quantity = this.quantity;
      newItem.description = this.description;
      newItem.price = this.price;
      newItem.purchaseDate = this.purchaseDate;
      this.$root.$data.items.push(newItem);
      console.log(this.$root.$data.items);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.create {
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
