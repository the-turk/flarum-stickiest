<?php

use Flarum\Database\Migration;

return Migration::addColumns('discussions', [
    // this supposed to be named `is_sticky` but I don't
    // want to conflict with `flarum/sticky` extension in any case.
    'is_stickier' => ['boolean', 'default' => 0],

    // this indicates the super sticky status of a discussion.
    'is_stickiest' => ['boolean', 'default' => 0],

    // and this indicates the tag sticky status of a discussion.
    'is_tagSticky' => ['boolean', 'default' => 0]
]);
