<?php

use CloudCreativity\LaravelJsonApi\Facades\JsonApi;
use CloudCreativity\LaravelJsonApi\Routing\RouteRegistrar as Api;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

JsonApi::register('default')->routes(function ($api) {
	// https://laravel-json-api.readthedocs.io/en/latest/basics/routing/
    $api->resource('hits')
		->middleware('throttle:480,1')
		//->middleware('cache.headers:public;max_age=300;etag')
		->middleware('cacheResponse:300')
		->readOnly();
    $api->resource('records')->middleware('throttle:4,1')->only('create');
});
