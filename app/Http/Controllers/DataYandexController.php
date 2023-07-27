<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class DataYandexController extends Controller
{
    public function get_campaign()
    {
        $response = Http::get((config('api.url').':'.(config('api.port').'/api/format_campaigns_data')));
        return $response->json();
    }

}
