<template>
  <div class="login-page" id="login">
    <div class="login container">
      <form class="login-box" @submit.prevent="login" id="submit-form">
        <h1 class="text-color">Please Sign In</h1>
        <div role="alert" v-if="invalidCredentials">
          Invalid username and password!
        </div>
        <div role="alert" v-if="this.$route.query.registration">
          Thank you for registering, please sign in.
        </div>
        <div class="form-input-group">
          <label for="username" class="text-color">Username</label>
          <input
            type="text"
            id="username"
            v-model="user.username"
            required
            autofocus
          />
        </div>
        <div class="form-input-group">
          <label for="password" class="text-color">Password</label>
          <input
            type="password"
            id="password"
            v-model="user.password"
            required
          />
        </div>
        <button type="submit">Sign in</button>
        <p>
          <router-link :to="{ name: 'register' }"
            >Need an account? Sign up.</router-link
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import authService from "../services/AuthService";

export default {
  name: "login",
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      invalidCredentials: false,
    };
  },
  methods: {
    login() {
      authService
        .login(this.user)
        .then((response) => {
          if (response.status == 200) {
            this.$store.commit("SET_AUTH_TOKEN", response.data.token);
            this.$store.commit("SET_USER", response.data.user);
            this.$router.push({ name: "employee-view" });
          }
        })
        .catch((error) => {
          const response = error.response;

          if (response.status === 401) {
            this.invalidCredentials = true;
          }
        });
    },
  },
};
</script>

<style scoped>
.form-input-group {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
}
label {
  margin-right: 0.5rem;
}

#login {
  background-color: rgb(83, 83, 83);
  height: 100vh;
  display: flex;
  justify-content: center;
}
.login-page {
  background-image: url("https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-items: center;
  height: 100%;
}

.login-box {
  background-color: white;
  padding: 50px;
  border-radius: 10px;
  text-align: center;
  width: fit-content;
  max-width: 100%;
  margin-left: 30rem;
  color: rgb(0, 0, 0);
}

.login-heading {
  margin-top: 0;
}

.sign-in-button {
  margin-top: 20px;
}

.text-color {
  color:white;
}
</style>