<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Carousel;
use App\Http\Resources\CarouselResource;

class CarouselController extends Controller
{
    public function index() {
        $carousels = Carousel::all();
        return new CarouselResource(true, 'Carousels Datas', $carousels);
    }
}
