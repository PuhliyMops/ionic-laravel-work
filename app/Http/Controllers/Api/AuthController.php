<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redis;

class AuthController extends Controller
{
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {

            $request->session()->regenerate();

            return Auth::user();

        }
        return back()->withErrors("Нет такого пользователя");
    }

    public function registration(Request $request)
    {

        $request->validate([
            'username' => ['required', 'max:50', 'string', 'unique:users,username'],
            'firstname' => ['required', 'max:50', 'string'],
            'lastname' => ['required', 'max:50', 'string'],
            'middlename' => ['max:50', 'string'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'confirmed'],
        ]);

        $user = new User;

        $user->name = $request->username;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->fistname = $request->firstname;
        $user->lastname = $request->lastname;
        $user->middlename = $request->middlename;
        $user->role = 'user';

        $user->save();

        event(new Registered($user));


        return $request;
    }

    public function log_out(Request $request): RedirectResponse
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }



}
