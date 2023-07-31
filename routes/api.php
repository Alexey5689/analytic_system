<?php

use App\Http\Controllers\DataCampaignsYandexDirectController;
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

Route::post('/login', [LoginController::class, 'login'])->middleware('throttle:5,60');

Route::get('/campaigns', [DataCampaignsYandexDirectController::class, 'get_campaign']);

Route::get('/send_api_campaign', [DataCampaignsYandexDirectController::class, 'send_api_campaign']);

Route::get('/ads_group', [DataCampaignsYandexDirectController::class, 'get_ads_group']);





