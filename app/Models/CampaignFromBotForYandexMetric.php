<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class CampaignFromBotForYandexMetric extends Model
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'id',
        'campaign_name',
        'visits',
        'applications',
        'conversion',
    ];
}
