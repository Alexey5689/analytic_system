<?php

namespace App\Http\Controllers;

use App\Http\Requests\ValidateLoginRequest;
use App\Mail\ResetPasswordMail;
use App\Models\User;
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

        if (Auth::attempt($credentials)) {
            return response()->json([
                'status' => true,
                'message' => "Success",
                'token' => $request->user()->createToken('sa_token')->plainTextToken
            ]);
        }
        return response()->json([
            'status' => false,
            'message' => "Неверный логин или пароль"
        ]);
    }

    public function reset_password($token) {
        Mail::to(User::where('verify_token', $token)->email)->send(new ResetPasswordMail(User::where('verify_token')->name));
    }


}
