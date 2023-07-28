@component('mail::message')
Добрый день, {{$user->name}}!
<br/>
Пожалуйста, проследуйте по ссылке для подтверждения эл. почты:

@component('mail::button', [
    'color' => 'success',
    'text-decoration' => 'none',
    'url' => url(config('app.url').':'.config('app.frontend_port')."/end-register/").($user->verify_token)])
    Подтвердить Email
@endcomponent

{{ config('app.name') }}
@endcomponent
