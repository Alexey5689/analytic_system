<?php

namespace App\Http\Controllers;

use App\Http\Requests\ValidateLoginRequest;
use App\Mail\ResetPasswordMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class LoginController extends Controller
{

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
