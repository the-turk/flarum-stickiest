import app from 'flarum/app';
import Model from 'flarum/Model';
import Discussion from 'flarum/models/Discussion';

import DiscussionStickiedPost from './components/DiscussionStickiedPost';
import DiscussionSuperStickiedPost from './components/DiscussionSuperStickiedPost';
import addStickyBadge from './addStickyBadge';
import addStickiestBadge from './addStickiestBadge';
import addStickyControl from './addStickyControl';
import addStickiestControl from './addStickiestControl';
import addTagStickyControl from './addTagStickyControl';

app.initializers.add(
  'the-turk-stickiest',
  () => {
    app.postComponents.discussionStickied = DiscussionStickiedPost;
    app.postComponents.discussionSuperStickied = DiscussionSuperStickiedPost;

    Discussion.prototype.isSticky = Model.attribute('isSticky');
    Discussion.prototype.isStickiest = Model.attribute('isStickiest');
    Discussion.prototype.isTagSticky = Model.attribute('isTagSticky');
    Discussion.prototype.canSticky = Model.attribute('canSticky');

    addStickyBadge();
    addStickiestBadge();
    addStickyControl();
    addStickiestControl();
    addTagStickyControl();
  },
  -1
);
