<template>
  <div id="item-page">
    <h2>Edit your item</h2>
    <UpdateItem :editing='true'/>
  </div>
</template>

<script>
import UpdateItem from '@/components/updateItem.vue'

export default {
  name: 'Edit',
  components: {
    UpdateItem
  },
}

</script>

<style scoped>
h2 {
  text-align: center;
}

#item-page {
  padding: 10px;
  max-width: 400px;
  margin: 0 auto;
}
</style>
