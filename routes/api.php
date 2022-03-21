<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Route::post('register', [PassportAuthController::class, 'register']);
// Route::post('login', [PassportAuthController::class, 'login']);

// Route::middleware('auth:api')->group(function () {
//     Route::get('get-user', [PassportAuthController::class, 'userInfo']);
// });

Route::post('user/login', [\App\Http\Controllers\API\UserController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    Route::post('user/check', [\App\Http\Controllers\API\UserController::class, 'check']);
    Route::post('user/all', [\App\Http\Controllers\API\UserController::class, 'all']);
    Route::post('user/register', [\App\Http\Controllers\API\UserController::class, 'register']);
    Route::post('user/update', [\App\Http\Controllers\API\UserController::class, 'update']);
    Route::post('user/delete', [\App\Http\Controllers\API\UserController::class, 'delete']);
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
