<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class AdsGroupsFromBotForYandexMetrics extends Model
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'id',
        'ads_groups_name',
        'visits',
        'applications',
        'conversion',
    ];

}
