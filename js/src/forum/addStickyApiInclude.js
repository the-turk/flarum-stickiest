import {extend} from 'flarum/common/extend';
import DiscussionListState from 'flarum/forum/states/DiscussionListState';

export default function apiInclude() {
    extend(DiscussionListState.prototype, 'requestParams', function (params) {
        params.include.push('stickyTags');
    });
}
