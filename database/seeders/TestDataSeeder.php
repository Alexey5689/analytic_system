<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class TestDataSeeder extends Seeder
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
        $ads = [
            'Установка кондиционеров МСК',
            'Плюшевые медведи МСК',
        ];
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

        $i = 0;
        foreach ($campaigns as $camp_name) {
            $campaign[$camp_name] = $ads[$i++];
        }
            $i = 0;
            foreach ($campaign as $key => $ad) {
                $value = $keywords[$i++];
                foreach ($value as $key_value => $keyword) {
                        DB::table('test_data')->insert([
                            'campaign' => $key,
                            'ad' => $ad,
                            'keywords' => $keyword,
                            'created_at' => now(),
                            'updated_at' => now(),
                        ]);
                    }
                }
            }
}
