<?php

use Flarum\Database\Migration;
use Flarum\Group\Group;

return Migration::addPermissions([
    'discussion.stickiest'           => Group::MODERATOR_ID,
    'discussion.stickiest.tagSticky' => Group::MODERATOR_ID
]);