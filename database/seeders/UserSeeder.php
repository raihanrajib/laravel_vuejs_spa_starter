<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'=>'rajib raihan',
            'email'=>'dev_rajib@gmail.com',
            'password'=>bcrypt('password')
        ]);
    }
}
