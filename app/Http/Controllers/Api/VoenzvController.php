<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Voenzv;
use Illuminate\Http\Request;

class VoenzvController extends Controller
{
    public function index()
    {
        $voenzvs = Voenzv::all();
        return response()->json([
            'success' => true,
            'message' => 'List data voenzv',
            'list' => $voenzvs
        ], 200);
    }


    public function store(Request $request)
    {
        $voenzvs = Voenzv::create($request);

        return response()->json([
            'success' => true,
            'message' => 'Forum created',
            'data' => $voenzvs
        ], 201);
    }

    public function update(Request $request, Voenzv $voenzv)
    {

        if ($voenzv){
            $voenzv -> update($request);

            return response()->json([
                'success' => true,
                'message' => 'Forum update',
                'data' => $voenzv
            ], 201);
        }

        return response()->json([
            'success' => true,
            'message' => 'Forum not found',
        ], 404);
    }

    public function destroy(Voenzv $voenzv)
    {
        if ($voenzv) {
            $voenzv->delete();

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
