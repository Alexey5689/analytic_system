<?php

namespace App\Http\Controllers;

use App\Http\Requests\ValidateRegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;


class RegisterController extends Controller
{
    public function store(ValidateRegisterRequest $request)
    {

        $user = User::create([
            'email' => $request['email'],
            'password' => Hash::make($request['password'])
        ]);

        return response()->json([
                'message' => "Registation Success",
                'token' => $user->createToken('token_name')->plainTextToken
            ]);
    }
}
