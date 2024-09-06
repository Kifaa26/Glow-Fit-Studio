<template>
    <div>

        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">
                    <img src="" loading="lazy" alt="logo">
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
                            <router-link class="nav-link" to="/meetTheTeam">Meet the team</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/bookNow">Book Now</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/admin">Admin</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/contactUs">Contact Us</router-link>
                        </li>
                        <ul class="userAccount navbar-nav">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/signup">Sign Up</router-link>
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>

</style>

