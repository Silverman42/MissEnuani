<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Permissions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('permissions', function (Blueprint $table) {
            $table->boolean('modify_tickets')->default(false);
            $table->boolean('modify_users')->default(false);
            $table->boolean('modify_transactions')->default(false);
            $table->boolean('modify_settings')->default(false);
            $table->boolean('modify_competitions')->default(false);
            $table->bigInteger('user_id')->nullable()->unique();
            $table->id();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('permissions');
    }
}
