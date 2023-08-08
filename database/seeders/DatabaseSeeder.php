<?php

namespace Database\Seeders;


use App\Models\TestDataKeywords;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            TestDataAdsSeeder::class,
            TestDataCampaignsSeeder::class,
            TestDataKeywordsSeeder::class,
        ]);
    }
}
