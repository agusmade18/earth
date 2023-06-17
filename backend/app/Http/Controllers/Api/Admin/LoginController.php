<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //Set Validator
        $validator = Validator::make($request->all(), [
            'email'     => 'required|email',
            'password'  => 'required|'
        ]);

        // If Validator Fail
        if($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $user = User::where('email', $request->email)->first();

        // If Password user dan password not same
        if(!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'success'   => false,
                'message'   => 'Login Failed',
            ], 400);
        }

        // User Success Login dan create token 
        return response()->json([
            'success'   => true,
            'message'   => 'Login Successfully',
            'user'      => $user,
            'token'     => $user->createToken('authToken')->accessToken
        ], 200);
    }
}
