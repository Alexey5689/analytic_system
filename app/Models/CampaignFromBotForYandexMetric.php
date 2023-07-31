<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class CampaignFromBotForYandexMetric extends Model
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'id',
        'campaign_name',
        'impressions',
        'clicks',
        'daily_budget',
    ];

    public function keywords(): HasMany
    {
        return $this->hasMany(KeywordsFromBotForYandexMetrics::class);
    }
}
