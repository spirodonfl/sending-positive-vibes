<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Hit;

class HitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Hit::create([
            'geohash' => 's',
            'hits' => 20,
            'child_hits' => 20,
            'reaction' => 0,
            'level' => 1
        ]);
        Hit::create([
            'geohash' => 's',
            'hits' => 20,
            'child_hits' => 20,
            'reaction' => 1,
            'level' => 1
        ]);
        Hit::create([
            'geohash' => 's',
            'hits' => 20,
            'child_hits' => 20,
            'reaction' => 5,
            'level' => 1
        ]);
    }
}
