<script setup>
let props = defineProps({
	color: { type: String, default: '#0099ff' },
	text: { type: String, default: 'Colored Text' },
	size: { type: String, default: '25px' },
})
</script>

<template>
	<span class="colored-text">{{ text }}</span>
</template>

<style scoped>
.wrapp{
	--color: v-bind(props.color);
}

.colored-text {
	margin-right: 20px;
	color: v-bind('props.color');
	font-size: v-bind('props.size');
}
</style>
