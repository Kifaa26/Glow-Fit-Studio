<template>
  <div id="about">
    <section class="about-us">
      <div class="about-us-content">
        <div class="about-text">
          <h2>Our Philosophy</h2>
          <p>At Glow-Fit Studio, we believe that fitness is more than just a workout; it's a transformative journey. Designed exclusively for women, our studio offers a unique blend of strength, flexibility, and endurance training in a supportive and vibrant environment. Whether you're a seasoned athlete or just starting your fitness journey, Glow-Fit Studio is here to help you achieve your goals and enhance your overall well-being.</p>
        </div>
        <div class="about-image p-5">
          <img src="https://github.com/Kifaa26/glow-fit-studio-images/blob/main/pilates%203.jpg?raw=true" alt="Pilates Class 3">
        </div>
      </div>
    </section>

    <section class="offerings">
      <h2>What We Offer</h2>
      <div class="cards-container">
        <div class="card">
          <h3>Innovative Fitness Classes</h3>
          <p>Explore our variety of classes, including strength training, cardio conditioning, yoga, and more. Each class is led by certified instructors who are dedicated to helping you reach your full potential.</p>
        </div>
        <div class="card">
          <h3>Personalized Training</h3>
          <p>Receive customized workout plans and one-on-one attention with our personal trainers. Whether you have specific fitness goals or need help with technique, our trainers are here to guide and motivate you.</p>
        </div>
        <div class="card">
          <h3>State-of-the-Art Facilities</h3>
          <p>Enjoy our modern and well-equipped facilities, designed to provide a comfortable and effective workout experience. From high-quality equipment to clean and spacious workout areas, we ensure that every visit is enjoyable and productive.</p>
        </div>
        <div class="card">
          <h3>Supportive Community</h3>
          <p>Become part of our vibrant community of like-minded women who share your passion for fitness. At Glow-Fit Studio, you'll find encouragement, inspiration, and lasting friendships in a welcoming and inclusive environment.</p>
        </div>
        <div class="card">
          <h3>Holistic Approach</h3>
          <p>We believe in a holistic approach to fitness that includes physical, mental, and emotional well-being. Our classes and programs are designed to not only improve your fitness but also boost your confidence and overall happiness.</p>
        </div>
      </div>
    </section>

    <section class="why-choose-us">
      <h2>Why Choose Glow-Fit Studio?</h2>
      <div class="cards-container">
        <div class="card">
          <h3>Expert Instructors</h3>
          <p>Our team of experienced and certified instructors are passionate about fitness and dedicated to helping you succeed. They bring energy, knowledge, and enthusiasm to every class.</p>
        </div>
        <div class="card">
          <h3>Flexible Memberships</h3>
          <p>We offer a range of membership options to fit your lifestyle and budget. Enjoy the flexibility to choose the plan that works best for you, whether it's a single class pass or a full membership.</p>
        </div>
        <div class="card">
          <h3>Fun and Engaging Environment</h3>
          <p>At Glow-Fit Studio, we make fitness fun! Our engaging classes and friendly atmosphere ensure that every workout feels like a celebration of your strength and progress.</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'AboutUsView'
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: "Playfair Display", serif;
  color: #333;
}

#about {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.about-us {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, rgba(250, 170, 190, 0.9), rgba(247, 212, 109, 0.9));
  gap: 2rem;
}

.about-us-content {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.about-text {
  flex: 1;
  padding: 1rem;
}

.about-text h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ff6f61;
  font-family: "Permanent Marker", cursive;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.6;
  font-family: "Playfair Display", serif;
}

.about-image {
 flex: 1;
  max-width: 500px;
  flex-shrink: 0;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.offerings {
  padding: 2rem;
  background: linear-gradient(135deg, rgba(250, 170, 190, 0.9), rgba(247, 212, 109, 0.9));
    font-family: "Playfair Display", serif;
}

.offerings h2 {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: #ff6f61;
  font-family: "Permanent Marker", cursive;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.card {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 350px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card h3 {
  margin-top: 0;
  font-size: 1.5rem;
  color: #ff6f61;
  font-family: "Permanent Marker", cursive;
}

.card p {
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
}

.why-choose-us {
  padding: 2rem;
  background: linear-gradient(135deg, rgba(250, 170, 190, 0.9), rgba(247, 212, 109, 0.9));
  font-family: "Playfair Display", serif;
}

.why-choose-us h2 {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: #ff6f61;
  font-family: "Permanent Marker", cursive;
}

.why-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.why-item {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 350px;
}

.why-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.why-item h3 {
  margin-top: 0;
  font-size: 1.5rem;
  color: #ff6f61;
  font-family: "Permanent Marker", cursive;
}

.why-item p {
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
}
</style>