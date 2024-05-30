<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('gvmu_reestrs', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('department_id');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('voenzv_id');
            $table->string('firstname', 50);
            $table->string('lastname', 50);
            $table->string('middlename', 50);
            $table->string('SNILS', 11);
            $table->string('private number', 20);
            $table->date('birthdate');
            $table->date('damage_date');
            $table->date('entrance_date');
            $table->string('diagnose');
            $table->string('VVK_number');
            $table->date('VVK_date');
            $table->unsignedInteger('groupinvalid_id');
            $table->date('MSE_date');
            $table->unsignedInteger('groupinvalidmse_id');
            $table->unsignedInteger('vmo_id');
            $table->string('prosthesis');
            $table->string('prosthesis_ved');
            $table->date('prosthesis_date');
            $table->date('VMO_date');
            $table->enum('money_source', [1, 2, 3]);
            $table->enum('category', [1, 2]);
            $table->string('decision_service');
            $table->string('phone', 15);
            $table->string('email');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gvmu_reestrs');
    }
};
