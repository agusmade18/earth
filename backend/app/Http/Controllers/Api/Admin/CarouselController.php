<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\CarouselResource;
use App\Models\Carousel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class CarouselController extends Controller
{
    public function index() {
        $carousel = Carousel::latest()->get();
        return new CarouselResource(true, 'Carousels Data', $carousel);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpeg,jpg,png|max:2000',
            // unique:categories artinya tidak boleh ada nama yg sama dalam table categories 
        ]);

        if($validator->fails()){ 
            return response()->json($validator->errors(), 422);
        }

        // upload image
        $image = $request->file('image');
        $image->storeAs('public/carousel', strtolower($image->hashName()));

        // Save Data Category
        $carousel = Carousel::create([
            'image' => strtolower($image->hashName()),
            'user_id'  => auth()->guard('api')->user()->id,
        ]);

        if($carousel) {
            // return success with API Resource
            return new CarouselResource(true, 'Carousel Saved!', $carousel);
        }

        return new CarouselResource(false, 'Carousel Failed!', null);
    }

    public function destroy(Carousel $carousel) {
        // Remove Image 
        Storage::disk('local')->delete('public/carousel', basename($carousel->image));
        if($carousel->delete()) {
            return new CarouselResource(true, 'Carousel Deleted!', null);
        }

        return new CarouselResource(false, 'Carousel Failed!', null);
     }
}
