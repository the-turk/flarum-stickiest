import app from 'flarum/app';
import Model from 'flarum/Model';
import Discussion from 'flarum/models/Discussion';

import DiscussionSuperStickiedPost from './components/DiscussionSuperStickiedPost';
import addStickyBadge from './addStickyBadge';
import addStickiestBadge from './addStickiestBadge';
import addStickiestControl from './addStickiestControl';
import addTagStickyControl from './addTagStickyControl';

app.initializers.add(
  'the-turk-stickiest',
  () => {
    app.postComponents.discussionSuperStickied = DiscussionSuperStickiedPost;

    Discussion.prototype.isStickiest = Model.attribute('isStickiest');
    Discussion.prototype.isTagSticky = Model.attribute('isTagSticky');

    addStickyBadge();
    addStickiestBadge();
    addStickiestControl();
    addTagStickyControl();
  },
  -1
);
