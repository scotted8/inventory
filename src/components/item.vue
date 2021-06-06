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
  <div class='buttons'>
    <button @click="deleteItem" class='btn btn-red'>Delete</button>
    <router-link class="btn" :to="'/edit' + this.id">Edit</router-link>
  </div>
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
  methods: {
    deleteItem: function() {
      this.$swal({
        title: 'Are you sure?',
        text: 'Deleting the ' + this.name.toLowerCase() + ' cannot be undone',
        heightAuto: false,
        width: '300px',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Delete'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$root.$data.items.splice(this.id, 1);
          for (let i = 0; i < this.$root.$data.items.length; i++){
            this.$root.$data.items[i].id = i;
          }
          this.$swal({
            title: this.name,
            text: 'This item has been deleted',
            heightAuto: false,
            width: '300px',
          })

        }
      })
    }
  }
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

.buttons {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.btn {
  border: none;
  height: 40px;
  border-radius: 8px;
  background-color: #464444;
  font-size: .8rem;
  color: white;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn-red {
  background-color: white;
  color: #1c1d1e;
}

.btn:hover {
  background-color: #7d7d7d;
  cursor: pointer;
}

.btn-red:hover {
  background-color: #c12121;
  color: white;
  cursor: pointer;
}

.title {
  background-color: #0d9865;
  padding: 10px;
  border-radius: 8px 8px 0 0;
  display: flex;
}

</style>
