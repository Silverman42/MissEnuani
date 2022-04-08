<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Models\Competitions;
use Illuminate\Http\Request;
use App\Services\FreeSlotService;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function register(Request $request)
    {
        $this->validator($request->all())->validate();
        $competition = Competitions::find(settings()['current_competition_id']);
        if (!$competition) {
            return redirect()->back()->with([
                "error" => "No competition found"
            ]);
        }
        if ($competition->hasExpired) {
            $competition_name = settings()['app_name'] . " {$competition->year}";
            return redirect()->back()->with([
                "error" => "The Registration date for {$competition_name} has expired"
            ]);
        }
        try {
            event(new Registered($user = $this->create($request->all())));
            $this->guard()->login($user);
            $free_slot = new FreeSlotService;
            $free_slot->giveSlot($competition, $user);
        } catch (\Throwable $th) {
            logger($th);
        }
        return $this->registered($request, $user)
            ?: redirect($this->redirectPath());
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
        $user = new User;
        $user->first_name = $data['first_name'];
        $user->last_name = $data['last_name'];
        $user->email = $data['email'];
        $user->password = Hash::make($data['password']);
        $user->competitions_id = settings()['current_competition_id'];
        $user->is_admin = false;
        $user->save();
        return $user;
    }

    /**
     * The user has been registered.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function registered(Request $request, $user)
    {
        // try {
        //     $free_slot = new FreeSlotService;
        //     $competition = Competitions::find(settings()['current_competition_id']);
        //     $free_slot->giveSlot($competition, $user);
        //     return redirect()->route('client.dashboard');
        // } catch (\Throwable $th) {
        //     //throw $th;
        //     logger($th);
        //     return redirect()->back();
        // }
        return redirect()->route('client.dashboard');
    }
}
