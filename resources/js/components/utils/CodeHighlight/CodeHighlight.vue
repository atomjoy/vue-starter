<!-- CodeHighlight.vue -->
<script setup>
import { ref } from 'vue'

import 'highlight.js/styles/default.css'
// Light set normal
// import 'highlight.js/styles/github.min.css'
// import 'highlight.js/styles/grayscale.min.css'
// import 'highlight.js/styles/isbl-editor-light.min.css'
// import 'highlight.js/styles/ascetic.min.css'
// import 'highlight.js/styles/mono-blue.min.css'

// Custom light
import './css/light/mozilla-light.css'

// Dark set from current dir css
import './css/dark/mozilla-dark.css'
// import './css/dark/hybrid-dark.css'
// import './css/dark/an-old-hope-dark.css'
// import './css/dark/atom-one-dark.css'
// import './css/dark/atom-one-resonable-dark.css'
// import './css/dark/srcery-dark.css'
// import './css/dark/kimbie-dark.css'

import hljs from 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

const props = defineProps({
	code: { default: '<?php echo "Insert code here...";' },
	language: { type: String, default: 'php' },
	theme: { type: String, default: '' },
	filename: { type: String, default: '' },
})

const highlightjs = hljsVuePlugin.component

function debugCode(code, language = 'php') {
	hljs.getLanguage(language)
	const result = hljs.highlight(props.code, { language: language })
	console.log(result)
}

const theme = ref(props.theme)

function toggleTheme() {
	theme.value == '' ? (theme.value = 'dark-theme') : (theme.value = '')
}
</script>

<template>
	<div class="hljs-code-topbar">
		<span class="hljs-code-filename"><i class="fa-regular fa-file-code"></i> {{ props.filename }}</span>
		<button v-if="theme == ''" class="hljs-code-toggle-theme" @click="toggleTheme"><i class="fa-solid fa-toggle-off"></i></button>
		<button v-else class="hljs-code-toggle-theme" @click="toggleTheme"><i class="fa-solid fa-toggle-on"></i></button>
	</div>
	<highlightjs :class="theme" :code="props.code" :language="props.language" />
</template>

<style>
@import url('./css/code.css');
</style>
