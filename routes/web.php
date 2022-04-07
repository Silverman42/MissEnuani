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


Route::get('/', 'HomeController@index')->name('home');
Route::get('/competitions', 'HomeController@competition_list')->name('landing.competition_list');
Route::get('/competition/{competition_id}/', 'HomeController@competition_view')->name('landing.competition_view');
Route::get('/contestant/{id}', 'HomeController@one_contestant')->name('landing.one_contestant');
Route::get('/vote_success', 'HomeController@vote_success')->name('landing.vote_success');


Route::get('dashboard', 'DashboardController')->middleware(['auth'])->name('dashboard');

/**
 * Client Based Routes
 */
Route::name('client.')
    ->prefix('client')
    ->namespace('Client')
    ->middleware([
        'auth',
        'is_client',
    ])
    ->group(base_path('routes/app/client.php'));

/**
 * Admin Based Routes
 */
Route::name('admin.')
    ->prefix('admin')
    ->namespace('Admin')
    ->middleware([
        'auth',
        'is_admin',
    ])
    ->group(base_path('routes/app/admin.php'));


/**
 * Settings routes
 */
Route::group(['prefix' => 'settings', 'middleware' => ['auth', 'is_admin']], function () {
    Route::get('/', 'Settings\GeneralController@view')->name('settings.view');
    Route::put('/update', 'Settings\GeneralController@update')->name('settings.update');
    Route::post('/update/user-interface', 'Settings\UserInterfaceController')->name('settings.user_interface');
    Route::post('/factory-reset', 'Settings\FactoryResetController')->name('settings.factory_reset');
});

/**
 * User routes
 */
Route::group(['prefix' => 'users', 'middleware' => ['auth', 'is_admin']], function () {
    Route::get('/', 'Users\ViewUsersController@index')->name('users.view');
    Route::get('/{id}', 'Users\ViewUsersController@show')->name('users.show');
    Route::get('/trash', 'Users\RecycleViewController')->name('users.recycle');
    Route::post('remove/{id}', 'Users\UserPresenceController@remove')->name('users.remove');
    Route::post('restore/{id}', 'Users\UserPresenceController@restore')->name('users.restore');
    Route::post('destory/{id}', 'Users\UserPresenceController@forceDestroy')->name('users.destroy');
    Route::post('deactivate/{id}', 'Users\UserPresenceController@deactivate')->name('users.deactivate');
    Route::post('activate/{id}', 'Users\UserPresenceController@activate')->name('users.activate');
});

Route::group(['prefix' => 'users/contestant', 'middleware' => ['auth', 'is_admin']], function () {
    Route::post('biodata/emergency', 'Users\Client\UpdateBiodata@updateEmergencyData')->name('users.contestant.biodata.emergency');
    Route::post('biodata/medicals', 'Users\Client\UpdateBiodata@updateMedicalData')->name('users.contestant.biodata.medicals');
    Route::post('biodata/social', 'Users\Client\UpdateBiodata@updateSocialData')->name('users.contestant.biodata.social');
    Route::post('biodata/identity', 'Users\Client\UpdateBiodata@updateIdentityData')->name('users.contestant.biodata.identity');
    Route::post('biodata/persona', 'Users\Client\UpdateBiodata@updatePersonaData')->name('users.contestant.biodata.persona');
    Route::post('biodata/travel', 'Users\Client\UpdateBiodata@updateTravelData')->name('users.contestant.biodata.travel');
    Route::post('competition-data/{id}', 'Users\Client\UpdateCompetitionData')->name('users.contestant.competition-data');
    Route::post('access-data/{id}', 'Users\Client\UpdateAccessData')->name('users.contestant.access-data');
    Route::post('/create', 'Users\CreateUserController@createContestants')->name('users.contestant.create');
});

Route::group(['prefix' => 'users/admin', 'middleware' => ['auth', 'is_admin']], function () {
    Route::post('profile/{id}', 'Users\Admin\UpdateProfile')->name('users.admin.profile');
    Route::post('permissions/{id}', 'Users\Admin\UpdatePermissions')->name('users.admin.permissions');
    Route::post('/create', 'Users\CreateUserController@createAdmin')->name('users.admin.create');
});
Auth::routes();
