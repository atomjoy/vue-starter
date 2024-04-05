<template></template>
<script setup>
import { useI18n } from 'vue-i18n'
import { watch, onMounted } from 'vue'

const { t, locale } = useI18n({ useScope: 'global' })

const props = defineProps({
	title: {
		type: String,
		default: 'error404.title',
	},
})

onMounted(() => {
	document.title = t(props.title)
})

watch(
	() => locale.value,
	(lang) => {
		document.title = t(props.title)
	}
)
</script>

<!--
// Require in main.js createI18n(options)
allowComposition: true,
globalInjection: true,
legacy: false,
-->
