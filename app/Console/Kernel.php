<?php

namespace App\Console;

use App\Http\Controllers\DataAdsGroupsYandexDirectController;
use App\Http\Controllers\DataAdsYandexDirectController;
use App\Http\Controllers\DataCampaignsYandexDirectController;
use App\Http\Controllers\DataKeywordsYandexDirectController;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        $schedule->call(new DataCampaignsYandexDirectController())->everyTenMinutes()->appendOutputTo('../../storage/logs/scheduler.log');
        $schedule->call(new DataAdsYandexDirectController())->everyTenMinutes()->appendOutputTo('../../storage/logs/scheduler.log');
        $schedule->call(new DataKeywordsYandexDirectController())->everyTenMinutes()->appendOutputTo('../../storage/logs/scheduler.log');
        $schedule->call(new DataAdsGroupsYandexDirectController())->everyTenMinutes()->appendOutputTo('../../storage/logs/scheduler.log');

    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
