<?php

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

Route::get("/tasks", "TaskController@getTasks");
Route::get("/task/{task}", "TaskController@newTask");
Route::get("/changeState/{id}", "TaskController@changeState");
Route::get("/dropCompleted", "TaskController@dropCompleted");
Route::get("/dropTask/{id}", "TaskController@dropTask");

