<?php

namespace App\Http\Controllers;

 use App\Http\Requests\ValidateRegisterRequest;
 use Illuminate\Http\Request;
 use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(ValidateRegisterRequest $request)
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
                    'message' => "Пользователь с таким email не найден"
            ]);
    }



}
