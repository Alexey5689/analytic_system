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
        Schema::create('ads_lists_from_bot_for_yandex_metrics', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ads_group_id');
            $table->foreignId('campaign_id');
            $table->string('ads_list_name');
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
        Schema::dropIfExists('ads_lists_from_bot_for_yandex_metrics');
    }
};
