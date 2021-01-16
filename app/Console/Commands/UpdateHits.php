<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Hit;
use App\Models\Record;

class UpdateHits extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:hits';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Updates the hits from children to parent and archives old hits/records';

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
     * @return int
     */
    public function handle()
    {
//		$allHits = Hit::all();
//		foreach ($allHits as $key => $value) {
//			$value->hits = 0;
//			$value->child_hits = 0;
//			$value->level = 0;
//			if ($value->save()) {
//				$this->info('hit reset');
//			}
//		}

		$allRecords = Record::where('created_at', '>=', \Carbon\Carbon::now()->subMinutes(60)->toDateTimestring())->get();
        // $allRecords = Record::all();
        foreach ($allRecords as $key => $value) {
            $hit = Hit::where('geohash', $value->geohash)->where('reaction', $value->reaction)->first();
            if ($hit) {
                $hit->hits += $value->hits;
                if ($hit->hits < 1000) {
                    $hit->level = 1;
                } else if ($hit->hits > 1000) {
                    $hit->level = 2;
                } else if ($hit->hits > 5000) {
					$hit->level = 3;
				} else if ($hit->hits > 10000) {
					$hit->level = 4;
				} else if ($hit->hits > 20000) {
					$hit->level = 5;
				} else if ($hit->hits > 50000) {
					$hit->level = 6;
				} else if ($hit->hits > 100000) {
					$hit->level = 7;
				} else if ($hit->hits > 250000) {
					$hit->level = 8;
				} else if ($hit->hits > 500000) {
					$hit->level = 9;
				} else if ($hit->hits > 1000000) {
					$hit->level = 10;
				}
				if ($hit->child_hits < 1000) {
                    $hit->child_level = 1;
                } else if ($hit->child_hits > 1000) {
                    $hit->child_level = 2;
                } else if ($hit->child_hits > 5000) {
					$hit->child_level = 3;
				} else if ($hit->child_hits > 10000) {
					$hit->child_level = 4;
				} else if ($hit->child_hits > 20000) {
					$hit->child_level = 5;
				} else if ($hit->child_hits > 50000) {
					$hit->child_level = 6;
				} else if ($hit->child_hits > 100000) {
					$hit->child_level = 7;
				} else if ($hit->child_hits > 250000) {
					$hit->child_level = 8;
				} else if ($hit->child_hits > 500000) {
					$hit->child_level = 9;
				} else if ($hit->child_hits > 1000000) {
					$hit->child_level = 10;
				}
				if (($hit->child_hits + $hit->hits) < 1000) {
                    $hit->total_level = 1;
                } else if (($hit->child_hits + $hit->hits) > 1000) {
                    $hit->total_level = 2;
                } else if (($hit->child_hits + $hit->hits) > 5000) {
					$hit->total_level = 3;
				} else if (($hit->child_hits + $hit->hits) > 10000) {
					$hit->total_level = 4;
				} else if (($hit->child_hits + $hit->hits) > 20000) {
					$hit->total_level = 5;
				} else if (($hit->child_hits + $hit->hits) > 50000) {
					$hit->total_level = 6;
				} else if (($hit->child_hits + $hit->hits) > 100000) {
					$hit->total_level = 7;
				} else if (($hit->child_hits + $hit->hits) > 250000) {
					$hit->total_level = 8;
				} else if (($hit->child_hits + $hit->hits) > 500000) {
					$hit->total_level = 9;
				} else if (($hit->child_hits + $hit->hits) > 1000000) {
					$hit->total_level = 10;
				}
                if ($hit->save()) {
                    $this->info('save');
                }
            } else {
                $create = [
                    'geohash' => $value->geohash,
                    'hits' => $value->hits,
                    'child_hits' => $value->hits,
                    'reaction' => $value->reaction,
                    'level' => 1
                ];
                Hit::create($create);
                $this->info('created');
            }

			if (strlen($value->geohash) > 1) {
				$geohash = $value->geohash;
				while (strlen($geohash) > 1) {
					$hit = Hit::where('geohash', $geohash)->where('reaction', $value->reaction)->first();
					if ($hit) {
						$hit->child_hits += $value->hits;
						if ($hit->save()) {
							$this->info('parent save');
						}
					} else {
						$create = [
							'geohash' => $geohash,
							'hits' => $value->hits,
							'child_hits' => $value->hits,
							'reaction' => $value->reaction,
							'level' => 1
						];
						Hit::create($create);
						$this->info('parent created');
					}
					$geohash = substr($geohash, 0, -1);
				}
			}
        }

		//\Spatie\ResponseCache\Facades\ResponseCache::clear(['hits']);
		//Cache::tags('hits')->flush();
		//$this->info('cache flushed');

        return 0;
    }
}
