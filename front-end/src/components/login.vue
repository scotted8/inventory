<template>
<div class="accounts">
  <form class="register">
    <fieldset>
      <legend>Create a new account</legend>
      <input placeholder="first name" v-model="firstName">
      <input placeholder="last name" v-model="lastName">
    </fieldset>
    <fieldset>
      <input placeholder="username" v-model="username">
      <input type="password" placeholder="password" v-model="password">
    </fieldset>
    <fieldset>
      <button type="submit" class="btn" @click.prevent="register">Sign up</button>
    </fieldset>
  </form>
  <p v-if="error" class="error">{{error}}</p>
  <form class="pure-form space-above login">
    <fieldset>
      <legend>Login</legend>
      <input placeholder="username" v-model="usernameLogin">
      <input type="password" placeholder="password" v-model="passwordLogin">
    </fieldset>
    <fieldset>
      <button type="submit" class="btn" @click.prevent="login">Login</button>
    </fieldset>
  </form>
  <p v-if="errorLogin" class="error">{{errorLogin}}</p>
</div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'HomePage',
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      usernameLogin: '',
      passwordLogin: '',
      error: '',
      errorLogin: '',
    }
  },
  methods: {
    async register() {
      this.error = '';
      this.errorLogin = '';
      if (!this.firstName || !this.lastName || !this.username || !this.password)
        return;
      try {
        let response = await axios.post('/api/users', {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
        });
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.error = error.response.data.message;
        this.$root.$data.user = null;
      }
    },
    async login() {
      this.error = '';
      this.errorLogin = '';
      if (!this.usernameLogin || !this.passwordLogin)
        return;
      try {
        let response = await axios.post('/api/users/login', {
          username: this.usernameLogin,
          password: this.passwordLogin,
        });
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.errorLogin = "Error: " + error.response.data.message;
        this.$root.$data.user = null;
      }
    },
  }
}
</script>

<style scoped>
form, fieldset {
  border: none;
  margin: 0;
}

legend {
  color: white;
}

.space-above {
  margin-top: 50px;
}

h1 {
  font-size: 28px;
  font-variant: capitalize;
}

.accounts {
  max-width: 325px;
  margin: 20px auto;
}

.register, .login {
  border-radius: 10px;
  background-color: rgb(115 12 33);
  padding: 15px;
}

input {
  border-radius: 2px;
  border: none;
  padding: 5px;
  margin-bottom: 5px;
  width: 80%;
}

.error {
  margin-top: 10px;
  display: inline;
  padding: 5px 20px;
  border-radius: 30px;
  font-size: 10px;
  background-color: #d9534f;
  color: #fff;
}

.btn {
  width: 100px;
  height: 35px;
  font-size: .65rem;
  border-radius: 4px;
  border: none;
}

@media screen and (max-width: 600px) {
  .accounts{
    margin: 20px 0 0 0 ;
    max-width: 100%;
    padding: 10px;
  }
}
</style>
