<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Department extends Model
{
    use HasFactory;

    protected $fillable = [
        "id",
        "name"
    ];

    public function reestrs()
    {
        return $this->hasMany(GvmuReestr::class);
    }
}
