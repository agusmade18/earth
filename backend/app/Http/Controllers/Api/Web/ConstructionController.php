<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ConstructionResource;
use App\Models\Constraction;

class ConstructionController extends Controller
{
    public function index() {
        $construction = Constraction::all();
        return new ConstructionResource(true, 'Construction Datas', $construction);
    }
}
