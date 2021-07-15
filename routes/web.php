<?php

use Illuminate\Support\Facades\Route; 
use App\Http\Controllers\BlogController;


Route::get('/', function () {
    return view('BlogN');
});

Route::view('add', 'BlogN');
Route::post('add', [BlogController::class,'addData']);