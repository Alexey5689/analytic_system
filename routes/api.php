<?php

use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [RegisterController::class, 'store']);
Route::get('/city', [RegisterController::class, 'city']);
Route::post('/verify', [RegisterController::class, 'verify']);
Route::post('/register-mail-again', [RegisterController::class, 'again']);
Route::post('/login', [LoginController::class, 'login'])->middleware('throttle:5,10');
Route::post('/logout', [LoginController::class, 'logout'])->middleware('web');

Route::post('/forget-password', [ForgotPasswordController::class, 'forget_current_password']);

Route::post('/reset', [ForgotPasswordController::class, 'assigning_new_password']);

Route::post('/recovery-email-again', [ForgotPasswordController::class, 'resending_email']);




