<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ConstructionResource;
use App\Models\Constraction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ContructionController extends Controller
{
    public function index() {
        $constructions = Constraction::with('user')->when(request()->q, function($qa) {
            $qa = $qa->where('title', 'like', '%'.request()->q.'%');
        })->latest()->paginate(5);
        return new ConstructionResource(true, 'Contruction Data', $constructions);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'img_before'  => 'required|image|mimes:jpeg,jpg,png|max:2000',
            'img_after'  => 'required|image|mimes:jpeg,jpg,png|max:2000',
            'title'  => 'required|unique:constractions',
            'description'  => 'required',
            'price'  => 'required',
            'day_work'  => 'required',
        ]);

        if($validator->fails()){ 
            return response()->json($validator->errors(), 422);
        }

        // Image Before
        $imgBefore = $request->file('img_before');
        $imgBefore->storeAs('public/construction', strtolower($imgBefore->hashName()));
 
        // Image After
        $imgAfter = $request->file('img_after');
        $imgAfter->storeAs('public/construction', strtolower($imgAfter->hashName()));

        // Save Data Category
        // dd(auth()->guard('api')->user()->id);
        $construction = Constraction::create([
            'img_before' => strtolower($imgBefore->hashName()),
            'img_after'  => strtolower($imgAfter->hashName()),
            'title'  => $request->title,
            'description'  => $request->description,
            'price'  => $request->price,
            'day_work'  => $request->day_work,
            'user_id' => auth()->guard('api')->user()->id,
        ]);

        if($construction) {
            // return success with API Resource
            return new ConstructionResource(true, 'Construction Saved!', $construction);
        }

        return new ConstructionResource(false, 'Construction Failed!', null);
    }

    public function show($id) {
        $construction = Constraction::whereId($id)->first();
        if($construction) {
            return new ConstructionResource(true, 'Construction Detail:', $construction);
        }

        return new ConstructionResource(false, 'Construction Detail Not Found!', null);
    }

    public function update(Request $request, Constraction $construction) {
        $imgBeforeName = "";
        $imgAfterName = "";
        $validator = Validator::make($request->all(), [
            'title'  => 'required|unique:constractions,title,'.$construction->id,
            'description'  => 'required',
            'price'  => 'required',
            'day_work'  => 'required',
        ]);

        if($validator->fails()){ 
            return response()->json($validator->errors(), 422);
        }

        if($request->file('img_before')) {
            $imgBefore = $request->file('img_before');
            $imgBefore->storeAs('public/construction', strtolower($imgBefore->hashName()));
            $imgBeforeName = strtolower($imgBefore->hashName());
        } else {
            $imgBeforeName = $construction->getAttributes()['img_before'];
        }
 
        // Image After
        if($request->file('img_after')) {
            $imgAfter = $request->file('img_after');
            $imgAfter->storeAs('public/construction', strtolower($imgAfter->hashName()));
            $imgAfterName = strtolower($imgAfter->hashName());
        } else {
            $imgAfterName = $construction->getAttributes()['img_after'];
        }

        // Update Without Image
        $construction->update([
            'img_before' => $imgBeforeName,
            'img_after'  => $imgAfterName,
            'title'  => $request->title,
            'description'  => $request->description,
            'price'  => $request->price,
            'day_work'  => $request->day_work,
            'user_id' => auth()->guard('api')->user()->id,
        ]);

        if($construction) {
            // return success with API Resource
            return new ConstructionResource(true, 'Construction Saved!', $construction);
        }

        return new ConstructionResource(false, 'Construction Failed!', null);
    }

    public function destroy(Constraction $construction) {

        if($construction->delete()) {
            // Return Success
            return new ConstructionResource(true, 'Contruction Deleted!', null);
        }

        // Return Failed
        return new ConstructionResource(false, 'Contruction Delete Failed!', null);
    }
    
}
