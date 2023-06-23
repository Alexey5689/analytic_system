<?php

namespace App\Http\Controllers;

use App\Http\Requests\ValidateRegisterRequest;
use App\Mail\OrderShipped;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;


class RegisterController extends Controller
{
    public function store(ValidateRegisterRequest $request)
    {
        $user = User::create([
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
            'verify_token' => Str::random(),
            'status' => User::STATUS_INACTIVE,
        ]);
        Mail::to($user->email)->send(new OrderShipped($user));

        return response()->json([
            'message' => "Пользователь успешно зарегистрирован"
        ]);

    }

    public function register(ValidateRegisterRequest $request)
    {
        event(new Registered($user = $this->create($request->all())));

        return redirect()->route('login')
            ->with('success', 'Необходимо подтвердить ваш email');
    }

    public function verify($token)
    {
        if (!$user = User::where('verify_token', $token)->first()) {
            return response()->json([
                'error' => 'Verification failed',
                'message' => "Пользователь с таким ID не найден"
            ]);
        }
        $user->status = User::STATUS_ACTIVE;
        $user->verify_token = null;
        $user->save();
        return response()->json([
            'message' => "Email подтвержден"
        ]);
    }

}
