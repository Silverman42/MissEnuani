<?php

namespace App\Http\Controllers\Client;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function __invoke(Request $request)
    {
        $user = User::with(['competitions', 'transactions' => function ($query) use ($request) {
            return $query->where([
                'competitions_id' => $request->user()->competitions_id,
            ])->first();
        }])->where('id', $request->user()->id)->first()->toArray();
        return Inertia::render('Client/Dashboard', [
            'token' => csrf_token(),
            'user' => $user
        ]);
    }
}
