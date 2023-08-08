<?php

namespace App\Http\Controllers;

use App\Models\KeywordsFromBotForYandexMetrics;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;

class DataKeywordsYandexDirectController extends Controller
{
    public function get_keywords()
    {
        $response = Http::get(config('api.url') . ':' . (config('api.port') . '/api/get_keywords'))->json();
        if ($response == null) {
            return response()->json(
                [
                    'status' => false,
                    'message' => 'Нет данных'
                ]
            );
        } else {
            foreach ($response as $keyword) {
                $keyword_data[] = [
                    'id' => $keyword['id'],
                    'ads_groups_name' => $keyword['name'],
                    'impressions' => $keyword['impressions'],
                    'clicks' => $keyword['clicks'],
                    'daily_budget' => $keyword['daily_budget'],
                    'created_at' => Carbon::now()->toDateTimeString(),
                ];
            }
            return $keyword_data;
        }
    }

    public function __invoke()
    {
        if($this->get_keywords() == ['status' => false]) {
            return response()->json(
                [
                    'status' => false,
                    'message' => 'Нет данных'
                ]
            );
        }
        else {
            DataKeywordsYandexDirectController::upsert($this->get_keywords(), ['id'], [
                'campaign_name',
                'impressions',
                'clicks',
                'daily_budget',
            ]);
        }
    }

    public function send_api_keywords()
    {
        if ($this->get_keywords()->sendContent() == ['status' => false]) {
            return response()->json(
                [
                    'status' => false,
                    'message' => 'Нет данных'
                ]
            );
        } else {
            return KeywordsFromBotForYandexMetrics::all()->toJson();
        }
    }
}
