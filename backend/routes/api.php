<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\Admin\LoginController;
use App\Http\Controllers\Api\Admin\LogoutController;
use App\Http\Controllers\Api\Admin\CarouselController;
use App\Http\Controllers\Api\Admin\HomeController;
use App\Http\Controllers\Api\Admin\QaController;
use App\Http\Controllers\Api\Admin\ContructionController;
// WEB Page
use App\Http\Controllers\Api\Web\CarouselController as CarouselWebController;
use App\Http\Controllers\Api\Web\QaController as QaWebController;
use App\Http\Controllers\Api\Web\ConstructionController as ConstructionWebController;

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

// group route with prefix "admin"
Route::prefix('admin')->group(function() {
    // Route Login
    Route::post('/login', LoginController::class, [
        'as' => 'admin'
    ]);

    Route::group(['middleware' => 'auth:api'], function() {
        // Route User Login (mendapatkan data user yang login sesuai token)
        Route::get('/user', function(Request $request) {
            return $request->user();
        })->name('user');

        // Route Logout
        Route::post('/logout', LogoutController::class, [
            'as' => 'admin'
        ]);

        // Route carousel
        Route::apiResource('/carousel', CarouselController::class, [
            'except' => ['create', 'edit', 'show', 'update'], 
            'as'     => 'admin'
        ]);

        // Route carousel
        Route::apiResource('/home', HomeController::class, [
            'except' => ['index', 'store', 'create', 'edit', 'destroy'], 
            'as'     => 'admin'
        ]);

        // Route carousel
        Route::apiResource('/qa', QaController::class, [
            'except' => ['create', 'edit'], 
            'as'     => 'admin'
        ]);

        // Route construction
        Route::apiResource('/construction', ContructionController::class, [
            'except' => ['create', 'edit'], 
            'as'     => 'admin'
        ]);
    }); 
});

Route::prefix('web')->group(function() {
    Route::apiResource('/carousel', CarouselWebController::class, [
        'except' => ['create', 'edit', 'show', 'update', 'delete'], 
        'as'     => 'admin'
    ]);

    Route::apiResource('/qa', QaWebController::class, [
        'except' => ['create', 'edit', 'show', 'update', 'delete'], 
        'as'     => 'admin'
    ]);

    Route::apiResource('/construction', ConstructionWebController::class, [
        'except' => ['create', 'edit', 'show', 'update', 'delete'], 
        'as'     => 'admin'
    ]);
});



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
