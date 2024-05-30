<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voenzv extends Model
{
    use HasFactory;

    protected $table = "voenzv";

    protected $fillable = [
        "name"
    ];

    public function reestr()
    {
        return $this->hasMany(GvmuReestr::class);
    }
}
