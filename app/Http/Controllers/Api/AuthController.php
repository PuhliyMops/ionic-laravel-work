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
            'name' => ['required'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {

            $request->session()->regenerate();

            Cache::put("user", Auth::user());

            return Cache::get("user");

        }
        return back()->withErrors("Нет такого пользователя");
    }

    public function registration(Request $request)
    {

        $request->validate([
            'username' => ['required', 'max:50', 'string', 'unique:users,name'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'confirmed'],
        ]);

        $user = new User;

        $user->name = $request->username;
        $user->email = $request->email;
        $user->password = $request->password;

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
