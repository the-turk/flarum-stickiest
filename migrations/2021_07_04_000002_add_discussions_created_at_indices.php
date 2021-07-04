<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->table('discussions', function (Blueprint $table) {
            $table->index(['is_stickiest', 'created_at']);
            $table->index(['is_tagSticky', 'created_at']);
        });
    },

    'down' => function (Builder $schema) {
        $schema->table('discussions', function (Blueprint $table) {
            $table->dropIndex(['is_stickiest', 'created_at']);
            $table->dropIndex(['is_tagSticky', 'created_at']);
        });
    }
];