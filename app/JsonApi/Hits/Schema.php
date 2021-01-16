<?php

namespace App\JsonApi\Hits;

use Neomerx\JsonApi\Schema\SchemaProvider;

class Schema extends SchemaProvider
{

    /**
     * @var string
     */
    protected $resourceType = 'hits';

    /**
     * @param \App\Hit $resource
     *      the domain record being serialized.
     * @return string
     */
    public function getId($resource)
    {
        return (string) $resource->getRouteKey();
    }

    /**
     * @param \App\Hit $resource
     *      the domain record being serialized.
     * @return array
     */
    public function getAttributes($resource)
    {
        return [
            'geohash' => $resource->geohash,
            'hits' => $resource->hits,
            'child_hits' => $resource->child_hits,
            'reaction' => $resource->reaction,
            'level' => $resource->level,
            'createdAt' => $resource->created_at,
            'updatedAt' => $resource->updated_at,
        ];
    }
}
