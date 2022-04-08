<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Competitions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('competitions', function (Blueprint $table) {
            $table->id();
            $table->year('year')->nullable();
            $table->date('reg_start_date')->nullable();
            $table->date('reg_end_date')->nullable();
            $table->date('event_date')->nullable();
            $table->text('venue')->nullable();
            $table->string('thumbnail')->nullable();
            $table->string('thumbnail_id', 120)->nullable();
            $table->unsignedInteger('free_slot')->default(0);
            $table->boolean('is_current')->default(false);
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
        Schema::dropIfExists('competitions');
    }
}
