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
        Schema::create('negative_keywords_from_campaign_from_bot_for_yandex_metrics', function (Blueprint $table) {
            $table->id();
            $table->string('negative_keywords_name_from_campaign');
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
        Schema::dropIfExists('negative_keywords_from_campaign_from_bot_for_yandex_metrics');
    }
};
