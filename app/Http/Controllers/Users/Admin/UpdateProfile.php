<?php

namespace App\Http\Controllers\Users\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\User\UpdateAdminProfile;

class UpdateProfile extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(UpdateAdminProfile $request, $id)
    {
        try {
            DB::beginTransaction();
            $user = User::where('id', $id)->update($request->only(config('user.admin.update')));
            $avatar = uploadCloudFile('avatar', 'avatar');
            if ($avatar) {
                $user->avatar = $avatar->getSecurePath();
                $user->avatar_id = $avatar->getPublicId();
            }
            $user->password = Hash::make($request->password);
            $user->save();
            DB::commit();
            return $this->redirectBack("Admin profile updated", "Admin profile has been updated succefully", "success");
        } catch (\Throwable $th) {
            logger($th);
            return $this->redirectBack("Admin profile update failed", "Admin profile failed to update", "error");
        }
    }
}
