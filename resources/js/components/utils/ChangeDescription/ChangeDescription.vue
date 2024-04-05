<template></template>
<script setup>
import { watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({ useScope: 'global' })

const props = defineProps({
	description: {
		type: String,
		default: 'error404.description', // Translation key from lang_en.json
	},
})

const description = props.description
const el = document.querySelector('head meta[name="description"]');

onMounted(() => {	
	el.setAttribute('content', t(description));
})

watch(
	() => locale.value,
	(lang) => {
		el.setAttribute('content', t(description));
	}
)
</script>

<!--
// Required in main.js createI18n(options)
allowComposition: true,
globalInjection: true,
legacy: false,
-->