<?php

namespace App\Models;

use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Model;

class Competitions extends Model
{
    protected $table = 'competitions';
    protected $appends = ['has_expired'];

    protected $fillable = [
        'reg_start_date', 'reg_end_date', 'event_date', 'free_slot', 'is_current', 'year'
    ];

    public function getHasExpiredAttribute(): bool
    {
        $end_date = Carbon::createFromFormat('Y-m-d', $this->reg_end_date);
        if (Carbon::now()->gt($end_date)) {
            return true;
        }
        return false;
    }

    public function users()
    {
        return $this->hasMany('App\Models\Users', 'competitions_id');
    }

    public function transactions()
    {
        return $this->hasMany('App\Models\Transactions', 'competitions_id');
    }
}
