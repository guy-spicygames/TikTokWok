<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();


Route::get('/', [App\Http\Controllers\HomeController::class, 'home']);

 
Route::get('/dashboard/categories', [App\Http\Controllers\CategoryController::class, 'index']);
Route::post('/dashboard/categories', [App\Http\Controllers\CategoryController::class, 'store']);
Route::get('/dashboard/categories/{category}', [App\Http\Controllers\CategoryController::class, 'show']);
Route::put('/dashboard/categories/{category}', [App\Http\Controllers\CategoryController::class, 'update']);
Route::delete('/dashboard/categories/{category}', [App\Http\Controllers\CategoryController::class, 'destroy']);

Route::get('/dashboard/products', [App\Http\Controllers\ProductController::class, 'index']);
Route::post('/dashboard/products', [App\Http\Controllers\ProductController::class, 'store']);
Route::get('/dashboard/products/{product}', [App\Http\Controllers\ProductController::class, 'show']);
Route::put('/dashboard/products/{product}', [App\Http\Controllers\ProductController::class, 'update']);
Route::delete('/dashboard/products/{product}', [App\Http\Controllers\ProductController::class, 'destroy']);


/*

Route::get('/', [App\Http\Controllers\HomeController::class, 'root'])->name('root');

//Update User Details
Route::post('/update-profile/{id}', [App\Http\Controllers\HomeController::class, 'updateProfile'])->name('updateProfile');
Route::post('/update-password/{id}', [App\Http\Controllers\HomeController::class, 'updatePassword'])->name('updatePassword');

Route::get('{any}', [App\Http\Controllers\HomeController::class, 'index'])->name('index');

//Language Translation
Route::get('index/{locale}', [App\Http\Controllers\HomeController::class, 'lang']);

*/
