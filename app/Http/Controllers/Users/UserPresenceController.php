<?php

namespace App\Http\Controllers\Users;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use App\Http\Controllers\Controller;
use App\Http\Requests\User\CreateUsers;
use Illuminate\Support\Facades\Session;

class UserPresenceController extends Controller
{

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, Request $request)
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function remove($id, Request $request)
    {
        $user = User::where('id', $id)->where('id', '<>', $request->user()->id)->first();
        if (!$user) {
            return $this->redirectBack('No such user was found', 'User not found', 'error');
        }
        $user->delete();
        return $this->redirectAfterDelete($request, 'The user data has been sent to the recycle bin', 'User temporarily removed');
    }

    private function redirectAfterDelete(Request $request, string $message, string $heading)
    {
        $request->validate([
            'should_redirect' => 'nullable|boolean'
        ]);
        if ($request->has('should_redirect') && $request->should_redirect == '1') {
            Session::flash('alert_heading', $heading);
            Session::flash('alert_message', $message);
            Session::flash('alert_type', 'success');
            return  abort(409, '', ['X-Inertia-Location' => config('app.url') . route('users.view', [], false)]);
        }
        return $this->redirectBack($message, $heading);
    }

    /**
     * Deactivate user from all activites.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deactivate($id, Request $request)
    {
        $user = User::where('id', $id)->where('id', '<>', $request->user()->id)->first();
        if (!$user) {
            return $this->redirectBack('No such user was found', 'User not found', 'error');
        }
        $user->is_active = false;
        $user->save();
        return $this->redirectBack('The selected user data has been deactivated', 'User deactivated');
    }

    /**
     * Activate user f DB.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function activate($id, Request $request)
    {
        $user = User::where('id', $id)->first();
        if (!$user) {
            return $this->redirectBack('No such user was found', 'User not found', 'error');
        }
        $user->is_active = true;
        $user->save();
        return $this->redirectBack('The selected user data has been activated', 'User activated');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function forceDestroy($id)
    {
        $user = User::onlyTrashed()->where('id', $id)->first();
        if (!$user) {
            return $this->redirectBack('No such user was found', 'User not found', 'error');
        }
        $user->forceDelete();
        return $this->redirectBack('A user has successfully been deleted', 'User successfully deleted');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function restore($id)
    {
        $user = User::onlyTrashed()->where('id', $id)->first();
        if (!$user) {
            return $this->redirectBack('No such user was found', 'User not found', 'error');
        }
        $user->restore();
        return $this->redirectBack('A user has successfully been deleted', 'User Restored');
    }
}
