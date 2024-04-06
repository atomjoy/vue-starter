<script setup>
import TopMenu from '@/views/page/menu/TopMenu.vue'
import ChangeTitle from '@/components/utils/ChangeTitle/ChangeTitle.vue'

function go1() {
	window.location.href='/'
}
function go2() {
	window.location.href='/about'
}
</script>

<template>
	<ChangeTitle :title="'error404.title'" />
	<TopMenu />

	<h1>404</h1>
	<h2>{{ $t('error404.title') }}</h2>

	<div class="text-center">
		<button id="home-btn" class="btn btn-secondary my-0 mx-2" @click="go1">Home</button>
		<button id="contact-btn" class="btn btn-primary my-0 mx-2" @click="go2">About</button>
	</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap');

.text-center {
	display: block;
	height: auto;
	text-align: center;
}

h1 {
	float: left;
	width: 100%;
	font-weight: 900;
	font-size: 180px;
	color: var(--accent-primary);
	text-align: center;
	position: relative;
	z-index: 1;
	margin-top: 30px;
	margin-bottom: 10px;
	font-family: 'Carter One', cursive;
	text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
}
h1::before {
	position: absolute;
	content: '404';
	font-weight: 900;
	font-size: 180px;
	color: var(--text-primary);
	text-align: center;
	z-index: 0;
	transform: skewX(12deg);
	text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
}
h1::after {
	position: absolute;
	content: '404';
	font-weight: 900;
	font-size: 180px;
	color: var(--accent-primary);
	text-align: center;
	z-index: -1;
	transform: skewX(-12deg) translateX(-400px);
	text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
}
h2 {
	float: left;
	width: 100%;
	font-weight: 900;
	font-size: 50px;
	color: var(--accent-primary);
	text-align: center;
	position: relative;
}
h2::before {
	position: absolute;
	content:  '';
	font-weight: 900;
	font-size: 50px;
	color: #222;
	text-align: center;
	transform: skewX(12deg);
}
</style>
