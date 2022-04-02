<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class BaseRepository
{

    protected $model;

    protected $modelClass = Model::class;

    public function __construct()
    {
        $this->model = new $this->modelClass;
    }

    /**
     * @method mixed all()
     * 
     * Get all collections of the model
     */
    public function all()
    {
        return $this->model->all();
    }

    /**
     * @method mixed with()
     * 
     * Eager load other related models
     * 
     * @param array $relations
     */
    public function with(array $relations)
    {
        $this->model->with($relations);
        return $this;
    }

    /**
     * @method Builder query()
     * 
     * Build a query for fetching models
     * 
     */
    public function query(): Builder
    {
        return $this->model->newQuery();
    }

    /**
     * @method mixed changeModel
     * 
     * Swap to a new model
     * 
     * @param mixed model 
     */
    public function changeModel($model)
    {
        $this->model = $model;
        return $this;
    }

    /**
     * @method Model getModel()
     *
     * Gets the associated model
     *
     * @return Model
     */

    public function getModel(): Model
    {
        return $this->model;
    }

    /**
     * @method mixed destroy()
     * 
     * Delete model instance
     * 
     * @param int $id
     */
    public function destroy(int $id): Bool
    {
        DB::beginTransaction();
        try {
            $this->find($id)->destroy();
            DB::commit();
            return true;
        } catch (\Throwable $error) {
            DB::rollBack();
            Log::error($error);
            return false;
        }
    }

    /**
     * @method mixed create()
     * 
     * Create new model instance
     * 
     * @param array $entries
     */
    public function create(array $entries)
    {
        DB::beginTransaction();
        try {
            $data = $this->model->create($entries);
            DB::commit();
            return $data;
        } catch (\Throwable $error) {
            DB::rollBack();
            Log::error($error);
            return false;
        }
    }

    /**
     * @method mixed update()
     * 
     * Update a model instance
     * 
     * @param array $data
     * @param int $id
     */
    public function update(array $data, $id)
    {
        DB::beginTransaction();
        try {
            $model = $this->find($id)->update($data);
            DB::commit();
            return $model;
        } catch (\Throwable $error) {
            DB::rollback();
            Log::error($error);
            return false;
        }
    }

    /**
     * @method mixed paginate()
     * 
     * Paginate model collection
     * 
     * @param int $page
     * @param array $queryOptions
     */
    public function paginate(int $page = 20, array $queryOptions = [])
    {
        $query = $this->model;
        if (count($queryOptions)) {
            foreach ($queryOptions as $option) {
                $query->where($option);
            }
        }
        return $query->latest()->paginate($page);
    }

    /**
     * Find a single model instance
     */
    public function find($id)
    {
        return $this->model->findOrFail($id);
    }
}
