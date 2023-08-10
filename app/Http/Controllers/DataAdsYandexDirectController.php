<?php

namespace App\Http\Controllers;

use App\Models\AdsFromBotForYandexMetrics;
use Illuminate\Support\Facades\Http;


class DataAdsYandexDirectController extends Controller
{
    public function get_ads()
    {
        $response = Http::get(config('api.url') . ':' . (config('api.port') . '/api/format_ad_data'))->json();
        foreach($response as $ad_group) {
            $ad_data[] = [
                'ad_name' => $ad_group['title'],
                'ads_list_id' => $ad_group['ads_list_id'],
                'impressions' => rand(),
                'clicks' => rand(),
                'daily_budget' => rand(),
            ];
        }
        return $ad_data;
    }

    public function __invoke(){
        AdsFromBotForYandexMetrics::upsert($this->get_ads(),['id'], [
            'ad_name',
            'ads_list_id',
            'impressions',
            'clicks',
            'daily_budget',
        ]);
    }

    public function send_api_ads() {
       return AdsFromBotForYandexMetrics::all()->toJson();
    }
}
