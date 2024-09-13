<template>
  <div class="container">
    <div class="row">
      <h2>Secure your spot!</h2>
    </div>
    <div class="row gap-2 justify-content-center my-2" v-if="instructors.length">
      <Card v-for="instructor in instructors" :key="instructor.instructor_id">
        <template #cardHeader>
          <img :src="instructor.profile_url" loading="lazy" class="img-fluid instructor-image" :alt="instructor.first_name">
        </template>
        <template #cardBody>
          <h5 class="card-title fw-bold">{{ instructor.first_name }} {{ instructor.last_name }}</h5>
          <p class="lead">
            <span class="text">Specialization</span>: {{ instructor.specialization }}
          </p>
          <div class="button-wrapper d-md-flex d-block justify-content-between">
            <router-link :to="{ name: 'instructor', params: { id: instructor.instructor_id } }">
              <button class="btn btn-success">Meet our trainer</button>
            </router-link>
          </div>
        </template>
      </Card>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Spinner from '@/components/Spinner.vue'
import Card from '@/components/Card.vue'

const store = useStore()
const instructors = computed(() => store.state.instructors)

onMounted(() => {
  store.dispatch('fetchInstructors')
})
</script>
  
  <style>
  .container {
    padding: 40px;
  }
  
  h2 {
    text-align: center;
    color: #ff6f61;
    font-family: "Permanent Marker", cursive;
    padding: 90px;
  }
  
  .instructor-image {
    max-height: 200px;
    object-fit: cover;
    margin-bottom: 15px;
    border-radius: 5px;
    transition: transform 0.3s ease;
  }
  
  .instructor-image:hover {
    transform: scale(1.05);
  }
  
  .card-title {
    color: rgb(5, 5, 5);
    font-size: 1.25rem;
    margin-bottom: 10px;
    font-family: "Playfair Display", serif;
  }
  
  .lead {
    font-size: 1rem;
    color: #000;
  }
  
  .button-wrapper {
    margin-top: 10px;
  }
  
  .btn-success {
  background-color: #ff6f61;
  color: #fff;
  border: #ff6f61;
}

.btn-success:hover {
  background-color: #ff6e61cb;
}

  .text {
    font-weight: bolder;
    color: #ff6f61;
  }
  </style>