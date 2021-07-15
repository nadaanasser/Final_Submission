<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\blog;
class BlogController extends Controller
{
    function addData(Request $req)
    {
      
        $Blog = new blog;
        $Blog->name = $req->name;
        $Blog->email = $req->email;
        $Blog->message = $req->message;
        $Blog->save();
        return redirect('add');
    }

    
}
