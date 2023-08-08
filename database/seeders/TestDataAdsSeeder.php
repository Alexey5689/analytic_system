<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;


class TestDataAdsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $ads = [
            'Установка кондиционеров МСК',
            'Плюшевые медведи МСК',
        ];

        foreach ($ads as $ad) {
            DB::table('test_data_ads')->insert([
                'ad_name' => $ad,
                'impressions' => rand(),
                'clicks' =>  rand(),
                'daily_budget' => rand(),
                'created_at' => Carbon::now(),
                'updated_at' => now(),
            ]);
        }
    }
}
