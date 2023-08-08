<?php

namespace App\Http\Controllers;

use App\Models\TestDataKeywords;

class TestDataKeywordsController extends Controller
{
    public function test_data() {
        return TestDataKeywords::all()->toJson();
    }
}
