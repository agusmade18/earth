<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Constraction extends Model
{
    use HasFactory;
    protected $fillable = [
        'img_before', 'img_after', 'title', 'description', 'price', 'day_work', 'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getImgBeforeAttribute($image)
    {
        return asset('storage/construction/' . $image);
    }

    public function getImgAfterAttribute($image)
    {
        return asset('storage/construction/' . $image);
    }

    public $preventAttrSetImgBefore = false;
    public $preventAttrSetImgAfter = false;

    public function setImgBeforeAttribute($value) {
        if ($this->preventAttrSetImgBefore) {
            // Ignore Mutator
            $this->attributes['img_before'] = $value;
        } else {
            $this->attributes['img_before'] = strtolower($value);
        }
    }

    public function setImgAfterAttribute($value) {
        if ($this->preventAttrSetImgAfter) {
            // Ignore Mutator
            $this->attributes['img_after'] = $value;
        } else {
            $this->attributes['img_after'] = strtolower($value);
        }
    }
}
