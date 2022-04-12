<?php

namespace App\Http\Requests;

use App\Rules\Boolean;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class MedicalRequest extends FormRequest
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
            'height' => 'string|required',
            'weight' => 'string|required',
            'shoe_size' => 'numeric|max:50|required',
            'dress_size' => [
                'string',
                Rule::in(['xxl', 'xl', 'l', 'm', 's', 'none']),
                'nullable'
            ],
            'waist_size' => [
                'string',
                Rule::in(['xxl', 'xl', 'l', 'm', 's', 'none']),
                'nullable'
            ],
            'bust_size' => [
                'string',
                Rule::in(['xxl', 'xl', 'l', 'm', 's', 'none']),
                'nullable'
            ],
            'skin_color' => [
                'string',
                Rule::in(['Pale White', "Fair", "Light Brown", "Moderate Brown", "Dark Brown", "Black", 'None']),
                'nullable'
            ],
            'blood_type' => [
                'string',
                Rule::in(['A+', "A-", "B+", "B-", "O+", "O-", "AB+", "AB-", 'None']),
                'required'
            ],
            'is_vegetarian' => ['nullable', 'boolean'],
            'can_smoke' => ['nullable', 'boolean'],
            'dietary_needs' => 'string|max:200|nullable',
            'surgeries' => 'string|max:220|nullable',
            'recent_sickness' => 'string|max:220|nullable',
            'medications' => 'string|max:220|nullable',
            'allergies' => 'string|max:220|nullable',
        ];
    }
}
