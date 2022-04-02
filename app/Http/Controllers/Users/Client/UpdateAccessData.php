<?php

namespace App\Http\Controllers\Users\Client;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\User\UpdateClientAccessData;

class UpdateAccessData extends Controller
{
    public function __invoke(UpdateClientAccessData $request, $id)
    {
        $user = User::find($id);
        if (!$user) {
            return $this->redirectBack('Access data update failed', 'Contestant was not found', 'error');
        }
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        return $this->redirectBack('Access data updated', "Contestant's access data has been updated", "success");
    }
}
