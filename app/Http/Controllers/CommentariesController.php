<?php

namespace App\Http\Controllers;

use App\Commentary;
use Illuminate\Http\Request;
use App\Http\Resources\Commentary as CommentaryResource;


class CommentariesController extends Controller
{
    public function store(Request $request)
    {
        $comment = new Commentary();
        $comment->article_id = $request->input('article_id');
        $comment->comment = $request->input('comment');

        if($comment->save()){
            return new CommentaryResource($comment);
        }
    }

    public function show($id){
        $commentaries = Commentary::where('article_id', $id)->get();

        return CommentaryResource::collection($commentaries);
    }
}
