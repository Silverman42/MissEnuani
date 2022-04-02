<?php

namespace App\Http\Requests\User;

use App\Rules\Boolean;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateClientCompetitionData extends FormRequest
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
            'competition_id' => 'required|number',
            'has_paid' => ['required', new Boolean],
            'profile_stage' => ['required', Rule::in(['payment', 'audition', 'finals'])],
            'position' => 'required|number|max:10',
        ];
    }
}
