<?php

namespace App\Http\Requests\User;

use App\Rules\Boolean;
use Illuminate\Foundation\Http\FormRequest;

class UpdateAdminPermissions extends FormRequest
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
            'modify_tickets' => ['nullable', new Boolean],
            'modify_transactions' => ['nullable', new Boolean],
            'modify_competitions' => ['nullable', new Boolean],
            'modify_users' => ['nullable', new Boolean],
            'modify_settings' => ['nullable', new Boolean]
        ];
    }
}
