<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class PersonaRequest extends FormRequest
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
            "hobbies" => 'string|nullable|max:120',
            "profession" => 'string|nullable|max:120',
            "educational_cert" => [
                'required',
                Rule::in(['Secondary School Certificate', "Bachelor Degree", "Master Degree (MSC)", "Doctrorate Degree (PhD)"])
            ],
            "ambition" => 'string|nullable|max:120'
        ];
    }
}
