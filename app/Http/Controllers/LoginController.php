<?php

namespace App\Http\Controllers;

use App\Http\Requests\ValidateLoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Log in to the web application.
     *
     * @OA\Post(
     *     path="/api/login",
     *     tags={"Авторизация, заполнение формы"},
     *     summary="Авторизация пользователя",
     *     operationId="authUser",
     *    @OA\Parameter(
     *             name="email",
     *             in="query",
     *             required=true,
     *             @OA\Schema(type="string"),
     *             description="Email пользователя"
     *         ),

     *     @OA\Parameter(
     *             name="password",
     *             in="query",
     *             required=true,
     *             @OA\Schema(type="string"),
     *             description="Пароль пользователя"
     *         ),
     *     @OA\Response(
     *         response="200",
     *         description="Ok",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Success"),
     *             @OA\Property(property="status", type="boolean", example=true)
     *         ),
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/ValidateLoginRequest")
     *     )
     * )
     **/

    public function login(ValidateLoginRequest $request)
    {
        $credentials = [
            'email' => $request['email'],
            'password' => $request['password'],
        ];

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'status' => false,
                'message' => "Неверный логин или пароль"
            ]);
        }
        if(User::where('email', $request->email)->get()->value('status') != 2) {
            return response()->json([
                'status' => false,
                'message' => "Пользователь не активен"
            ]);
        }
        return response()->json([
            'status' => true,
            'message' => "Success",
            'token' => $request->user()->createToken('sa_token')->plainTextToken
        ]);

    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'status' => true,
            'message' => 'Вы вышли из системы',
        ]);
    }
}
