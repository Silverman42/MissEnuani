<?php

use Illuminate\Support\Facades\Route;

/**
 * Dashboard route
 */
Route::get('dashboard', 'DashboardController')->name('dashboard');

Route::group(['prefix' => 'competition'], function () {
    Route::get('/', 'CompetitionController@index')->name('competition');
    Route::post('/update/{id}', 'CompetitionController@update')->name('competition.update');
    Route::post('/store', 'CompetitionController@store')->name('competition.store');
    Route::post('/destroy/{id}', 'CompetitionController@destroy')->name('competition.destroy');
});
