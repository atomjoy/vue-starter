<script setup>
import { RouterLink } from 'vue-router'
import ChangeLocale from '@/components/utils/ChangeLocale/ChangeLocale.vue'
import ChangeTheme from '@/components/utils/ChangeTheme/ChangeTheme.vue'
</script>

<template>
    <nav class="nav-router">
        <a href="/" class="nav-router__logo-link"><img src="/logo/logo-light.png" alt="Logo" title="Logo" class="nav-router__logo"></a>
        <RouterLink to="/" class="nav-router__link" :title="$t('Home')">{{ $t('Home') }}</RouterLink>
        <RouterLink to="/services" class="nav-router__link" :title="$t('Services')">{{ $t('Services') }}</RouterLink>
        <RouterLink to="/about" class="nav-router__link" :title="$t('About')">{{ $t('About') }}</RouterLink>
        <ChangeTheme/>
        <ChangeLocale/>
    </nav>
</template>