<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Vmo;
use Illuminate\Http\Request;

class VmoController extends Controller
{
    public function index()
    {
        $vmos = Vmo::all();
        return response()->json([
            'success' => true,
            'message' => 'List data vmo',
            'list' => $vmos
        ], 200);
    }


    public function store(Request $request)
    {
        $vmos = Vmo::create($request);

        return response()->json([
            'success' => true,
            'message' => 'Forum created',
            'data' => $vmos
        ], 201);
    }

    public function update(Request $request, Vmo $vmo)
    {

        if ($vmo){
            $vmo -> update($request);

            return response()->json([
                'success' => true,
                'message' => 'Forum update',
                'data' => $vmo
            ], 201);
        }

        return response()->json([
            'success' => true,
            'message' => 'Forum not found',
        ], 404);
    }

    public function destroy(Vmo $vmo)
    {
        if ($vmo) {
            $vmo->delete();

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
