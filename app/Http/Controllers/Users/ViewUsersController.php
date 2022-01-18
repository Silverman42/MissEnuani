<?php

namespace App\Http\Controllers\Users;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ViewUsersController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $this->builder($request);
        return Inertia::render('Users/List', [
            'user' => $user
        ]);
    }

    private function builder(Request $request)
    {
        if ($request->has('search')) {
            return User::where('first_name', 'LIKE', "%$request->search%")
                ->orWhere('last_name', 'LIKE', "%$request->search%")
                ->simplePaginate(50);
        }
        return User::simplePaginate(50);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::findOrFail($id);
        $user->getDirectPermissions();
        $user->roles;
        if ($user->hasRole('admin')) {
            return Inertia::render('Users/ShowAdminUsers', [
                'user' => $user
            ]);
        }
        return Inertia::render('Users/ShowClientUsers', [
            'user' => $user
        ]);
    }
}
