<!-- CodeHighlight.vue -->
<script setup>
import { ref } from 'vue'

import 'highlight.js/styles/default.css'
// Light set normal
import 'highlight.js/styles/github.min.css'
// import 'highlight.js/styles/grayscale.min.css'
// import 'highlight.js/styles/isbl-editor-light.min.css'
// import 'highlight.js/styles/ascetic.min.css'
// import 'highlight.js/styles/mono-blue.min.css'

// Dark set from current dir css
import './css/hybrid-dark.css'
// import './css/atom-one-dark.css'
// import './css/an-old-hope-dark.css'
// import './css/srcery-dark.css'
// import './css/kimbie-dark.css'

import hljs from 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

const props = defineProps({
	code: { default: '<?php echo "Insert code here...";' },
	language: { type: String, default: 'php' },
	theme: { type: String, default: '' },
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
	<div class="code-topbar">
		<button class="toggle-code-theme" @click="toggleTheme">{{ $t('Change Theme') }}</button>
	</div>
	<highlightjs :class="theme" :code="props.code" :language="props.language" />
</template>

<style>
.code-topbar {
	display: block;
	overflow: hidden;
	margin: 10px auto;
}
.toggle-code-theme {
	float: right;
	font-size: 14px;
	padding: 10px 20px;
	color: var(--text-primary);
	border-radius: var(--border-radius);
	background: transparent;
	border: 2px solid var(--code-border);
	cursor: pointer;
}
.toggle-code-theme:hover {
	color: var(--accent-primary);
	border: 2px solid var(--accent-primary);
}
</style>
