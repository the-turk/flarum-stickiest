<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->table('discussions', function (Blueprint $table) {
            $table->unique(
                ['is_stickier', 'is_stickiest', 'is_tagSticky', 'last_posted_at'],
                'discussions_stickiest_last_posted_at'
            );
        });
    },

    'down' => function (Builder $schema) {
        $schema->table('discussions', function (Blueprint $table) {
            $table->dropUnique('discussions_stickiest_last_posted_at');
        });
    }
];