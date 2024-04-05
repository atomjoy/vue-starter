<script setup>
import TopMenu from './menu/TopMenu.vue'
</script>

<template>
    <TopMenu/>
    <div class="section">
        <h1>{{ $t('About') }}</h1>
        <p>{{ $t('Laravel 11 Vue 3.4 Starter SPA with router.') }}</p>
    </div>
</template>