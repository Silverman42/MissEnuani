<?php

namespace App\Repositories;

use App\Models\Transactions;
use App\Repositories\BaseRepository;

class TransactionRepository extends BaseRepository
{
    protected $modelClass = Transactions::class;
}
