<?php

use Illuminate\Support\Facades\Route;

// All main page links for http access
Route::get('/', function () {
    return view('welcome');
});

Route::get('/services', function () {
    return view('welcome');
});

Route::get('/about', function () {
    return view('welcome');
});

// Fallback route
Route::fallback(function() {
    // Enable vue-router fallback without 404 error code
    // return view('welcome');

    // Error page 404 code
    return abort(404);   
});