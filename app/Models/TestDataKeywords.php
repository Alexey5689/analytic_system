<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestDataKeywords extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'keyword_name',
        'impressions',
        'clicks',
        'daily_budget',
    ];
}
