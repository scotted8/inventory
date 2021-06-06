<template>
  <div class="home">
    <div class="items-list">
      <div v-for="item in items" :key="item.id" class="item">
        <Item v-bind="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Item from '@/components/item.vue'

export default {
  name: 'Home',
  components: {
    Item
  },
  computed: {
    items: function() {
      return this.$root.$data.items;
    },
    totalItems: function () {
      return this.$root.$data.items.length
    },
    totalCost: function() {
      let totalCost = 0
      let items = this.$root.$data.items
      for (let i = 0; i < this.totalItems; i++){
        totalCost += items[i].price
      }
      return totalCost.toFixed(2)
    }
  }
}

</script>

<style scoped>
h5 {
  margin: 0;
}
.home {
  padding: 10px;
}

.items-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 10px;
}

@media screen and (max-width: 1440px) {
  .items-list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (max-width: 900px) {
  .items-list {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 600px) {
  .items-list {
    grid-template-columns: 1fr;
  }
}

</style>
