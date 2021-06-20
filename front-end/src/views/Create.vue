<template>
  <div class="create">
    <h2>Add an item to your inventory</h2>
    <UpdateItem :editing='false'/>
  </div>
</template>

<script>
import UpdateItem from '@/components/updateItem.vue'

export default {
  name: 'Create',
  components: {
    UpdateItem,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  text-align: center;
}

.create {
  padding: 10px;
  max-width: 400px;
  margin: 0 auto;
}
</style>
