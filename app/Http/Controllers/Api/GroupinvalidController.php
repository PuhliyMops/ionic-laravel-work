<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Groupinvalid;
use Illuminate\Http\Request;

class GroupinvalidController extends Controller
{
    public function index()
    {
        $groupinvalids = Groupinvalid::all();
        return response()->json([
            'success' => true,
            'message' => 'List data groupinvalid',
            'list' => $groupinvalids
        ], 200);
    }


    public function store(Request $request)
    {
        $groupinvalids = Groupinvalid::create($request);

        return response()->json([
            'success' => true,
            'message' => 'Forum created',
            'data' => $groupinvalids
        ], 201);
    }

    public function update(Request $request, Groupinvalid $groupinvalid)
    {

        if ($groupinvalid){
            $groupinvalid -> update($request);

            return response()->json([
                'success' => true,
                'message' => 'Forum update',
                'data' => $groupinvalid
            ], 201);
        }

        return response()->json([
            'success' => true,
            'message' => 'Forum not found',
        ], 404);
    }

    public function destroy(Groupinvalid $groupinvalid)
    {
        if ($groupinvalid) {
            $groupinvalid->delete();

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
