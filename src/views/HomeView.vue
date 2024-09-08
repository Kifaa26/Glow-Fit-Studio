 <template>
  <div id="home">

    <section class="hero">
      <div class="hero-text">
        <h1>Empower Your Fitness Journey!</h1>
        <router-link to="/aboutUs" class="cta-button">About Us</router-link>
         <p class="hero-subtext">Transform your body and mind with our expert-guided classes.</p>
      </div>
    </section>

    <section class="classes">
      <h2>Discover a range of exciting classes designed for all fitness levels</h2>
      <div class="class-images">
        <div class="class-item">
          <img src="https://github.com/Kifaa26/glow-fit-studio-images/blob/main/workout.jpg?raw=true" alt="Workout Class">
          <p class="p-3">High-Energy Workout Sessions</p>
        </div>
        <div class="class-item">
          <img src="https://github.com/Kifaa26/glow-fit-studio-images/blob/main/pilates.jpg?raw=true" alt="Pilates Class">
          <p class="p-3">Strengthen and Stretch with Pilates</p>
        </div>
        <div class="class-item">
          <img src="https://github.com/Kifaa26/glow-fit-studio-images/blob/main/pilates%202.jpg?raw=true" alt="Pilates Class 2">
          <p class="p-3">Advanced Pilates Techniques</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: "Playfair Display", serif;
  color: #000000;
}

#home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Playfair Display", serif;
  text-shadow: 2px 2px 5px #c7c7c7c0;
}

.hero {
  background-image: url('https://github.com/Kifaa26/glow-fit-studio-images/blob/main/image-asset%20(11).jpeg?raw=true');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 18rem 2rem; 
  position: relative;
}

.hero-text {
  background-color: rgba(250, 170, 190, 0.336);
  display: inline-block;
  padding: 2rem;
  border-radius: 8px;
  font-family: "Permanent Marker", cursive;
}

.hero-subtext {
  font-size: 1.2rem;
  margin-top: 0.5rem;
  padding: 10px;
}

.hero h1 {
  margin: 0;
  font-size: 2.5rem;
}

.cta-button {
  display: inline-block;
  background-color: rgba(247, 212, 109, 0.9);
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1rem;
  margin-top: 1rem;
}

.classes {
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, rgba(250, 170, 190, 0.9), rgba(247, 212, 109, 0.9));
}

.classes h2 {
  padding: 25px;
  color: #332e2e;
  font-family: "Permanent Marker", cursive;
  text-shadow: 2px 2px 5px #c7c7c7c0;
}

.classes p {
  font-size: 20px;
  color: #332e2e;
  font-family: "Permanent Marker", cursive;
  text-shadow: 2px 2px 5px #c7c7c7c0;
}

.class-item {
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.class-item:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.p-3 {
  margin-top: 0.5rem;
  font-size: 1rem;
}

.class-images {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  font-weight: bolder;
}

.class-images img {
  width: 400px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

@media (max-width: 1024px) {
  .hero {
    padding: 12rem 2rem; 
  }

  .hero h1 {
    font-size: 2rem;
  }

  .cta-button {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  .classes h2 {
    font-size: 1.5rem;
  }

  .classes p {
    font-size: 1rem;
  }

  .class-images {
    flex-direction: column;
  }

  .class-images img {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 8rem 1rem; 
  }

  .hero h1 {
    font-size: 1.5rem;
  }

  .cta-button {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }

  .classes h2 {
    font-size: 1.2rem;
  }

  .classes p {
    font-size: 0.9rem;
  }

  .class-images {
    flex-direction: column;
  }

  .class-images img {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 6rem 0.5rem; 
  }

  .hero h1 {
    font-size: 1.2rem;
  }

  .cta-button {
    padding: 0.5rem 1rem;
    font-size: 0.7rem;
  }

  .classes h2 {
    font-size: 1rem;
  }

  .classes p {
    font-size: 0.8rem;
  }
}


</style>