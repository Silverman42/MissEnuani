<?php

namespace App\Repository;

use App\Models\Transactions;
use App\Repository\BaseRepository;

class CompetitonRepository extends BaseRepository
{
    protected $modelClass = Transactions::class;
}
