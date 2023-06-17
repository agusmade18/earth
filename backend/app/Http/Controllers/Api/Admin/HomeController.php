<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\HomeResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Home;

class HomeController extends Controller
{
    public function show($id = 1) {
        $home = Home::whereId($id)->first();
        if($home) {
            return new HomeResource(true, 'Home Detail', $home);
        }

        return new HomeResource(false, 'Home Unfound', null);
    }

    public function update(Request $request, Home $home) {
        $validator = Validator::make($request->all(), [
            'val_home'  => 'required|unique:homes,val_home,'.'1',
            // Karena bersifat unik, maka untuk proses update kita tambahkan name,'.$category->id, yang artinya kusus ID category yang diupdate akan dikecualikan.
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Update Without Image
        $home->update([
            'val_home'  => $request->val_home,
            'user_id' => auth()->guard('api')->user()->id,
        ]);

        if($home) {
            // Return Success
            return new HomeResource(true, 'Home Updated', $home);
        }

        // Return Failed
        return new HomeResource(false, 'Home Update Failed', null);
    }
}
