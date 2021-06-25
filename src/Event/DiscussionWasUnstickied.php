<?php

namespace TheTurk\Stickiest\Event;

use Flarum\Discussion\Discussion;
use Flarum\User\User;

class DiscussionWasUnstickied
{
    /**
     * @var Discussion
     */
    public $discussion;

    /**
     * @var User
     */
    public $user;

    /**
     * @param Discussion $discussion
     * @param User $user
     */
    public function __construct(Discussion $discussion, User $user)
    {
        $this->discussion = $discussion;
        $this->user = $user;
    }
}
