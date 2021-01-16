<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Record;

class RecordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $objectSample = new \stdClass();
        $objectSample->ip = '192.168.0.0.1';
        Record::create([
            'meta_data' => json_encode($objectSample),
            'date_time' => 'NOW()',
            'geohash' => 's',
            'reaction' => 1,
            'hits' => 10
        ]);
    }
}
