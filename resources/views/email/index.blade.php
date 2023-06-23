@component('mail::message')
    # Email Confirmation

    Пожалуйста, проследуйте по ссылке для подтверждения эл. почты:

    @component('mail::button', ['url' => route('register.verify', ['token' => $user->verify_token])])
        Подтвердить Email
    @endcomponent

    Thanks,<br>
    {{ config('app.name') }}
@endcomponent
