<?php

namespace App\Http\Controllers;

use App\Models\CampaignFromBotForYandexMetric;
use Illuminate\Support\Carbon;
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
        CampaignFromBotForYandexMetric::upsert($this->get_campaign(),['id'], [
            'campaign_name',
            'impressions',
            'clicks',
            'daily_budget',
        ]);
        return CampaignFromBotForYandexMetric::all()->toJson();
    }

    public function send_api_campaigns()
    {
        if ($this->get_campaign() !== null) {
            return CampaignFromBotForYandexMetric::all()->toJson();
        } else {
            return response()->json(
                [
                    'status' => false,
                    'message' => 'Нет данных'
                ]
            );
        }
    }
}
