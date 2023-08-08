<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AdsListsFromBotForYandexMetrics extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'ads_group_id',
        "campaign_id",
        ];

    public function ads_group(): BelongsTo
    {
        return $this->belongsTo(AdsGroupsFromBotForYandexMetrics::class);
    }

    public function ads_create(): HasMany
    {
        return $this->hasMany(AdsFromBotForYandexMetrics::class);
    }
}
