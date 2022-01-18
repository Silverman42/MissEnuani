<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class CreateClient extends FormRequest
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
            'position' => 'required|number|digits:1',
            'competition_id' => 'required|number',
            'phone_number' => 'nullable|digits_between:11,14',
        ];
    }
}
