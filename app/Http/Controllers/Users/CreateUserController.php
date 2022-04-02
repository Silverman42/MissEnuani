<?php

namespace App\Http\Controllers\Users;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Traits\AdminPermissionSetting;
use App\Http\Requests\User\CreateAdmin;
use App\Http\Requests\User\CreateClient;

class CreateUserController extends Controller
{
    use AdminPermissionSetting;
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
        $this->addPermissions($request->only(config('user.admin.permissions')), $user);
        return;
    }
}
