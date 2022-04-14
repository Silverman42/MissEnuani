<?php

namespace App\Http\Controllers\Users;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\CompetitionRepository;

class ViewUsersController extends Controller
{
    protected $competition;

    public function __construct(CompetitionRepository $competition)
    {
        $this->competition = $competition;
    }

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
            'user' => $user,
            'competitions' => $this->competition->all()->toArray()
        ]);
    }

    private function builder(Request $request)
    {
        if ($request->has('search')) {
            return User::with('competitions')->where('first_name', 'LIKE', "%$request->search%")
                ->orWhere('last_name', 'LIKE', "%$request->search%")
                ->orWhereHas('competitions', function ($query) use ($request) {
                    $query->where('year', $request->search);
                })
                ->orWhere('is_admin', $request->search === 'admin' ? true : false)
                ->simplePaginate(50);
        }
        return User::with('competitions')->simplePaginate(50);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::with('permissions')->findOrFail($id);
        if ($user->is_admin === 1) {
            return Inertia::render('Users/ShowAdminUsers', [
                'user' => $user
            ]);
        }
        return Inertia::render('Users/ShowClientUsers', [
            'user' => $user,
            'competitions' => $this->competition->all()->toArray()
        ]);
    }
}
