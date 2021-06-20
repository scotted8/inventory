<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Inventory</router-link>
      <router-link to="/create">Add item</router-link>
    </div>
    <div class="content">
      <div id="account-numbers">
        <div class="quick-view-title">
          <h4>Quick View</h4>
        </div>
        <div class="circle">
          <header class="minor">Indices</header>
          <div class="account-item">{{ totalIndices }}</div>
        </div>
        <div class="circle">
          <header class="minor">Quests</header>
          <div class="account-item">{{ totalQuests }}</div>
        </div>
        <div class="circle">
          <header class="minor">Laptops</header>
          <div class="account-item xs-hidden">{{ totalLaptops }}</div>
        </div>
        <div class="circle">
          <header class="minor">Corsairs</header>
          <div class="account-item">{{ totalCorsairs }}</div>
        </div>
      </div>
      <router-view/>
    </div>
    <div id="footer">
      <a href="https://github.com/scotted8/inventory.git" class="fa fa-github fa-3x"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    totalIndices() {
      return this.$root.$data.indices;
    },
    totalQuests() {
      return this.$root.$data.quests;
    },
    totalLaptops() {
      return this.$root.$data.laptops;
    },
    totalCorsairs() {
      return this.$root.$data.corsairs;
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
  height: 100%;
}

a {
    text-decoration: none;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
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
  background-color: rgb(115 12 33);
  height: 80px;
  align-items: center;
  border-bottom: 1px solid black;
}

#nav a {
  color: #feffff;
  padding: 15px 5px 15px 40px;
  font-weight: 600;
}

#nav a.router-link-exact-active {
  /* color: rgb(13 152 101); */
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
  flex-direction: column;
  justify-content: flex-start;
  border-right: 1px solid black;
  background-color: rgb(115 12 33);
}

.content {
  display: flex;
  flex-grow: 1;
}

.quick-view-title {
  text-align: center;
  color: white;
  background-color: #232323;
}

header.minor {
  margin: 0 0 5px 0;
  padding: 0;
}

.account-item {
  margin-top: 0px;
}

.circle {
  border-radius: 50%;
  background-color: #f3f1f1;
  width: 115px;
  height: 115px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 30px;
  font-size: 1rem;
}

/* Footer */
#footer {
  background-color: #232323;
  padding: 10px;
  text-align: center;
  height: 80px;
  border-top: 1px solid black;
}

.fa.fa-github.fa-3x {
  color: white;
}

@media screen and (max-width: 600px) {
  .quick-view-title {
    display: none;
  }
  .content {
    flex-direction: column;
  }
  #account-numbers {
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    flex-wrap: wrap;
  }
  .circle {
    width: 75px;
    height: 75px;
    margin: 5px;
  }
  header.minor {
    display: none;
  }
}

.swal2-title {
  font-size: 1.5rem !important;
  font-family: Helvetica, Arial, sans-serif;
}

.swal2-popup {
  border: 5px solid black !important;
}

.swal2-styled.swal2-confirm {
  font-size: 1rem !important;
  border: none !important;
  background-color: #464444 !important;
}

.swal2-content {
  font-size: .9rem !important;
}

</style>
