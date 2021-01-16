<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Events\RecordCreating;

class Record extends Model
{
    use HasFactory;

    /**
     * The event map for the model.
     *
     * @var array
     */
    protected $dispatchesEvents = [
        'creating' => RecordCreating::class
    ];

    protected $fillable = ['geohash', 'reaction', 'hits', 'meta_data', 'date_time'];
}
