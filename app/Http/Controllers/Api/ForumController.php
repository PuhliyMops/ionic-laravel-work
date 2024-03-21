<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Forum;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;

/*
* index
* create
* store
* show
* edit
* update
* destroy
*
*/

class ForumController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $posts = Forum::all();
        return response()->json([
            'success' => true,
            'message' => 'List data post',
            'list' => $posts
        ], 200);

        // PostsList.vue
    }

    public function store(Request $request)
    {
        $request->validate([
            'user' => 'required|string|max:255',
            'post' => 'required'
        ]);
        $userIdCheck = Forum::where("user", $request -> user) -> first();
        if ($userIdCheck === null){
            $userId = Forum::all() -> sortBy("userId") -> last() -> userId+1;
        }
        else{
            $userId = $userIdCheck -> userId;
        }
        $posts = Forum::create([
            'post' => $request->post,
            'user' => $request->user,
            'userId' => $userId
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Forum created',
            'data' => $posts
        ], 201);
    }

    public function update(Request $request, Forum $post)
    {
        $request->validate([
            'post' => 'required'
        ]);

        if ($post){
            $post -> update([
               "post" => $request->post
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Forum update',
                'data' => $post
            ], 201);
        }

        return response()->json([
            'success' => true,
            'message' => 'Forum not found',
        ], 404);
    }

    public function destroy(Forum $post)
    {
        if ($post) {

            $post->delete();


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
