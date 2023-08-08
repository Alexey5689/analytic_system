<?php
namespace App\Http\Controllers;

use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\ResendEmailRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Auth\Events\PasswordReset;

class ForgotPasswordController extends Controller
{
      /**
      * Generate a link to recover your password.
      *
      * @OA\Post(
      *     path="/api/forget-password",
      *     tags={"Генерация ссылки для сброса пароля"},
      *     summary="Обрабатывает логику отправки письма с ссылкой для сброса пароля на указанный email",
      *     operationId="forgetPassword",
      *     @OA\Parameter(
      *             name="email",
      *             in="query",
      *             required=true,
      *             @OA\Schema(type="string"),
      *             description="Введение email пользователем"
      *     ),
      *     @OA\Response(
      *         response="200",
      *         description="Ok",
      *         @OA\JsonContent(
      *             @OA\Property(property="message", type="string", example="Оk"),
      *             @OA\Property(property="status", type="boolean", example=true)
      *         )
      *     ),
      *      @OA\RequestBody(
      *        required=true,
      *     @OA\JsonContent(ref="#/components/schemas/ForgotPasswordRequest")
      *      )
      * )
      *
      **/

    public function forget_current_password(ForgotPasswordRequest $request)
    {
        $status = Password::sendResetLink(
            $request->only('email')
        );

        if($status === Password::RESET_LINK_SENT)
        {
            return response()->json([
                'message' => "Оk",
                'status' => true
            ]);
        }
        return response()->json([
            'message' => "error",
            'status' => false
        ]);
    }

    /**
     * Recover your password.
     *
     * @OA\Post(
     *     path="/api/reset",
     *     tags={"Страница восстановления пароля после перехода по ссылке"},
     *     summary="Страница восстановления пароля после перехода по ссылке",
     *     operationId="/api/reset(POST)",
     *     @OA\Parameter(
     *             name="password",
     *             in="query",
     *             required=true,
     *             @OA\Schema(type="string"),
     *             description="Пароль пользователя"
     *         ),
     *      @OA\Parameter(
     *             name="password_confirmed",
     *             in="query",
     *             required=true,
     *             @OA\Schema(type="string"),
     *             description="Подтверждение пароля пользователя"
     *         ),
     *     @OA\Response(
     *         response="200",
     *         description="Ok",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Оk"),
     *             @OA\Property(property="status", type="boolean", example=true)
     *         )
     *     ),
     *      @OA\RequestBody(
     *        required=true,
     *           @OA\JsonContent(ref="#/components/schemas/ResetPasswordRequest")
     *      )
     * )
     *
     **/

    public function assigning_new_password(ResetPasswordRequest $request)
        {
            $status = Password::reset(
                $request->only( 'password', 'password_confirmation', 'token', 'email'),
                function (User $user, string $password) {

                    $user->forceFill([
                        'password' => Hash::make($password)
                    ])->setRememberToken(Str::random(60));
                    $user->save();

                    event(new PasswordReset($user));
                }
            );

            if ($status === Password::PASSWORD_RESET) {
                return response()->json([
                    'message' => "Оk",
                    'status' => true,
                ]);
            } else {
                return response()->json([
                    'message' => "Ошибка",
                    'status' => false
                ]);
            }
        }
}
