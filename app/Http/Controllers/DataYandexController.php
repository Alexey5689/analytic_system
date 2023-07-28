<?php

namespace App\Http\Controllers;

use App\Models\GetCampaignFromYandexBot;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DataYandexController extends Controller
{
    public function get_campaign(Request $request)
    {
        $response = Http::get(config('api.url').':'.(config('api.port').'/api/format_campaigns_data'))->json();
        foreach($response as $campaign) {
            $conversion_formula = $campaign['impressions']/$campaign['clicks']*100;
            $campaign_data[] = [
                'campaign_name' => $campaign['name'],
                'visits' => $campaign['impressions'],
                'applications' => $campaign['clicks'],
                'conversion' => round($conversion_formula, 2),
            ];
        }
    }
}
