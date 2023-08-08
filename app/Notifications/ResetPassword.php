<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Auth\Notifications\ResetPassword as ResetPasswordNotification;

class ResetPassword extends ResetPasswordNotification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct($user)
    {
        parent::__construct($user);
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via($notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail($notifiable): MailMessage
    {
        $link = url( config('app.url').':'.config('app.frontend_port')."/reset-password/".$this->token."?email=".$notifiable->getEmailForPasswordReset());
        return (new MailMessage)
             ->subject('Уведомление о сбросе пароля - '  . config('app.name'))
             ->line('Вы получаете это письмо, потому что мы получили запрос на сброс пароля для вашей учетной записи.')
             ->action('Сменить пароль', url($link))
             ->line( "Срок действия этой ссылки для сброса пароля истечет через ".config('auth.passwords.users.expire')." минут" )
             ->line( 'Если вы не запрашивали сброс пароля, никаких дальнейших действий не требуется.');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'token' => $this->token
        ];
    }
}
