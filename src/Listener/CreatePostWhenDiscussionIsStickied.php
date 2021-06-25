<?php

namespace TheTurk\Stickiest\Listener;

use Flarum\Discussion\Discussion;
use Flarum\User\User;
use TheTurk\Stickiest\Event\DiscussionWasStickied;
use TheTurk\Stickiest\Event\DiscussionWasUnstickied;
use TheTurk\Stickiest\Post\DiscussionStickiedPost;

class CreatePostWhenDiscussionIsStickied
{
    /**
     * @param DiscussionWasStickied $event
     */
    public static function whenDiscussionWasStickied(DiscussionWasStickied $event)
    {
        static::stickyChanged($event->discussion, $event->user, true);
    }

    /**
     * @param DiscussionWasUnstickied $event
     */
    public static function whenDiscussionWasUnstickied(DiscussionWasUnstickied $event)
    {
        static::stickyChanged($event->discussion, $event->user, false);
    }

    /**
     * @param Discussion $discussion
     * @param User $user
     * @param bool $isSticky
     */
    protected static function stickyChanged(Discussion $discussion, User $user, $isSticky)
    {
        $post = DiscussionStickiedPost::reply(
            $discussion->id,
            $user->id,
            $isSticky
        );

        $discussion->mergePost($post);
    }
}
