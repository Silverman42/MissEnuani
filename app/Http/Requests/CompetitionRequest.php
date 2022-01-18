<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CompetitionRequest extends FormRequest
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
            'year' => 'number|required|digits:4|min:2000',
            'start_date' => 'required|date|date_format:m/d/y',
            'end_date' => 'required|date|date_format:m/d/y',
            'is_current' => 'nullable|bool'
        ];
    }
}
