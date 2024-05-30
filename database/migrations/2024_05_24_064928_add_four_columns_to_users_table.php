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
        Schema::table('users', function (Blueprint $table) {
            $table->string('firstname', 50);
            $table->string('lastname', 50);
            $table->string('middlename', 50);
            $table->enum('role', ['admin', 'user'])->default('user');
            $table->renameColumn('name', 'username');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('firstname');
            $table->dropColumn('lastname');
            $table->dropColumn('middlename');
            $table->dropColumn('role');
            $table->renameColumn('username', 'name');
        });
    }
};
