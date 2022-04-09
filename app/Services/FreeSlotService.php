<?php

namespace App\Services;

use App\Models\User;
use App\Models\Statistics;
use App\Models\Competitions;
use App\Models\Transactions;

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
        $this->createTransactionEntry($user);
        $competition->save();
        $this->updateUserStatus($user);
    }

    public function updateUserStatus($user)
    {
        $user->has_paid = true;
        $user->profile_stage = 'audition';
        $user->save();
    }

    public function createTransactionEntry($user)
    {
        $transactions = new Transactions;
        $transactions->is_completed = true;
        $transactions->amount = 0;
        $transactions->transactable_type = User::class;
        $transactions->transactable_id = $user->id;
        $transactions->competitions_id = settings()['current_competition_id'];
        $transactions->email = $user->email;
        $transactions->balance = Statistics::first()->naira_balance ?? 0;
        $transactions->reference_id = paystack()->genTranxRef();
        $transactions->save();
    }
}
