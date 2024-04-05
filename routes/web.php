<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


// Fallback route
// Route::fallback(function() {
//     return view('welcome');
// });