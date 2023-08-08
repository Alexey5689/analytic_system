# Analytic-System

## Работа с ENV

После каждого изменения файла `.env` необходимо выполнить повторную операцию шифрования: `php artisan env:encrypt`

При клонировании проекта, необходимо расшифровать `.env` файл для правильной работоспособности сервисов: 

1. Скопировать `.env.example` в `.env` для правильной работы `sail`
2. Расшифровать и перезаписать `.env` файл командой: `php artisan env:decrypt --key=<ключ шифрования> --force`

Ключ шифрования: `base64:79HrbYZmstiBm1sbiHf/mZOKeFktJQ61kCE4ZGTnJnk=`

--- 

## Установка проекта

1. Выполнить `composer install`
2. Запустить `sail up`


## Работа со Swagger. Установка проекта

1. Выполнить установку плагина для swagger `composer require "darkaonline/l5-swagger"`
2. Запустить генерацию `sail artisan l5-swagger:generate`
3. Swagger доступен по вашему хосту по адресу `/api/documentation`
