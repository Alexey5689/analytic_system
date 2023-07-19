# Analytic-System

## Работа с ENV

После каждого изменения файла `.env` необходимо выполнить повторную операцию шифрования: `php artisan env:encrypt`

При клонировании проекта, необходимо расшифровать `.env` файл для правильной работоспособности сервисов: `php artisan env:decrypt --key=<ключ шифрования>`

Ключ шифрования: `base64:79HrbYZmstiBm1sbiHf/mZOKeFktJQ61kCE4ZGTnJnk=`

--- 

## Установка проекта

1. Выполнить `composer install`
2. Запустить `sail up`
