<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Auth\Notifications\ResetPassword;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
//        voidVerifyEmail::toMailUsing(function (object $notifiable, string $url) {
//            return (new MailMessage)
//                ->subject('Подтверждение email на сайте ...')
//                ->line('Нажмите кнопку ниже для подтверждения email-адреса.')
//                ->action('Подтвердить', $url);
//        });
//        $this->registerPolicies();
//
//        ResetPassword::createUrlUsing(function ($user, string $token) {
//            return 'https://localhost:8080/reset-password/'.$token;
//        });
    }
}
