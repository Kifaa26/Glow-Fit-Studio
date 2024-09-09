<template>
    <div class="container">
      <div class="row">
        <h2 class="display-2 pt-5">Sign Up</h2>
      </div>
      <div class="row pt-5">
        <form class="form" @submit.prevent="register">
          <div class="form-control-wrapper">
            <span>
              <input class="form-control" type="text" placeholder="First name" v-model="payload.first_name" required />
            </span>
          </div>
          <div class="form-control-wrapper">
            <span>
              <input class="form-control" type="text" placeholder="Last name" v-model="payload.last_name" required />
            </span>
          </div>
          <div class="form-control-wrapper">
            <span>
              <input class="form-control" type="email" placeholder="Email address" v-model="payload.email" required />
            </span>
          </div>
          <div class="form-control-wrapper">
            <span>
              <input class="form-control" type="password" placeholder="Password" v-model="payload.pwd" required />
            </span>
          </div>
          <div class="form-control-wrapper d-md-flex d-block justify-content-between">
            <button type="submit" class="btn btn-success">Sign Up</button>
            <button type="reset" class="btn btn-dark">Reset</button>
          </div>
        </form>
      </div>
      <div class="row pt-5 banner-wrapper">
      <img src="https://github.com/Kifaa26/glow-fit-studio-images/blob/main/c8a894610c101d2596ef45c959034a17.jpg?raw=true" 
           alt="Sign Up Banner" class="banner img-fluid" loading="lazy" />
    </div>
      <!-- Success or Error Message -->
      <div v-if="registrationStatus === 'success'" class="alert alert-success mt-3">
        Registration successful!
      </div>
      <div v-if="registrationStatus === 'error'" class="alert alert-danger mt-3">
        Registration failed! Please try again.
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  const payload = reactive({
    first_name: '',
    last_name: '',
    email: '',
    pwd: '',
  });
  
  const registrationStatus = computed(() => store.state.registrationStatus);
  
  function register() {
    store.dispatch('register', payload);
  }
  </script>
  
  <style scoped>
html, body {
  height: 100%;
  background: linear-gradient(135deg, rgba(250, 170, 190, 0.9), rgba(247, 212, 109, 0.9));
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.display-2 {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #ff6f61;
  font-family: "Permanent Marker", cursive;
}


.form {
  display: flex;
  flex-direction: column;
}

.form-control-wrapper {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid rgba(250, 170, 190, 0.9);
}

.form-control:focus {
  border-color: rgba(247, 212, 109, 0.9);
  outline: none;
}

.form-control::placeholder {
  color: rgba(0, 0, 0, 0.632);
}

.btn-success {
  background-color: #ff6f61;
  border: none;
  padding: 10px;
  color: #fff;
  cursor: pointer;
}

.btn-dark {
  background-color: rgba(247, 212, 109, 0.9);
  border: none;
  padding: 10px;
  color: #fff;
  cursor: pointer;
}

.btn-success:hover, .btn-dark:hover {
  background-color: #ff6e61cb;
}

.banner-wrapper {
  display: flex;
  justify-content: center;
  padding: 0;
}

.banner {
  max-height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.alert {
  margin-top: 20px;
}
</style>