<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Models\GvmuReestr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GvmuReestrController extends Controller
{
    public function index()
    {
        if (Auth::user()->role == "user"){
            return response()->json([
                'success' => true,
                'message' => 'redirect',
                'href' => 'reestrs/department/1'
            ], 200);
        }
        $reestrs = GvmuReestr::all();
        foreach ($reestrs as $reestr){
            $reestr -> user;
            $reestr -> department;
            $reestr -> vmo;
            $reestr -> voenzv;
            $reestr -> groupinvalid;
            $reestr -> user;
        }

        return response()->json([
            'success' => true,
            'message' => 'List data reestr',
            'list' => $reestrs
        ], 200);
    }

    public function index_department(Department $department)
    {

        $reestrs = $department->reestrs()->get();
        foreach ($reestrs as $reestr){
            $reestr -> user;
            $reestr -> department;
            $reestr -> vmo;
            $reestr -> voenzv;
            $reestr -> groupinvalid;
        }

        return response()->json([
            'success' => true,
            'message' => 'List data reestr department',
            'list' => $reestrs
        ], 200);
    }


    public function store(Request $request)
    {
        $reestrs = GvmuReestr::create($request);

        return response()->json([
            'success' => true,
            'message' => 'Forum created',
            'data' => $reestrs
        ], 201);
    }

    public function update(Request $request, GvmuReestr $reestr)
    {

        if ($reestr){
            $reestr -> update($request);

            return response()->json([
                'success' => true,
                'message' => 'Forum update',
                'data' => $reestr
            ], 201);
        }

        return response()->json([
            'success' => true,
            'message' => 'Forum not found',
        ], 404);
    }

    public function destroy(GvmuReestr $reestr)
    {
        if ($reestr) {
            $reestr->delete();

            return response()->json([
                'success' => true,
                'message' => 'Forum deleted'
            ], 200);
        }
        return response()->json([
            'success' => false,
            'message' => 'Forum not found'
        ], 404);
    }
}
