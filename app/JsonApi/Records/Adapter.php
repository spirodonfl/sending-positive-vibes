<?php

namespace App\JsonApi\Records;

use CloudCreativity\LaravelJsonApi\Eloquent\AbstractAdapter;
use CloudCreativity\LaravelJsonApi\Pagination\StandardStrategy;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;

class Adapter extends AbstractAdapter
{

    /**
     * Mapping of JSON API attribute field names to model keys.
     *
     * @var array
     */
    protected $attributes = [];

    /**
     * Mapping of JSON API filter names to model scopes.
     *
     * @var array
     */
    protected $filterScopes = [];

    /**
     * Adapter constructor.
     *
     * @param StandardStrategy $paging
     */
    public function __construct(StandardStrategy $paging)
    {
        parent::__construct(new \App\Models\Record(), $paging);
    }

    /**
     * @param Builder $query
     * @param Collection $filters
     * @return void
     */
    protected function filter($query, Collection $filters)
    {
        $this->filterWithScopes($query, $filters);
    }

    protected function fillAttributes($record, \Illuminate\Support\Collection $attributes) {
        // NOTE: While the below works and we're keeping it here for example purposes, the "creating" is a better option and also works
        // $attributes['meta_data'] = json_encode($_SERVER);
        // $attributes['date_time'] = 'NOW()';
        // parent::fillAttributes($record, $attributes);
    }

    // NOTE: In order for this to work, we had to create a "make:event RecordCreating" class and a "make:event SendRecordCreatingNotification --event=RecordCreating" class and then update "Providers\EventServiceProvider" to listen to the event
    protected function creating($record, $resource) {
        $record->meta_data = json_encode($_SERVER);
        $record->date_time = 'NOW()';
        $record->geohash = $resource->geohash;
        $record->reaction = $resource->reaction;
		if ($resource->hits > 100) {
			$record->hits = 100;
		} else {
	        $record->hits = $resource->hits;
		}
    }

}
