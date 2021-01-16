<?php

namespace App\JsonApi\Records;

use Neomerx\JsonApi\Schema\SchemaProvider;

class Schema extends SchemaProvider
{

    /**
     * @var string
     */
    protected $resourceType = 'records';

    /**
     * @param \App\Record $resource
     *      the domain record being serialized.
     * @return string
     */
    public function getId($resource)
    {
        return (string) $resource->getRouteKey();
    }

    /**
     * @param \App\Record $resource
     *      the domain record being serialized.
     * @return array
     */
    public function getAttributes($resource)
    {
        return [
            'meta_data' => $resource->meta_data,
            'date_time' => $resource->date_time,
            'geohash' => $resource->geohash,
            'reaction' => $resource->reaction,
            'hits' => $resource->hits,
            'createdAt' => $resource->created_at,
            'updatedAt' => $resource->updated_at,
        ];
    }
}
