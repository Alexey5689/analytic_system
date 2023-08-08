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
