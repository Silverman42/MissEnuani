<?php

namespace App\Repositories;

use App\Models\Competitions;
use App\Repositories\BaseRepository;

class CompetitionRepository extends BaseRepository
{

    protected $modelClass = Competitions::class;
}
