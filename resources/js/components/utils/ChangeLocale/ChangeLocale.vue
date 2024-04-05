<template>
	<div class="change-locale">
		<select v-model="locale" class="locale-select">
			<option v-for="lang in availableLocales" :key="`locale-${lang}`" :value="lang">{{ t(lang) }}</option>
		</select>
	</div>
</template>

<script setup>
import axios from 'axios'
import { useI18n } from 'vue-i18n'
import { watch, onMounted } from 'vue'

const { t, locale, availableLocales } = useI18n({ useScope: 'global' })

const props = defineProps({
	locale_url: { default: '/web/api/locale/' },
})

onMounted(() => {
	console.log('Change locale', locale.value, availableLocales)
})

watch(
	() => locale.value,
	(lang) => {
		changeLocale(lang)
	}
)

async function changeLocale(locale) {
	if (props.locale_url) {
		try {
			await axios.get(props.locale_url + locale)
		} catch (err) {
			console.log('Change locale error', err)
		}
	}
}
</script>

<style scoped>
.change-locale {
	float: right;
	width: auto;
	height: 44px;
	margin: 5px;
	background: var(--bg-primary);
	border-radius: var(--border-radius);
	border: 1px solid var(--divider-primary);
}
.change-locale .locale-select {
	box-sizing: border-box;
	min-width: 95px;
	height: 42px;
	float: left;
	border: 0px;
	cursor: pointer;
	text-align: center;
	padding-left: 5px;
	font-size: 14px;
	background: var(--bg-primary);
	border-radius: var(--border-radius);
}
.change-locale .locale-select option,
.change-locale .locale-select > * {
	background: var(--bg-primary);
	color: var(--text-primary);
}
.change-locale .locale-select:focus {
	border: none;
	box-shadow: none;
}
</style>

<!--
import { createI18n } from 'vue-i18n'

const lang = {
  // Allow compositions api (required)
  allowComposition: true,
  globalInjection: true,
  legacy: false,

  // Locales
  locale: 'en',
  fallbackLocale: 'en',
  availableLocales: ['en', 'pl'],
  messages: {
    en: { en: "English", pl: "Polish" },
    pl: { en: "Angielski", pl: "Polski" },
  },
}

const i18n = createI18n(lang)
app.use(i18n)
-->
