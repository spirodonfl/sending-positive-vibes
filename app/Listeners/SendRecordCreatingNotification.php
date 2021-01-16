<?php

namespace App\Listeners;

use App\Events\RecordCreating;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendRecordCreatingNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  RecordCreating  $event
     * @return void
     */
    public function handle(RecordCreating $event)
    {
        //
    }
}
