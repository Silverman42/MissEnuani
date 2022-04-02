<?php

namespace App\Http\Controllers\Users\Client;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\User\UpdateClientCompetitionData;

class UpdateCompetitionData extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(UpdateClientCompetitionData $request, $id)
    {
        try {
            $user = User::where('id', $id)
                ->update($request->only(config('users.client.update_competition_data')));
            return $this->redirectBack(
                "Competition data updated",
                "{$user->first_name}'s Competition data has been updated",
                "success"
            );
        } catch (\Throwable $th) {
            logger($th);
            return $this->redirectBack(
                "Competition data update failed",
                "The contestant's competition data failed to be updated",
                "error"
            );
        }
    }
}
