<template>
    <div>

        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">
                    <span class="logo-main">Glow-Fit</span>
                    <span class="logo-sub">Studio</span>
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/aboutUs">About Us</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/bookNow">Book Now</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/contactUs">Contact Us</router-link>
                        </li>
                        <ul class="userAccount navbar-nav">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/signup">Sign Up</router-link>
                            </li>
                        </ul>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/admin">Admin</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.navbar {
  padding: 10px 20px;
  font-family: "Playfair Display", serif;
  z-index: 1030; 
  position: fixed !important;
  width: 100vw !important;
  background: linear-gradient(90deg, rgba(250, 170, 190, 0.9) 0%, rgba(247, 212, 109, 0.9) 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.navbar-brand .logo {
  height: 50px; 
}

.navbar-nav .nav-link {
  font-weight: bold;
  color: #fff;
  position: relative; 
  text-decoration: none;
  transition: color 0.3s ease;
  text-shadow: 2px 2px 5px #00000088;
}

.navbar-nav .nav-link::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: 1px; 
  height: 2px; 
  width: 0;
  background-color: #ffe77b; 
  transition: width 0.3s ease;
}

.navbar-nav .nav-link:hover::after,
.navbar-nav .nav-link.active::after {
  width: 90%;
}

@media (max-width: 767.98px) {
  .navbar-nav {
    margin-top: 10px;
  }
}

.logo {
  text-align: center;
}

.logo-main {
  display: block;
  font-size: 24px; 
  font-weight: bold;
  color: #fff; 
  font-family: "Permanent Marker", cursive;
  text-shadow: 2px 2px 5px #000000;
}

.logo-sub {
  display: block;
  font-size: 16px; 
  color: #fff; 
  margin-top: -5px; 
  font-weight: normal;
  font-family: "Permanent Marker", cursive;
  text-shadow: 2px 2px 5px #000000;
}
</style>

