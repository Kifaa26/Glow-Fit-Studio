<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2 pt-5">Login</h2>
    </div>
    <div class="row pt-5">
      <form class="form" @submit.prevent="login">
        <div class="form-control-wrapper">
          <input
            class="form-control"
            type="email"
            placeholder="Email address"
            v-model="payload.email"
            required
          />
        </div>
        <div class="form-control-wrapper">
          <input
            class="form-control"
            type="password"
            placeholder="Password"
            v-model="payload.pwd"
            required
          />
        </div>
        <div class="form-control-wrapper d-md-flex d-block justify-content-between">
          <button type="submit" class="btn btn-success">Login</button>
          <button type="reset" class="btn btn-dark">Reset</button>
        </div>
      </form>
    </div>
    <div v-if="loginStatus === 'success'" class="alert alert-success mt-3">
      Login successful! Redirecting...
    </div>
    <div v-if="loginStatus === 'error'" class="alert alert-danger mt-3">
      Login failed! Please check your credentials.
    </div>
    <div class="sign-up pt-3">
      <p>Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const payload = reactive({
  email: '',
  pwd: '',
});

const loginStatus = computed(() => store.state.loginStatus);

async function login() {
  try {
    const user = await store.dispatch('login', payload);
    
    if (user.role === 'admin') {
      router.push({ name: 'admin' });
    } else {
      router.push({ name: 'home' });
    }
  } catch (e) {
    console.error('Login error:', e);
  }
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

.sign-up {
    font-family: "Playfair Display", serif;
}

@media (max-width: 768px) {
  .container {
    padding: 15px;
  }

  .form {
    padding: 10px;
  }

  .display-2 {
    font-size: 1.5rem;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .form-control {
    font-size: 14px;
    padding: 8px;
  }

  .btn-success, .btn-dark {
    padding: 8px;
    font-size: 14px;
  }
}

@media (max-width: 576px) {
  .container {
    padding: 10px;
  }

  .display-2 {
    font-size: 1.25rem;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .form-control {
    font-size: 12px;
    padding: 6px;
  }

  .btn-success, .btn-dark {
    padding: 6px;
    font-size: 12px;
  }
}
</style>