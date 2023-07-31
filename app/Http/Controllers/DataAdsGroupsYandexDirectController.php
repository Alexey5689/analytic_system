<?php

namespace App\Http\Controllers;

use App\Models\AdsGroupsFromBotForYandexMetrics;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;

class DataAdsGroupsYandexDirectController extends Controller
{
    public function get_ads_group()
    {
        $response = Http::get(config('api.url') . ':' . (config('api.port') . '/api/format_campaigns_data'))->json();
        foreach ($response as $campaign) {
            if ($campaign['impressions'] && $campaign['clicks'] !== 0) {
//                $conversion_formula = $campaign['impressions'] / $campaign['clicks'] * 100;
                $campaign_data[] = [
                    'id' => $campaign['id'],
                    'campaign_name' => $campaign['ads_group_name'],
//                    'visits' => $campaign['impressions'],
//                    'applications' => $campaign['clicks'],
//                    'conversion' => round($conversion_formula, 2),
                    'created_at' => Carbon::now()->toDateTimeString(),
                ];
            }
            else {
                $campaign_data[] = [
                    'id' => $campaign['id'],
                    'campaign_name' => $campaign['name'],
//                    'visits' => $campaign['impressions'],
//                    'applications' => $campaign['clicks'],
                    'conversion' => 0,
                ];
            }
        }
        return $campaign_data;
    }

    public function __invoke()
    {
        CampaignFromBotForYandexMetric::upsert($this->get_campaign(),['id'], [
            'campaign_name',
            'visits',
            'applications',
            'conversion',
        ]);
        return CampaignFromBotForYandexMetric::all()->toJson();
    }
}
