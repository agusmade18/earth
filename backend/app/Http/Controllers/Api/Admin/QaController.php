<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\QaResource;
use Illuminate\Http\Request;
use App\Models\Qa;
use Illuminate\Support\Facades\Validator;

class QaController extends Controller
{
    public function index() {
        $qa = Qa::with('user')->when(request()->q, function($qa) {
            $qa = $qa->where('question', 'like', '%'.request()->q.'%');
        })->latest()->paginate(5);

        return new QaResource(true, 'QA Lists', $qa);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'question'  => 'required',
            'answer'  => 'required'
            // unique:categories artinya tidak boleh ada nama yg sama dalam table categories 
        ]);

        if($validator->fails()){ 
            return response()->json($validator->errors(), 422);
        }

        // Save Data Category
        $qa = Qa::create([
            'question' => $request->question,
            'answer'  => $request->answer,
            'user_id' => auth()->guard('api')->user()->id,
        ]);

        if($qa) {
            // return success with API Resource
            return new QaResource(true, 'QA Saved!', $qa);
        }

        return new QaResource(false, 'QA Failed!', null);
    }

    public function show($id) {
        $qa = Qa::whereId($id)->first();
        if($qa) {
            return new QaResource(true, 'QA Detail:', $qa);
        }

        return new QaResource(false, 'QA Detail Not Found!', null);
    }

    public function update(Request $request, Qa $qa) {
        $validator = Validator::make($request->all(), [
            'question'  => 'required|unique:qas,question,'.$qa->id,
            'answer'  => 'required|unique:qas,answer,'.$qa->id,
            // unique:categories artinya tidak boleh ada nama yg sama dalam table categories 
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Update Without Image
        $qa->update([
            'question'  => $request->question,
            'answer'  => $request->answer,
            'user_id' => auth()->guard('api')->user()->id,
        ]);

        if($qa) {
            // Return Success
            return new QaResource(true, 'QA Updated!', $qa);
        }

        // Return Failed
        return new QaResource(false, 'QA Update Failed!', null);
    }

    public function destroy(Qa $qa) {

        if($qa->delete()) {
            // Return Success
            return new QaResource(true, 'QA Deleted!', null);
        }

        // Return Failed
        return new QaResource(false, 'QA Delete Failed!', null);
    }
}
