<?php

namespace App\Http\Controllers;

use App\Models\AdsListsFromBotForYandexMetrics;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DataAdsListsYandexDirectController extends Controller
{
    public function get_ads_list()
    {
        $response = Http::get(config('api.url') . ':' . (config('api.port') . '/api/format_ads_list_data'))->json();

        foreach ($response as $ad_list) {
            $ad_list_data[] = [
                'id' => $ad_list['id'],
                'ads_group_id' => $ad_list['ads_group_id'],
                'campaign_id' => $ad_list['campaign_id'],
            ];
        }
        return $ad_list_data;
    }

    public function __invoke()
    {
        AdsListsFromBotForYandexMetrics::upsert($this->get_ads_list(),['id'], [
            'campaign_id',
            'ads_group_id'
        ]);
    }
}
