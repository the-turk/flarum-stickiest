<?php

namespace TheTurk\Stickiest\Listener;

use Flarum\Discussion\Event\Saving;
use TheTurk\Stickiest\Event\DiscussionWasStickied;
use TheTurk\Stickiest\Event\DiscussionWasUnstickied;

class SaveStickyToDatabase
{
    /**
     * @param Saving $event
     */
    public function handle(Saving $event)
    {
        if (isset($event->data['attributes']['isSticky'])) {
            $isSticky = (bool) $event->data['attributes']['isSticky'];
            $discussion = $event->discussion;
            $actor = $event->actor;

            $actor->assertCan('sticky', $discussion);

            if ((bool) $discussion->is_stickier === $isSticky) {
                return;
            }

            $discussion->is_stickier = $isSticky;

            $discussion->raise(
                $discussion->is_stickier
                    ? new DiscussionWasStickied($discussion, $actor)
                    : new DiscussionWasUnstickied($discussion, $actor)
            );
        }
    }
}
