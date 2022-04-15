<?php

namespace App\Models;

use App\Models\Permissions;
use Illuminate\Support\Str;
use App\Models\Transactions;
use Laravel\Airlock\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, softDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'competitions_id', 'last_name', 'email', 'is_active', 'facebook_url', 'instagram_url', 'twitter_url', 'phone_number', 'avatar',
        //Emergency
        'emergency_name', 'emergency_phone_number', 'emergency_email', 'emergency_relationship',
        // Identity
        'nationality', 'town', 'bio', 'address', 'youtube_link', 'age', 'date_of_birth', 'place_of_birth', 'signature',
        // Medicals
        'height', 'weight', 'shoe_size', 'dress_size', 'hip_size', 'waist_size', 'bust_size', 'skin_color', 'blood_type',
        'is_vegetarian', 'can_smoke', 'dietary_needs', 'surgeries', 'recent_sickness', 'medications', 'allergies',
        //Persona
        "hobbies", "profession", "educational_cert", "ambition",
        //Travel
        "departure_airport_code", "passport_number"
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token'
    ];

    protected $guard_name = 'web';
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'created_at' => 'datetime:Y-m-d H:i:s'
    ];

    public function competitions()
    {
        return $this->belongsTo('App\Models\Competitions', 'competitions_id')->orderBy('year', 'desc');
    }

    public function transactions()
    {
        return $this->morphMany(Transactions::class, 'transactable');
    }

    public function permissions()
    {
        return $this->hasOne(Permissions::class, 'user_id');
    }
}
