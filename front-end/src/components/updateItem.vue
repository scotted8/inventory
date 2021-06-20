<template>
  <div class="item">
    <form>
      <label for="name">Name:</label><br>
      <select type="text" id="name" v-model="name"><br>
        <option v-for="option in options" :key="option">{{ option }}</option>
      </select>
      <label for="quantity">Quantity:</label><br>
      <input type="number" id="quantity" name="quantity" v-model.number="quantity">
      <label for="owner">Owner(s):</label><br>
      <input type="text" id="owner" name="owner" v-model="owner">
      <label for="condition">Condition:</label><br>
      <select type="text" id="condition" v-model="condition"><br>
        <option disabled value="" v-if='!editing'>Please select one</option>
        <option v-for="co in conditionOptions" :key="co">{{ co }}</option>
      </select>
      <label for="comments">Comments: </label><br>
      <textarea id="comments" v-model="comments"></textarea>
      <!--<label for="cost"> Purchase amount: </label><br>
      <currency-input v-model="purchaseAmount" currency="USD"/>-->
    </form>
    <div class="buttons">
      <router-link :to="'/'" class="btn">Back</router-link>
      <input type="button" class="btn" @click='updateItem' value="Save" v-if='editing'>
      <input type="button" class="btn" @click='addItem' value="Add" v-else>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UpdateItem',
  props: {
    // this props is passed from the parent to tell whether I'm supposed to be editing or adding an item
    editing: Boolean,
  },
  data() {
    return {
      editingItemID: '',
      name: '',
      comments: '',
      quantity: 0,
      condition: '',
      owner: '',
      options: [
        'Base station 1.0',
        'Base station 2.0',
        'Corsair',
        'Ethernet',
        'HDMI cable',
        'Index controller chargers',
        'Index controllers',
        'Index',
        'Keyboards',
        'Laptop',
        'Lens wipes',
        'Link box',
        'Monitors',
        'Pelican cases',
        'Pizza computer',
        'Power cords',
        'Power strips',
        'Quest',
        'Rift controllers',
        'Switch',
        'Sync cables',
        'Thumbdrive',
        'Tripods',
        'USB/HDMI/Power combo',
        'Vive controller chargers',
        'Vive controllers',
        'Vive',
        'WMR headset',
      ],
      conditionOptions: [
        'New',
        'Like new',
        'Very Good',
        'Good',
        'Acceptable',
        'Poor',
      ]
    }
  },
  created() {
    if (this.editing) {
      // Editing an item.
      this.getItem();
    }
  },
  methods: {
    async updateItem() {
      try {
        await axios.put("/api/items/" + this.editingItemID, {
          name: this.name,
          quantity: this.quantity,
          owner: this.owner,
          condition: this.condition,
          comments: this.comments,
        });
      } catch (error) {
        //do nothing;
      }

      this.$swal({
        title: 'Item updated',
        heightAuto: false,
        width: '300px',
        position: 'top',
      });
    },
    async addItem() {
      try {
        await axios.post("/api/items", {
          name: this.name,
          quantity: this.quantity,
          owner: this.owner,
          condition: this.condition,
          comments: this.comments,
        });

        this.$swal({
          title: 'Item added',
          heightAuto: false,
          width: '300px',
          position: 'top',
        });

        /*Reset the values in the fiels once submitted*/
        this.id = 0;
        this.name = '';
        this.quantity = 0;
        this.comments = '';
        this.owner = '';
      } catch(error) {
        //do nothing
      }
    },
    async getItem() {
      try {
        let response = await axios.get("/api/items/" + this.$route.params.id);
        let item = response.data;
        this.editingItemID = item._id;
        this.name = item.name;
        this.quantity = item.quantity;
        this.owner = item.owner;
        this.condition = item.condition;
        this.comments = item.comments;
      } catch (error) {
        // do nothing
      }
    }
  }
}
</script>

<style scoped>
textarea {
  width: calc(100% - 10px);
  max-width: calc(100% - 10px);
  height: 60px;
  min-width: calc(100% - 10px);
}

input {
  width: calc(100% - 10px);
  margin-bottom: 10px;
  height: 30px;
  font-size: 14pt;
}

select {
  width: 100%;
  margin-bottom: 10px;
  height: 30px;
  font-size: 14pt;
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

</style>
