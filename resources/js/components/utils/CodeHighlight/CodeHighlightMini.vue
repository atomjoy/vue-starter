<!-- CodeHighlight.vue -->
<script setup>
import 'highlight.js/styles/default.css'
import 'highlight.js/styles/github.min.css'
import hljs from 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

const props = defineProps({
	code: { default: '<?php echo "Insert code here...";' },
	language: { type: String, default: 'php' },
})

const highlightjs = hljsVuePlugin.component

function debugCode(code, language = 'php') {
	hljs.getLanguage(language)
	const result = hljs.highlight(props.code, { language: language })
	console.log(result)
}
</script>

<template>
	<highlightjs :code="props.code" :language="props.language" />
</template>

<style>
@import url('./css/code.css');
</style>
