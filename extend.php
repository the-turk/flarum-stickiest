<?php

/*
 * Stickiest extension for Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

use Flarum\Api\Controller\ListDiscussionsController;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Discussion\Event\Saving;
use Flarum\Discussion\Filter\DiscussionFilterer;
use Flarum\Discussion\Search\DiscussionSearcher;
use Flarum\Extend;
use TheTurk\Stickiest\Event\DiscussionWasStickied;
use TheTurk\Stickiest\Event\DiscussionWasSuperStickied;
use TheTurk\Stickiest\Event\DiscussionWasUnstickied;
use TheTurk\Stickiest\Event\DiscussionWasUnSuperStickied;
use TheTurk\Stickiest\Listener\SaveStickyToDatabase;
use TheTurk\Stickiest\Listener\SaveStickiestToDatabase;
use TheTurk\Stickiest\Listener\SaveTagStickyToDatabase;
use TheTurk\Stickiest\PinStickiedDiscussionsToTop;
use TheTurk\Stickiest\Post\DiscussionStickiedPost;
use TheTurk\Stickiest\Post\DiscussionSuperStickiedPost;
use TheTurk\Stickiest\Query\StickyFilterGambit;
use TheTurk\Stickiest\Query\StickiestFilterGambit;
use TheTurk\Stickiest\Query\TagStickyFilterGambit;
use TheTurk\Stickiest\Listener;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Post())
        ->type(DiscussionStickiedPost::class)
        ->type(DiscussionSuperStickiedPost::class),

    (new Extend\ApiSerializer(DiscussionSerializer::class))
        ->attribute('isSticky', function (DiscussionSerializer $serializer, $discussion) {
            return (bool) $discussion->is_stickier;
        })
        ->attribute('isStickiest', function (DiscussionSerializer $serializer, $discussion) {
            return (bool) $discussion->is_stickiest;
        })
        ->attribute('isTagSticky', function (DiscussionSerializer $serializer, $discussion) {
            return (bool) $discussion->is_tagSticky;
        })
        ->attribute('canSticky', function (DiscussionSerializer $serializer, $discussion) {
            return (bool) $serializer->getActor()->can('sticky', $discussion);
        }),

    (new Extend\ApiController(ListDiscussionsController::class))
        ->addInclude('firstPost'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Event())
        ->listen(Saving::class, SaveStickyToDatabase::class)
        ->listen(Saving::class, SaveStickiestToDatabase::class)
        ->listen(Saving::class, SaveTagStickyToDatabase::class)
        ->listen(DiscussionWasStickied::class, [Listener\CreatePostWhenDiscussionIsStickied::class, 'whenDiscussionWasStickied'])
        ->listen(DiscussionWasSuperStickied::class, [Listener\CreatePostWhenDiscussionIsSuperStickied::class, 'whenDiscussionWasSuperStickied'])
        ->listen(DiscussionWasUnstickied::class, [Listener\CreatePostWhenDiscussionIsStickied::class, 'whenDiscussionWasUnstickied'])
        ->listen(DiscussionWasUnSuperStickied::class, [Listener\CreatePostWhenDiscussionIsSuperStickied::class, 'whenDiscussionWasUnSuperStickied']),

    (new Extend\Filter(DiscussionFilterer::class))
        ->addFilter(StickyFilterGambit::class)
        ->addFilter(StickiestFilterGambit::class)
        ->addFilter(TagStickyFilterGambit::class)
        ->addFilterMutator(PinStickiedDiscussionsToTop::class),

    (new Extend\Settings())
        ->serializeToForum('stickiest.badge_icon', 'the-turk-stickiest.badge_icon'),

    (new Extend\SimpleFlarumSearch(DiscussionSearcher::class))
        ->addGambit(StickyFilterGambit::class)
        ->addGambit(StickiestFilterGambit::class)
        ->addGambit(TagStickyFilterGambit::class),
];
