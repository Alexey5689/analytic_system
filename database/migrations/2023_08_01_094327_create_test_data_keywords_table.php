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
        Schema::create('test_data_keywords', function (Blueprint $table) {
            $table->id();
            $table->string('keyword_name');
            $table->integer('impressions');
            $table->integer('clicks');
            $table->float('daily_budget')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('test_data_keywords');
    }
};
