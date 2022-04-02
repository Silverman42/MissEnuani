<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Repositories\CompetitionRepository;
use App\Http\Requests\CompetitionRequest as Request;

class CompetitionController extends Controller
{
    public function __construct(CompetitionRepository $competition)
    {
        $this->competition = $competition;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        dd($this->competition->paginate()->toArray());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\CompetitionRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->competition->create($request->all());
        return $this->redirectBack('A competition has been succefully added', 'Competition added');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\Http\Requests\CompetitionRequest $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if ($this->competition->update($request->all(), $id)) {
            return $this->redirectBack('A competition has been succefully updated', 'Competition updated');
        }
        return $this->redirectBack('A competition could not be updated succefully', 'Competition update failed');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        if ($this->competition->destroy($id)) {
            return $this->redirectBack('A competition has been succefully deleted', 'Competition deleted');
        }
        return $this->redirectBack('A competition could not be deleted succefully', 'Competition delete failed');
    }
}
