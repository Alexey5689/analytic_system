<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ResetPasswordRequest extends FormRequest
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
            'email' => 'required|email',
            'password' => 'required|confirmed|max:255|min:8',
            'token' => 'required'
        ];
    }

    public function messages(): array
    {
        return [
            'password.max' => 'Вы указали слишком длинный пароль',
            'password.required' => 'Вы не указали пароль',
            'password.confirmed' => 'Введите подтверждение пароля',
            'email.email' => 'Должен быть указан действительный адрес электронной почты',
            'email.required'  => 'Вы не указали email',

        ];
    }
}
