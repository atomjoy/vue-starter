<script setup>
import CodeHighlight from '@/components/utils/CodeHighlight/CodeHighlight.vue'
import CodeHighlightMini from '@/components/utils/CodeHighlight/CodeHighlightMini.vue'
import TopMenu from '@/views/page/menu/TopMenu.vue'

const code = `<?php

namespace App\\Models;

// use Illuminate\\Contracts\\Auth\\MustVerifyEmail;
use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'size' => '15px',
        ];
    }
}
`
</script>

<template>
	<TopMenu />
	<div class="section">
		<CodeHighlight lang="php" :code="code" filename="App\Models\User.php" />
		<!-- <CodeHighlight lang="php" :code="code" theme="dark-theme" filename="App\Models\User.php" /> -->
		<!-- <CodeHighlightMini lang="php" :code="code" /> -->
	</div>
</template>
