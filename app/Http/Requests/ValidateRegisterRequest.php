<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidateRegisterRequest extends FormRequest
{
    /**
     *     @OA\Schema(
     *     schema="ValidateRegisterRequest",
     *     required={"name", "tel", "email", "password"},
     *     @OA\Property(property="name", type="string", example="Егоров Егор Егорович", description="ФИО"),
     *     @OA\Property(property="tel", type="string", example="89228222212", description="Номер телефона"),
     *     @OA\Property(property="email", type="string", example="egorov@mail.ru", description="Email пользователя"),
     *     @OA\Property(property="password", type="string", example="123QWEqwe1!", description="Пароль"),
     *     @OA\Property(property="password confirmed", type="string", example="123QWEqwe1!", description="Пароль"),
     *     )
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
            'name' => 'min:2|max:255',
            'tel' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:10',
            'email' => 'required|unique:users|max:255',
            'password' => 'required|confirmed|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%_]).{8,24}$/',
        ];
    }

    public function messages(): array
    {
        return [
            'email.unique' => 'Вы указали уже существующий email',
            'email.required' => 'Вы не указали email',
            'password.required' => 'Вы не указали пароль',
            'email.max' => 'Вы указали слишком длинный email',
            'password.max' => 'Вы указали слишком длинный пароль',
            'name.min' => 'Слишком короткое имя пользователя',
            'name.max' => 'Слишком длинное имя пользователя',
            'tel.required' => 'Вы не указали номер',
            'tel.regex' => 'Неверный формат номера',
            'password.regex' => 'Пароль должен содержать латинские буквы, одну в верхнем регистре, число и спец. символ, минимальная длина пароля - 8 символов'
        ];
    }
}
