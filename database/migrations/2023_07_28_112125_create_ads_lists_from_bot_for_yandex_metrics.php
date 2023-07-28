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
            $table->string('ads_list_name');
            $table->integer('visits');
            $table->integer('applications');
            $table->float('conversion');
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
