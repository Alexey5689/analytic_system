<?php

namespace App\Http\Controllers;

use App\Models\CampaignFromBotForYandexMetrics;
use Illuminate\Support\Facades\Http;

class DataCampaignsYandexDirectController extends Controller
{
    public function get_campaign()
    {
        $response = Http::get(config('api.url') . ':' . (config('api.port') . '/api/format_campaigns_data'))->json();
        foreach ($response as $campaign) {
            $campaign_data[] = [
                'id' => $campaign['id'],
                'campaign_name' => $campaign['name'],
                'impressions' => $campaign['impressions'],
                'clicks' => $campaign['clicks'],
                'daily_budget' => $campaign['daily_budget'],
            ];
        }
        return $campaign_data;
    }

    public function __invoke()
    {
        CampaignFromBotForYandexMetrics::upsert($this->get_campaign(),['id'], [
            'campaign_name',
            'impressions',
            'clicks',
            'daily_budget',
        ]);
    }

    public function send_api_campaigns()
    {
       return CampaignFromBotForYandexMetrics::all()->toJson();
       
    }
}
