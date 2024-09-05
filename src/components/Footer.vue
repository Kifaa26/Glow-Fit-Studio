<template>
    <footer class="container-fluid">
            <div class="row">
                <div class="footer">
                <p class="lead">Glow-Fit Studio &copy; <span class="shadow">{{ cYear }}</span></p>
            </div>
        </div>
        </footer>
    </template>
    
    <script>
    export default {
        name: "FooterComp",
        data() {
            return {
                cYear: new Date().getUTCFullYear()
            }
        }
    }
    </script>
    
    <style scoped>
    .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    text-shadow: 2px 2px 5px #e3e3e3;
    padding: 10px 0;
    margin: 0;
    width: 100%;
    flex-direction: column;
    }
    
    </style>