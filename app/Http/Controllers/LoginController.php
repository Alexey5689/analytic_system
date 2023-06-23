<?php

namespace App\Http\Controllers;

 use Illuminate\Http\Request;
 use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
            $credentials = $request->validate([
                'email' => ['required', 'email'],
                'password' => ['required'],
            ]);

            if (Auth::attempt($credentials)) {
                return response()->json([
                    'status' => true,
                    'message' => "Success",
                    'token' => $request->user()->createToken('sa_token')->plainTextToken
                ]);
            }
            return response()->json([
                    'status' => false,
                    'message' => "Fail"
            ]);
    }



}
