<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="nav-router">
        <img src="/logo/logo-light.png" alt="Logo" title="Page logo" class="nav-router__logo">
        <RouterLink to="/" class="nav-router__link" title="Home">Home</RouterLink>
        <RouterLink to="/services" class="nav-router__link" title="Services">Services</RouterLink>
        <RouterLink to="/about" class="nav-router__link" title="About">About</RouterLink>
    </nav>
</template>