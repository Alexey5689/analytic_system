<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class KeywordsFromBotForYandexMetrics extends Model
{
    use HasFactory;

    use HasApiTokens, Notifiable;

    protected $fillable = [
        'id',
        'ads_group_id',
        'keywords_name',
        'impressions',
        'clicks',
        'daily_budget',
    ];

    public function ads_group(): BelongsTo
    {
        return $this->belongsTo(AdsGroupsFromBotForYandexMetrics::class);
    }

    public function campaign(): BelongsTo
    {
        return $this->belongsTo(CampaignFromBotForYandexMetric::class);
    }
}
