<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LoginControllerTest extends TestCase
{
    use DatabaseMigrations;
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_function_login()
    {
        $this->postJson('/api/register',
            [
                'name' => 'Qwerty',
                'tel' => '89096096127',
                'email' => 'next@mail.ru',
                'password' => 'qwerty12',
                'password_confirmation' => 'qwerty12'
            ]);
        $response = $this->post('/api/login',
            [
                'email' => 'next@mail.ru',
                'password' => 'qwerty12',
            ]);

        $response->assertStatus(200)
            ->assertJsonStructure(
                [
                    'message',
                    'status'
                ]);
    }
}
