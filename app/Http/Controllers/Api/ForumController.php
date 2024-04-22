<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Forum;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;


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
        $user = Auth::user();
        return response()->json([
            'user' => $user,
            'success' => true,
            'message' => 'List data post',
            'list' => $posts
        ], 200);
        // PostsList.vue
    }


    public function store(Request $request)
    {
        $request->validate([
            'post' => 'required'
        ]);
        $user = Auth::user();
        $posts = Forum::create([
            'post' => $request->post,
            'user' => $user->name,
            'userId' => $user->id,
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
