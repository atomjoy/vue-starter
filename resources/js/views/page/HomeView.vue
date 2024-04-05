<script setup>
import TopMenu from './menu/TopMenu.vue'
</script>

<template>
    <TopMenu/>
    <div class="section">
        <h1 class="animate__animated animate__flipInX"><i class="fa-brands fa-vuejs"></i> Laravel Vue Starter SPA</h1>
        <p>{{ $t('Laravel 11 Vue 3.4 Starter SPA with router.') }}</p>
    </div>
</template>