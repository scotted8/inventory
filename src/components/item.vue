<template>
<div class="item">
  <div class="title">
    <h4> {{ name }} </h4>
  </div>
  <div class="info">
    <div class="description">
      <p>{{ description }}</p>
    </div>
    <div class="other-info">
      <p>Quantity: {{ quantity }}</p>
      <p>Purchase date: {{ purchaseDate }}</p>
      <p>Purchase amount: ${{ price }}</p>
    </div>
  </div>
  <router-link class="btn" :to="'/edit' + this.id">Edit</router-link>
</div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    name: String,
    quantity: Number,
    price: Number,
    purchaseDate: String,
    description: String,
    id: Number,
  },
}
</script>

<style scoped>
p {
  font-size: .8rem;
}
h4 {
  margin: 0;
  color: white;
}

.description {
  padding: 8px 10px;
  background-color: #e2e4e3;
}

.other-info {
  padding: 0px 10px 10px 10px;
}

.item {
  background-color: #d0d0d0;
  color: #1c1d1e;
  line-height: 1;
  margin-bottom: 10px;
  font-size: .9rem;
  border-radius: 12px;
  padding-bottom: 10px;
  border: 1px solid #b1c1b6;
}

.btn {
  border: none;
  display: block;
  width: 75%;
  height: 30px;
  margin: 0 auto;
  border-radius: 6px;
  background-color: #464444;
  font-size: .8rem;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn:hover {
  color: #0d9865;
  background-color: white;
  cursor: pointer;
}

.title {
  background-color: #0d9865;
  padding: 10px;
  border-radius: 8px 8px 0 0;
  display: flex;
}


</style>
