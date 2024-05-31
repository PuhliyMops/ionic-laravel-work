<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class GvmuReestr extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstname',
        'lastname',
        'middlename',
        'SNILS',
        'private number',
        'birthdate',
        'damage_date',
        'entrance_date',
        'diagnose',
        'VVK_number',
        'VVK_date',
        'groupinvalid_id',
        'MSE_date',
        'groupinvalidmse_id',
        'vmo_id',
        'prosthesis',
        'prosthesis_ved',
        'prosthesis_date',
        'VMO_date',
        'money_source',
        'category',
        'decision_service',
        'phone',
        'email',
];

    protected $hidden =
        [
            "department_id",
            "user_id",
            "voenzv_id",
            "vmo_id",
            'groupinvalid_id',
        ];

    public function department() : BelongsTo
    {
        return $this -> belongsTo(Department::class);
    }

    public function user() : BelongsTo
    {
        return $this -> belongsTo(User::class);
    }

    public function vmo() : BelongsTo
    {
        return $this -> belongsTo(Vmo::class);
    }

    public function voenzv() : BelongsTo
    {
        return $this -> belongsTo(Voenzv::class);
    }

    public function groupinvalid() : BelongsTo
    {
        return $this -> belongsTo(Groupinvalid::class);
    }
}
