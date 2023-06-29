<?php

namespace App\Http\Controllers;

use App\Http\Requests\ValidateRegisterRequest;
use App\Mail\VerifyMail;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;


class RegisterController extends Controller
{
    public function store(ValidateRegisterRequest $request)
    {
        $user = User::create([
            'name' => $request ['name'],
            'tel' => $request ['tel'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
            'verify_token' => Str::random(),
            'status' => User::STATUS_INACTIVE,
        ]);
        Mail::to($user->email)->send(new VerifyMail($user));

        return response()->json([
            'message' => "Пользователь успешно зарегистрирован",
            'status' => true
        ]);

    }

    public function verify($token)
    {
        if (!$user = User::where('verify_token', $token)->first()) {
            return response()->json([
                'error' => 'Verification failed',
                'message' => "Пользователь с таким ID не найден",
                'status' => false
            ]);
        }
        $user->email_verified_at = now();
        $user->status = User::STATUS_ACTIVE;
        $user->verify_token = null;
        $user->save();
        return response()->json([
            'message' => "Email подтвержден",
            'status' => true
        ]);
    }

}
