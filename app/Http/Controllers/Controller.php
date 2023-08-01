<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/**
 * @OA\Info(
 *      title="Система сквозной аналитики 'Росметрик'", version="3.0",
 *      @OA\Contact(
 *      email="mail.pro-technologii.ru")
 * )
 * @OA\Server(
 *      url="http://localhost:8080",
 *      description="API Server"
 * )
 */

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

}
