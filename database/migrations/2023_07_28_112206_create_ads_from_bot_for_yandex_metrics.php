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
        Schema::create('ads_from_bot_for_yandex_metrics', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ads_list_id');
            $table->string('ad_name');
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
        Schema::dropIfExists('ads_from_bot_for_yandex_metrics');
    }
};
