<template>
  <div class="container instructor-view">
    <div class="row justify-content-center">
      <h2>Book Now</h2>
      <Card v-if="instructor">
        <template #cardHeader>
          <img :src="instructor.profile_url" loading="lazy" class="img-fluid instructor-image" :alt="instructor.first_name">
        </template>
        <template #cardBody>
          <h5 class="card-title fw-bold">{{ instructor.first_name }} {{ instructor.last_name }}</h5>
          <p class="lead">
            <span class="text">Specialization</span>: {{ instructor.specialization }}
          </p>
          <p class="bio">{{ instructor.bio }}</p>
        </template>
      </Card>
      <div v-else>
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Spinner from '@/components/Spinner.vue'
import Card from '@/components/Card.vue'

const store = useStore()
const route = useRoute()
const instructor = computed(() => store.state.instructor)

onMounted(() => {
  const instructor_id = route.params.id
  store.dispatch('fetchInstructor', instructor_id)
})
</script>

<style scoped>
.container {
  padding: 40px;
}

.instructor-view {
  text-align: center;
}

.card {
  width: 18rem;
  margin: auto;
}

h5 {
  text-align: center;
}

.text {
    font-weight: bolder;
    color: #ff6f61;
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
}

.lead {
  font-size: 1rem;
  color: #000;
}

.bio {
  font-size: 0.9rem;
  color: #333;
  text-align: left;
  margin-top: 10px;
}

</style>