<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;


class TestDataCampaignsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $campaigns = [
            'Установка кондиционеров',
            'Плюшевые медведи',
        ];

        foreach ($campaigns as $campaign) {
            DB::table('test_data_campaigns')->insert([
                'campaign_name' => $campaign,
                'impressions' => rand(),
                'clicks' =>  rand(),
                'daily_budget' => rand(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
