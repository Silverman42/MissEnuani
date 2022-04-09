<?php

namespace App\Http\Controllers\Client;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\NewPasswordRequest;

class AccessControlController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Client/AccessControl', [
            'user' => $request->user()
        ]);
    }

    public function changePassword(NewPasswordRequest $request)
    {
        $oldPasswordIsConfirmed = Hash::check($request->old_password, $request->user()->password);
        if (!$oldPasswordIsConfirmed) {
            return $this->redirectBack('The old entered password does not match your old password. Please try again', 'Password update failed', 'error');
        }
        $request->user()->password = Hash::make($request->new_password);
        $request->user()->save();
        return $this->redirectBack('Your password has successfully updated', 'Password updated', 'success');
    }
}
