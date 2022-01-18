<?php

namespace App\Models;

use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Model;

class Competitions extends Model
{
    protected $table = 'competitions';
    protected $appends = ['has_expired'];

    protected $fillable = [
        'start_date', 'end_date', 'is_current', 'year'
    ];

    public function getHasExpiredAttribute(): bool
    {
        $end_date = Carbon::createFromFormat('Y-m-d', $this->end_date);
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
