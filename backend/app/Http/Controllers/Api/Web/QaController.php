<?php

namespace App\Http\Controllers\api\web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Qa;
use App\Http\Resources\QaResource;

class QaController extends Controller
{
    //
    public function index() {
        $qa = Qa::all();
        return new QaResource(true, 'Qa Datas', $qa);
    }
}
