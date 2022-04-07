<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return Inertia::render('Landing/Index');
    }

    // Competition page
    public function competition_list()
    {
        return Inertia::render('Landing/CompetitionList');
    }

    public function competition_view()
    {
        return Inertia::render('Landing/CompetitionView');
    }

    public function one_contestant()
    {
        return Inertia::render('Landing/SingleContestant');
    }

    public function vote_success()
    {
        return Inertia::render('Landing/VoteSuccess');
    }
}
