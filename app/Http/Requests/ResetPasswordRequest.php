<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ResetPasswordRequest extends FormRequest
{
    /**
     * @OA\Schema(
     *      required={"password", "password confirmed"},
     *      schema="ResetPasswordRequest",
     *      @OA\Property(property="password", type="string",  example="123QWEqwe1!", description="Пароль"),
     *      @OA\Property(property="password confirmed", type="string", example="123QWEqwe1!", description="Подтверждение пароля пользователя"),
     * )
     *
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
            'email' => 'required',
            'password' => 'required|confirmed|max:255',
            'token' => 'required'
        ];
    }

    public function messages(): array
    {
        return [
            'email.required' => 'Вы не указали email',
            'password.max' => 'Вы указали слишком длинный пароль',
            'password.required' => 'Вы не указали пароль',
            'password.confirmed' => 'Введите подтверждение пароля',
        ];
    }
}
