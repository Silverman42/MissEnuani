<?php

namespace App\Http\Controllers;

use Competitions;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Competitions as ModelsCompetitions;

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
        $competitions = ModelsCompetitions::paginate(20);
        return Inertia::render('Landing/CompetitionList', [
            'competitions' => $competitions
        ]);
    }

    public function competition_view($competition_id)
    {
        $competition = ModelsCompetitions::where('id', $competition_id)->firstOrFail();
        $contestants = User::where('competitions_id', $competition->id)->paginate(24);
        return Inertia::render('Landing/CompetitionView', [
            'competition' => $competition,
            'contestants' => $contestants
        ]);
    }

    public function one_contestant($id)
    {
        $contestant = User::where([
            'id' => $id,
            'is_admin' => 0
        ])->firstOrFail();
        return Inertia::render('Landing/SingleContestant', [
            'contestant' => $contestant
        ]);
    }

    public function vote_success()
    {
        return Inertia::render('Landing/VoteSuccess');
    }
}
