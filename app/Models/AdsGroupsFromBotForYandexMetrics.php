<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class AdsGroupsFromBotForYandexMetrics extends Model
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'id',
        'campaign_id',
    ];

    public function keywords(): HasMany
    {
        return $this->hasMany(KeywordsFromBotForYandexMetrics::class, 'ads_group_id');
    }

    public function campaign(): BelongsTo
    {
        return $this->belongsTo(CampaignFromBotForYandexMetric::class);
    }

    public function ads_list(): HasOne
    {
        return $this->hasOne(AdsListsFromBotForYandexMetrics::class);
    }

    public function ads_create(): HasManyThrough
    {
        return $this->hasManyThrough(AdsFromBotForYandexMetrics::class, AdsList::class);
    }
}
