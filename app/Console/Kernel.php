<?php

namespace App\Console;

use App\Http\Controllers\DataYandexController;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
       $schedule->call(function () {
            $controller = new DataYandexController();
            $controller->__invoke(); // Замените `yourMethod` на метод контроллера, который вы хотите выполнить
        })->everyMinute()->appendOutputTo('scheduler.log');
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
