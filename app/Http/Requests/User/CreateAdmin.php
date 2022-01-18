<?php

namespace App\Http\Requests\User;

use App\Rules\Boolean;
use Illuminate\Foundation\Http\FormRequest;

class CreateAdmin extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => 'required|string|max:20',
            'last_name' => 'required|string|max:20',
            'email' => 'required|unique:App\Models\User|email:rfc',
            'password' => 'required|confirmed|min:6',
            'avatar' => 'nullable|mimes:jpg,jpeg,png|mimetypes:image/jpg,image/jpeg,image/png|max:800',
            'facebook_url' => 'nullable|url|max:100',
            'twitter_url' => 'nullable|url|max:100',
            'phone_number' => 'nullable|digits_between:11,14',
            'tickets' => ['nullable', new Boolean],
            'transactions' => ['nullable', new Boolean],
            'competitions' => ['nullable', new Boolean],
            'users' => ['nullable', new Boolean],
            'settings' => ['nullable', new Boolean]
        ];
    }
}
