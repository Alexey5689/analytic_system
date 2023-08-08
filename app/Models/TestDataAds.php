<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestDataAds extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'ad_name',
        'impressions',
        'clicks',
        'daily_budget',
    ];
}
