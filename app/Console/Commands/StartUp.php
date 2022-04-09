<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Models\Settings;
use App\Models\Statistics;
use App\Models\Permissions;
use App\Models\Competitions;
use App\Models\Transactions;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Artisan;

class StartUp extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'start:setup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command runs the migrations, roles and permissions are been setup';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->info('New migrations are been fired up, relax while you get served...');
        Artisan::call('key:generate');
        Artisan::call('migrate:fresh');
        $this->info('Creating super admin ....');
        $this->createSuperAdmin();
        $this->info('Creating app setting ....');
        $this->createSettings();
        $this->info('Creating current competition ....');
        $competition = $this->createDefaultCompetition();
        $this->info('Creating client ....');
        $this->createClient($competition->id);
        $this->info('Initializing Other models ....');
        $this->initializeOtherModels();
        $this->info('Creating new statistics information ....');
        $this->createStatistics();
        $this->info('Your app is prepared and ready fly. Awesome !!');
    }

    public function initializeOtherModels()
    {
        $transaction = new Transactions();
        $transaction->id = 998867;
        $transaction->save();
    }

    public function createStatistics()
    {
        $statistics = new Statistics();
        $statistics->naira_balance = 0.00;
        $statistics->save();
    }

    public function setAdminPermissions($user)
    {
        Permissions::create([
            'modify_tickets' => true,
            'modify_transactions' => true,
            'modify_competitions' => true,
            'modify_users' => true,
            'modify_settings' => true,
            'user_id' => $user->id
        ]);
    }

    public function createSuperAdmin()
    {
        $admin = new User;
        $admin->password = Hash::make('secret2020');
        $admin->first_name = 'Super';
        $admin->last_name = 'Admin';
        $admin->is_admin = true;
        $admin->email = 'admin@enuani.com';
        $admin->id = 998867;
        $admin->save();
        $this->setAdminPermissions($admin);
    }

    public function createClient(int $competition_id)
    {
        $client = new User;
        $client->password = Hash::make('secret2020');
        $client->first_name = 'Anita';
        $client->last_name = 'James';
        $client->email = 'anita@gmail.com';
        $client->competitions_id = $competition_id;
        $client->is_admin = false;
        $client->save();
    }

    public function createSettings()
    {
        $settings = new Settings;
        $settings->app_name = 'MEBP';
        $settings->naira_charge = 5000;
        $settings->color_scheme = "pink";
        $settings->dollar_charge = 50;
        $settings->app_url = config('app.url');
        $settings->save();
    }

    public function createDefaultCompetition()
    {
        $competition = new Competitions;
        $competition->year = '2022';
        $competition->reg_start_date = "2022-1-13";
        $competition->reg_end_date = "2022-6-13";
        $competition->event_date = "2022-8-13";
        $competition->is_current = true;
        $competition->free_slot = 30;
        $competition->id = 998867;
        $competition->save();
        $setting = Settings::first();
        $setting->current_competition_id = $competition->id;
        $setting->save();
        return $competition;
    }
}
