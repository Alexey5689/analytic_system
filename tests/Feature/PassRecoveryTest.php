<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class PassRecoveryTest extends TestCase
{
    use DatabaseMigrations;
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_function_pass_recovery(): void
    {
        $this->postJson('/api/register',
            [
                'name' => 'Qwerty',
                'tel' => '89096096127',
                'email' => 'next@mail.ru',
                'password' => 'qwerty12',
            ]);
      $response = $this->post('/api/forget-password',
            [
                'email' => 'next@mail.ru',
            ]);

        $response->assertStatus(200)
            ->assertJsonStructure(
                [
                    'message',
                    'status',
                ]);
    }

    public function test_function_reset_pass_recovery(): void
    {
        $this->postJson('/api/register',
            [
                'name' => 'Qwerty',
                'tel' => '89096096127',
                'email' => 'next@mail.ru',
                'password' => 'qwerty12',
            ]);
        $response = $this->post('/api/reset',
            [
                'email' => 'next@mail.ru',
                'password' => 'qweQWE1!',
                'password_confirmation' => 'qweQWE1!',
                'token' => '330261a8a6c67c0c6fce44eeff9627cda43af6513080a9daaccd6813d3dd9bb0'
            ]);

        $response->assertStatus(200)
            ->assertJsonStructure(
                [
                    'message',
                    'status',
                ]);
    }



}
