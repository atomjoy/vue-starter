<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scrollbar-thin">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel Vue Starter Router</title>

    <meta name="description" content="Laravel 11 Vue 3.4 app starter with Vite.">
	<meta name="keywords" content="laravel, vue, starter">
	<link rel="canonical" href="/" />

	<!-- Css, links -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- Highligt.js -->	
	<script src="https://unpkg.com/@highlightjs/cdn-assets@11.7.0/highlight.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/highlightjs-line-numbers.js/dist/highlightjs-line-numbers.min.js"></script>
    <script type="text/javascript">		
        window.onload = (event) => {
            hljs.highlightAll();
		    hljs.initLineNumbersOnLoad({ startFrom: 1 });
        }
    </script>
    <!-- Highligt.js -->

    @vite('resources/css/app.css')
</head>
<body>
    <div id="app"></div>

    @vite('resources/js/app.js')
</body>
</html>