<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;


class TestDataKeywordsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $keywords = [
            [
                'установка кондиционера',
                'установка кондиционера в москве',
                'купить кондиционер +с установкой недорого',
            ],
            [
                'плюшевая игрушка медведь',
                'игрушка большой плюшевый медведь',
                'плюшевый мишка купить'
            ],
        ];

        foreach ($keywords as $keyword_arr) {
            foreach ($keyword_arr as $keyword) {
                DB::table('test_data_keywords')->insert([
                    'keyword_name' => $keyword,
                    'impressions' => rand(),
                    'clicks' =>  rand(),
                    'daily_budget' => rand(),
                    'created_at' => Carbon::now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
