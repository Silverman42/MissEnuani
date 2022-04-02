<?php

namespace App\Http\Controllers\Users\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\AdminPermissionSetting;

class UpdatePermissions extends Controller
{
    use AdminPermissionSetting;
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(UpdatePermissions $request, $id)
    {
        $user = User::find($id);
        try {
            $this->addPermissions($request->only(config('user.admin.permissions')), $user);
            return $this->redirectBack("Permission updated", "The admin's permission has been succesfully updated", "success");
        } catch (\Throwable $th) {
            logger($th);
            return $this->redirectBack("Permission update failed", "The admin's permission failed to update", "error");
        }
    }
}
