@component('mail::message')
    # Email Confirmation

    Пожалуйста, проследуйте по ссылке для сброса пароля:

    @component('mail::button', ['url' => config('app.url').':'.config('app.frontend_port')."/reset-password/".$user->verify_token]);
        Подтвердить Email
    @endcomponent

    Thanks,<br>
    {{ config('app.name') }}
@endcomponent
