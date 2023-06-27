<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidateLoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|email:rfc,dns',
            'password' => 'required'
        ];
    }

    public function messages(): array {
        return [
            'email.email' => 'Должен быть указан действительный адрес электронной почты',
            'email.required'  => 'Вы не указали email',
            'password.required'  => 'Вы не указали пароль',
        ];
    }
}

