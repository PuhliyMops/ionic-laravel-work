<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vmo extends Model
{
    use HasFactory;

    protected $table = "vmo";

    protected $fillable = [
        "name"
    ];

    public function reestr()
    {
        return $this->hasMany(GvmuReestr::class);
    }
}
