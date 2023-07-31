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
        $response = Http::get(config('api.url') . ':' . (config('api.port') . '/api/format_campaigns_data'))->json();
        foreach ($response as $campaign) {
                $campaign_data[] = [
                    'id' => $campaign['id'],
                    'campaign_id' => $campaign,
                    'created_at' => Carbon::now()->toDateTimeString(),
                ];
            }
        return $campaign_data;
    }

    public function __invoke()
    {
        CampaignFromBotForYandexMetric::upsert($this->get_ads_group(),['id'], [
            'campaign_name',
            'visits',
            'applications',
            'conversion',
        ]);
        return CampaignFromBotForYandexMetric::all()->toJson();
    }
}
