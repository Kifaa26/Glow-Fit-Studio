<template>
  <div id="contact">
    <section class="contact-section">
      <div class="contact-content">
        <div class="contact-text">
          <h2>Contact Us</h2>
          <p>We would love to hear from you! Whether you have questions about our classes, facilities, or anything else, feel free to reach out. Our team is here to assist.</p>
          
          <form action="https://formspree.io/f/xnnaryqg" method="POST" class="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
          <div class="contact-info">
            <h3>Get in Touch</h3>
            <p><strong>Location:</strong> 123 Fitness Ave, Workout City, WF 45678</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Email:</strong> <a href="mailto:info@glowfitstudio.com">info@glowfitstudio.com</a></p>
            <div class="social-media">
              <a href="https://www.instagram.com/yourusername" target="_blank" aria-label="Instagram">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram">
              </a>
              <a href="https://www.facebook.com/yourusername" target="_blank" aria-label="Facebook">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook">
              </a>
            </div>
          </div>
        </div>
        
        

        <div class="contact-image">
          <img src="https://github.com/Kifaa26/glow-fit-studio-images/blob/main/cfced8f491d8b86ad7ab8c75f7b79ae8.jpg?raw=true" alt="Contact Us Image">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactUsView'
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: "Playfair Display", serif;
  color: #333;
}

#contact {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.contact-section {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(250, 170, 190, 0.9), rgba(247, 212, 109, 0.9));
  gap: 2rem;
  flex-wrap: wrap;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-text {
  flex: 1;
  padding: 1rem;
  font-family: "Playfair Display", serif;
}

.contact-text h2 {
  font-size: 2rem;
  margin: 0;
  padding: 50px;
  color: #ff6f61;
  text-align: center !important; 
  font-family: "Permanent Marker", cursive;
}

.contact-text p:first-of-type {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem; 
  width: 80%;
  text-align: center;
  margin: 0 auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
  margin: 2rem auto;
  
}

.contact-form label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.contact-form input, 
.contact-form textarea {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.contact-form button {
  padding: 1rem;
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: #e55b5b;
}

.contact-info {
  margin-top: 2rem;
  padding: 20px;
  text-align: center;
}

.contact-info h3 {
  font-size: 1.5rem;
  color: #ff6f61;
  margin-bottom: 1rem;
  font-family: "Permanent Marker", cursive;
}

.contact-info p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.contact-info a {
  color: #ff6f61;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

.social-media {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.social-media a {
  display: block;
}

.social-media img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.social-media img:hover {
  transform: scale(1.1);
}

.contact-image {
  flex: 1;
  max-width: 500px;
  flex-shrink: 0;
}

.contact-image img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Responsive Styles */
@media (max-width: 768px) {
  .contact-section {
    flex-direction: column;
    align-items: center;
  }

  .contact-content {
    flex-direction: column;
    align-items: center;
  }

  .contact-image {
    margin-top: 0;
  }
}
</style>