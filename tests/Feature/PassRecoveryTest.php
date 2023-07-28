<?php

namespace Tests\Feature;

use App\Mail\VerifyMail;
use App\Models\User;
use App\Notifications\ResetPassword;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;
use Tests\TestCase;

class PassRecoveryTest extends TestCase
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

    public function test_function_pass_recovery(): void
    {
        Notification::fake();

        $this->post('/api/register', [
            'name' => 'Qwerty',
            'tel' => '89096096127',
            'email' => 'next@mail.ru',
            'password' => 'qwerty12',
            'password_confirmation' => 'qwerty12'
        ]);

        $this->assertDatabaseHas('users', [
            'email' => 'next@mail.ru',
        ]);

        $response = $this->post('/api/forget-password', [
            'email' => 'next@mail.ru',
        ]);

        Notification::assertSentTo(User::where('email', 'next@mail.ru')->first(), ResetPassword::class);

        $response->assertStatus(200)
            ->assertJsonStructure([
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
                'token' => 'fgyiuguougcgfhyu123fdsfreter2',
            ]);

        $response->assertStatus(200)
            ->assertJsonStructure(
                [
                    'message',
                    'status',
                ]);
    }



}
