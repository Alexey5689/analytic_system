<?php

namespace App\Http\Controllers;

use App\Models\TestDataAds;

class TestDataAdsController extends Controller
{
    public function test_data() {
        return TestDataAds::all()->toJson();
    }
}
