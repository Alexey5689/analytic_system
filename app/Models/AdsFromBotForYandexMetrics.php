<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class AdsFromBotForYandexMetrics extends Model
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'id',
        'ads_list_id',
        'ad_name',
        'impressions',
        'clicks',
        'daily_budget',
    ];

    public function ads_lists(): BelongsTo
    {
        return $this->belongsTo(AdsListsFromBotForYandexMetrics::class, 'ads_list_id');
    }

}
