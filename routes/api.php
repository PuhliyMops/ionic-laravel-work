<?php

use App\Http\Controllers\Api\ForumController;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Api\GvmuReestrController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PostController;
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

//Route::apiResource('posts',PostController::class);
//Route_Posts




Route::group(['middleware' => ['web']], function () {
    Route::get('reestrs', [GvmuReestrController::class, 'index']);
    Route::get('reestrs/department/{department}', [GvmuReestrController::class, 'index_department']);
    Route::get('posts', [PostController::class, 'index']);
    Route::get('posts_add', [PostController::class, 'create']);
    Route::get('posts/{post}', [PostController::class, 'show']);
    Route::post('posts', [PostController::class, 'store']);
    Route::put('posts/{post}', [PostController::class, 'update']);
    Route::delete('posts/{post}', [PostController::class, 'destroy']);
    Route::get('forum', [ForumController::class, 'index']);
    Route::post('forum', [ForumController::class, 'store']);
    Route::put("forum/{post}", [ForumController::class, "update"]);
    Route::delete('forum/{post}', [ForumController::class, 'destroy']);
    Route::post('register', [AuthController::class, 'registration']);
    Route::post('login', [AuthController::class, 'authenticate']);
    Route::post('logout', [AuthController::class, 'log_out']);

});

/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/test-me", function () {
    return 'Hello from Laravel!';
});
*/
