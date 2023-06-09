<template>
  <div id="register" class="register-page">
    <div class="register-container">
    <form @submit.prevent="register" class="register-box">
      <h1>Create Account</h1>
      <div role="alert" v-if="registrationErrors">
        {{ registrationErrorMsg }}
      </div>
      <div class="form-input-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="user.username" required autofocus />
      </div>
      <div class="form-input-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="user.password" required />
      </div>
      <div class="form-input-group">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" v-model="user.confirmPassword" required />
      </div>
      <button type="submit" class="form-input-group" id="submit-button">Create Account</button>
      <p><router-link :to="{ name: 'login' }" id="already">Already have an account? Log in.</router-link></p>
    </form>
    </div>
  </div>
</template>

<script>
import authService from '../services/AuthService';

export default {
  name: 'register',
  data() {
    return {
      user: {
        username: '',
        password: '',
        confirmPassword: '',
        role: 'user',
      },
      registrationErrors: false,
      registrationErrorMsg: 'There were problems registering this user.',
    };
  },
  methods: {
    register() {
      if (this.user.password != this.user.confirmPassword) {
        this.registrationErrors = true;
        this.registrationErrorMsg = 'Password & Confirm Password do not match.';
      } else {
        authService
          .register(this.user)
          .then((response) => {
            if (response.status == 201) {
              this.$router.push({
                path: '/login',
                query: { registration: 'success' },
              });
            }
          })
          .catch((error) => {
            const response = error.response;
            this.registrationErrors = true;
            if (response.status === 400) {
              this.registrationErrorMsg = 'Bad Request: Validation Errors';
            }
          });
      }
    },
    clearErrors() {
      this.registrationErrors = false;
      this.registrationErrorMsg = 'There were problems registering this user.';
    },
  },
};
</script>

<style scoped>
.form-input-group {
  margin-bottom: 1rem;
  display: flex;
  justify-content: right;
}
label {
  margin-right: 0.5rem;
}

#register {
  background-color: rgb(83, 83, 83);
  height: 100vh;
  display: flex;
  justify-content: center;
}
.register-page {
  background-image: url("https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
#submit-button {
margin-left: 7em;
margin-right: 7em;
}

#already {
  margin-left: 3em;
margin-right: 3em;
}

.text-color {
  color:white;
}
</style>