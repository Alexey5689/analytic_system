<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ForgotPasswordRequest extends FormRequest
{
    /**
     *      @OA\Schema(
     *      schema="ForgotPasswordRequest",
     *      required={"email"},
     *      @OA\Property(property="email", type="string",  example="egorov@mail.ru", description="Email пользователя"),
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
            'email' => 'required|email:rfc,dns',
        ];
    }

    public function messages(): array {
        return [
            'email.email' => 'Должен быть указан действительный адрес электронной почты',
            'email.required'  => 'Вы не указали email',
            ];
    }
}
