<?php

namespace App\Traits;

use App\Models\User;
use App\Models\Permissions;

/**
 * @trait AssignAdminPermission
 * 
 * Assign permission to admin according to the name of the permissions set in the 
 * user config file
 */

trait AdminPermissionSetting
{
    protected function addPermissions(array $permissionSet, User $user)
    {
        $filteredPermissionValues = array_map(function ($value) {
            return filter_var($value, FILTER_VALIDATE_BOOLEAN);
        }, $permissionSet);
        Permissions::updateOrCreate([
            'user_id' => $user->id,
        ], $filteredPermissionValues);
    }
}
