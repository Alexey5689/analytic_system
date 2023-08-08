<?php

namespace Tests\Feature;

use App\Http\Controllers\RegisterController;
use App\Mail\VerifyMail;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class RegisterControllerTest extends TestCase
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

    public function test_function_store()
    {
        $response = $this->postJson('/api/register',
            [
                'name' => 'Qwerty',
                'tel' => '89228349999',
                'email' => 'next@mail.ru',
                'password' => 'qwerty12',
                'password_confirmation' => 'qwerty12'
            ]);

        $response->assertStatus(200)
            ->assertJsonStructure(
                [
                    'message',
                    'status'
                ]);
    }

    public function test_verify_email_send() {
        Mail::fake();
        $this->post('/api/register', [
            'name' => 'Qwerty',
            'tel' => '89228349999',
            'email' => 'next@mail.ru',
            'password' => 'qwerty12',
            'password_confirmation' => 'qwerty12'
        ]);
        Mail::assertSent(VerifyMail::class);
    }

    public function test_verify_token() {
        $this->post('/api/register', [
            'name' => 'Qwerty',
            'tel' => '89228349999',
            'email' => 'next@mail.ru',
            'password' => 'qwerty12',
            'password_confirmation' => 'qwerty12'
        ]);
        $token = User::first()->verify_token;
        $route = route('register.verify', ['token' => $token]);
        $response = $this->get( $route);
        $response->assertStatus(200);
    }
}
