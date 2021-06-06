<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/create">Add item</router-link>
      <button class="sort-btn" @click="sortItems">Sort items</button>
    </div>
    <div class="content">
      <div id="account-numbers">
        <div class="circle xs-circle">
          <header class="minor">Unique items</header>
          <div class="account-item">{{ totalItems }}</div>
        </div>
        <div class="circle">
          <header class="minor">Total amount</header>
          <div class="account-item">${{ totalCost }}</div>
        </div>
        <div class="circle xs-hidden">
          <header class="minor">Newest purchase</header>
          <div class="account-item xs-hidden">{{ mostRecent }}</div>
        </div>
        <div class="circle xs-hidden">
          <header class="minor">Oldest purchase</header>
          <div class="account-item">{{ oldestPurchase }}</div>
        </div>
      </div>
      <router-view/>
    </div>
    <div id="footer">
      <a href="" class="git-hub-link">Github</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    totalItems: function () {
      return this.$root.$data.items.length;
    },
    totalCost: function() {
      let totalCost = 0
      let items = this.$root.$data.items
      for (let i = 0; i < items.length; i++){
        totalCost += items[i].price
      }
      return totalCost.toFixed(2)
    },
    mostRecent: function() {
      return '12/12/2020';
    },
    oldestPurchase: function() {
      return '1/5/1993';
    }
  },
  methods: {
    sortItems: function() {
      this.$root.$data.items = this.$root.$data.items.sort(this.dynamicSort)
    },
    dynamicSort: function(a, b) {
      let name1 = a.name.toLowerCase();
      let name2 = b.name.toLowerCase();

      let comparison = 0;

      if (name1 > name2) {
        comparison = 1;
      } else if (name1 < name2) {
        comparison = -1;
      }

      return comparison;
    }
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  font-size: 16pt;
  height: 100%;
  box-sizing: border-box;
}


body {
  display: flex;
  flex-direction: column;
}

a {
    text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

/* Header */
#nav {
  display: flex;
  flex-direction: row;
  background-color: #353535;
  padding: 20px;
}

#nav a {
  font-weight: bold;
  padding-right: 25px;
  color: #feffff;
}

#nav a:hover {
  color: #cecdcd;
}

#nav a.router-link-exact-active {
  color: #0adc8f;
}

#nav .sort-btn {
  margin-left: auto;
  border: none;
  height: 30px;
  width: 100px;
  border-radius: 8px;
  background-color: white;
  font-size: .8rem;
  color: black;
}

#nav .sort-btn:hover {
  color: white;
  background-color: black;
}

#account-numbers {
  display: flex;
  justify-content: center;
}

.content {
  max-width: 1280px;
  margin: 10px auto;
}

header.minor {
  margin: 0 0 5px 0;
  padding: 0;
}

.account-item {
  margin-top: 5px;
}

.circle {
  border-radius: 50%;
  background-color: #d0d0d0;
  width: 150px;
  height: 150px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
  font-size: 1rem;
}

/* Footer */
#footer {
  background-color: #353535;
  padding: 20px;
  text-align: center;
  margin-top: auto;
}

.git-hub-link {
    color: green;
}

@media screen and (max-width: 900px) {
  .circle {
    width: 150px;
    height: 50px;
    border-radius: 12px;
  }
  .xs-circle {
    width: 50px;
    height: 50px;
    border-radius: 12px;
  }
  header.minor {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .xs-hidden {
    display: none;
  }
  .content {
    margin-left: 10px;
    margin-right: 10px;
  }
}

</style>
