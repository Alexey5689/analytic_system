<?php

namespace App\Http\Controllers;

use App\Models\TestDataCampaign;

class TestDataCampaignController extends Controller
{
    public function test_data() {
        return TestDataCampaign::all()->toJson();
    }
}
