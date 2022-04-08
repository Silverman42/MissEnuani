<?php

namespace App\Services;

use App\Models\User;
use App\Models\Competitions;

/**
 * This services checks if there is free registration slot available
 * in a created competition. If the slot is available, the slot is given 
 * to the registerer while the free slut count in the competition model is 
 * is deducted till it gets to zero (0) slots.
 */
class FreeSlotService
{
    public function hasAvailableSlot($competition): Bool
    {
        if ($competition->free_slot > 0) return true;
        return false;
    }

    public function giveSlot(Competitions $competition, User $user)
    {
        if (!$this->hasAvailableSlot($competition)) {
            return null;
        }
        $competition->free_slot--;
        $competition->save();
        $this->updateUserStatus($user);
    }

    public function updateUserStatus($user)
    {
        $user->has_paid = true;
        $user->profile_stage = 'audition';
        $user->save();
    }
}
