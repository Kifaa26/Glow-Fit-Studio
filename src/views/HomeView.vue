<template>
  <div>
    <section class="services-section">
      <div class="services-container">
        <h2>Our Services</h2>
        <div class="services-grid">
          <div class="service-card">
            <h3>Personal Training</h3>
            <p>Achieve your fitness goals with personalized guidance from certified trainers.</p>
          </div>
          <div class="service-card">
            <h3>Yoga & Pilates</h3>
            <p>Improve your flexibility and balance in our soothing yoga and pilates classes.</p>
          </div>
          <div class="service-card">
            <h3>Group Fitness</h3>
            <p>Join a community of like-minded individuals in fun and engaging group sessions.</p>
          </div>
          <div class="service-card">
            <h3>Nutrition Coaching</h3>
            <p>Get customized nutrition plans to complement your fitness journey.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
/* Parallax Section */
.parallax-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.parallax-background {
  background-image: url;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.parallax-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  font-family: "Playfair Display", serif;
  top: 50%;
  transform: translateY(-50%);
}

.parallax-content h1 {
  font-size: 5rem;
}

.parallax-content p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.cta-button {
  padding: 1rem 2rem;
  background-color: #ff5a5f;
  color: white;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #e04e4e;
}

/* Services Section */
.services-section {
  padding: 4rem 2rem;
  background-color: #ffffff;
  text-align: center;
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
}

.services-section h2 {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.service-card {
  background-color: #f2f2f2;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.service-card h3 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.service-card p {
  font-size: 1.1rem;
}
</style>