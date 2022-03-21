<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Exception;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class UserController extends BaseController
{
    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|min:4',
            'email' => 'required|email',
            'password' => 'required|min:8',
            'age' => 'required',
            'mobile_no' => 'required',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'age' => $request->age,
            'mobile_no' => $request->mobile_no,
        ]);

        $token = $user->createToken('Laravel-9-Passport-Auth')->accessToken;

        return response()->json(['token' => $token], 200);
    }

    public function update(Request $request)
    {
        try {
            //code...
            $this->validate($request, [
                'id' => 'required',
                'name' => 'required|min:4',
                'age' => 'required',
                'mobile_no' => 'required',
            ]);

            $user = User::findOrFail($request->id);

            $user->name = $request->name;
            $user->age = $request->age;
            $user->mobile_no = $request->mobile_no;
            $user->save();

            return response()->json(['success' => true], 200);
        } catch (Exception $e) {
            Log::error($e);
            return response()->json(['error' => $e->getMessage()], 500);
        }

    }

    public function login(Request $request)
    {
        $data = [
            'email' => $request->email,
            'password' => $request->password
        ];

        if (auth()->attempt($data)) {
            $token = auth()->user()->createToken('Laravel-9-Passport-Auth')->accessToken;
            $name = auth()->user()->name;
            return response()->json(['token' => $token, 'name' => $name], 200);
        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    }

    public function userInfo()
    {

        $user = auth()->user();

        return response()->json(['user' => $user], 200);
    }

    public function check()
    {

        $user = auth()->user();

        return response()->json(['user' => $user], 200);
    }

    public function all(Request $request)
    {

        $users = User::query();
        if($request->search){
            $users->where('name', 'like', $request->search."%");
        }

        return response()->json(['users' => $users->get()], 200);
    }

    public function delete(Request $request)
    {
        try {
            //code...
            $this->validate($request, [
                'id' => 'required',
            ]);

            $user = User::findOrFail($request->id);
            $user->delete();

            return response()->json(['success' => true], 200);
        } catch (Exception $e) {
            Log::error($e);
            return response()->json(['error' => $e->getMessage()], 500);
        }

    }
}
