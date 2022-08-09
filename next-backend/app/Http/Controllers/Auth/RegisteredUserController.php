<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'name' => ['required', 'string', 'max:255'],
                'phone_number' => ['required', 'string', 'max:255', 'unique:users', 'starts_with:09', 'digits:10'],
                'password' => ['required', 'confirmed', Rules\Password::defaults()],
            ],
            [
                'phone_number.starts_with' => 'Only phone number startes with 09 is valid',
            ]
        );

        if (isset($request->email)) {
            $this->validate(
                $request,
                [
                    'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],

                ]
            );
        }

        $user = User::create([
            'name' => $request->name,
            'phone_number' => $request->phone_number,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return response()->noContent();
    }
}
