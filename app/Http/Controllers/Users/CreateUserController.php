<?php

namespace App\Http\Controllers\Users;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\User\CreateAdmin;
use App\Http\Requests\User\CreateClient;

class CreateUserController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createAdmin(CreateAdmin $request)
    {
        return $this->createUser(config('user.admin.create'), $request, 'admin');
    }

    public function createContestants(CreateClient $request)
    {
        return $this->createUser(config('user.clients.create'), $request, 'client');
    }

    private function createUser(array $userData, $request, string $role)
    {
        try {
            DB::beginTransaction();
            $user = User::create($request->only($userData));
            $avatar = uploadCloudFile('avatar', 'avatar');
            if ($avatar) {
                $user->avatar = $avatar->getSecurePath();
                $user->avatar_id = $avatar->getPublicId();
            }
            $user->password = Hash::make($request->password);
            $user->save();
            $this->addRoleAndPermissions($user, $request, $role);
            DB::commit();
        } catch (\Throwable $error) {
            logger($error);
            return $this->redirectBack('Internal server problem. please try again', 'User creation unsuccessful', 'error');
        }
        return $this->redirectBack("{$user->last_name} has been successfully added", 'User creation successful');
    }
    private function addRoleAndPermissions(User $user, $request, $role)
    {
        if ($role === 'client') {
            return $user->assignRole('client');
        }
        $user->assignRole('admin');
        (filter_var($request->tickets, FILTER_VALIDATE_BOOLEAN) === true) ? $user->givePermissionTo('modify-tickets') : $user->revokePermissionTo('modify-tickets');
        (filter_var($request->transactions, FILTER_VALIDATE_BOOLEAN) === true) ? $user->givePermissionTo('modify-transactions') : $user->revokePermissionTo('modify-transactions');
        (filter_var($request->competitions, FILTER_VALIDATE_BOOLEAN) === true) ? $user->givePermissionTo('modify-compettions') : $user->revokePermissionTo('modify-competitions');
        (filter_var($request->settings, FILTER_VALIDATE_BOOLEAN) === true) ? $user->givePermissionTo('modify-settings') : $user->revokePermissionTo('modify-settings');
        (filter_var($request->users, FILTER_VALIDATE_BOOLEAN) === true) ? $user->givePermissionTo('modify-users') : $user->revokePermissionTo('modify-users');
        return;
    }
}
