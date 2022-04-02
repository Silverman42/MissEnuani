<?php

namespace App\Traits;

use App\Models\User;

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
        foreach ($permissionSet as $name => $value) {
            (filter_var($value, FILTER_VALIDATE_BOOLEAN) === true) ?
                $user->givePermissionTo($name)
                : $user->revokePermissionTo($name);
        }
    }
}
