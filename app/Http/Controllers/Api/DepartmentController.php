<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function index()
    {
        $departments = Department::all();
        return response()->json([
            'success' => true,
            'message' => 'List data department',
            'list' => $departments
        ], 200);
    }


    public function store(Request $request)
    {
        $departments = Department::create($request);

        return response()->json([
            'success' => true,
            'message' => 'Forum created',
            'data' => $departments
        ], 201);
    }

    public function update(Request $request, Department $department)
    {

        if ($department){
            $department -> update($request);

            return response()->json([
                'success' => true,
                'message' => 'Forum update',
                'data' => $department
            ], 201);
        }

        return response()->json([
            'success' => true,
            'message' => 'Forum not found',
        ], 404);
    }

    public function destroy(Department $department)
    {
        if ($department) {
            $department->delete();

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
