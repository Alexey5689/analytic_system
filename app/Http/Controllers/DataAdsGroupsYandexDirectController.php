<?php

namespace App\Http\Controllers;

use App\Models\AdsGroupsFromBotForYandexMetrics;
use App\Models\CampaignFromBotForYandexMetric;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;

class DataAdsGroupsYandexDirectController extends Controller
{
    public function get_ads_group()
    {
        $response = Http::get(config('api.url') . ':' . (config('api.port') . '/api/format_ads_group_data'))->json();

        foreach ($response as $ad_group) {
                $ad_group_data[] = [
                    'id' => $ad_group['id'],
                    'campaign_id' => $ad_group['campaign_id'],
                ];
            }
        return $ad_group_data;
    }

    public function __invoke()
    {
        AdsGroupsFromBotForYandexMetrics::upsert($this->get_ads_group(),['id'], [
            'campaign_id',
        ]);
    }
}
