<template>
  <div class="home">
    <div class="items-list">
      <div v-for="item in itemList" :key="item._id" class="item">
        <Item v-bind="item" :editing='false' @finished="finished"/>
      </div>
    </div>
  </div>
</template>

<script>
import Item from '@/components/item.vue'
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Item
  },
  data() {
    return {
      itemList: [],
    }
  },
  created() {
   // any time this page is created, update the entire list of items to reflect any possible changes.
   this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get('/api/items');
        this.itemList = response.data.items;
        this.checkForQuickViewItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    finished() {
      this.getItems();
    },
    checkForQuickViewItems() {
      let i = 0;
      let indices = 0;
      let quests = 0;
      let laptops = 0;
      let corsairs = 0;

      for (i; i < this.itemList.length; i++) {
        if (this.itemList[i].name.toLowerCase() == 'index' || this.itemList[i].name.toLowerCase() == 'indices') indices += this.itemList[i].quantity;
        else if (this.itemList[i].name.toLowerCase().includes('quest')) quests += this.itemList[i].quantity;
        else if (this.itemList[i].name.toLowerCase().includes('laptop')) laptops += this.itemList[i].quantity;
        else if (this.itemList[i].name.toLowerCase().includes('corsair')) corsairs += this.itemList[i].quantity;
      }

      let items = this.$root.$data;

      items.indices = indices;
      items.quests = quests;
      items.laptops = laptops;
      items.corsairs = corsairs;
    }
  }
}

</script>

<style scoped>
h5 {
  margin: 0;
}

.home {
  padding: 15px;
}

.items-list {
  display: flex;
  flex-wrap: wrap;
}

@media screen and (max-width: 600px) {
  .items-list {
    justify-content: center;
  }
}

</style>
