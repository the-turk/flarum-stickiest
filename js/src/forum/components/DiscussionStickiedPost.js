import EventPost from 'flarum/components/EventPost';

export default class DiscussionStickiedPost extends EventPost {
  icon() {
    return 'fas fa-thumbtack';
  }

  descriptionKey() {
    return this.attrs.post.content().sticky
      ? 'the-turk-stickiest.forum.post_stream.discussion_stickied_text'
      : 'the-turk-stickiest.forum.post_stream.discussion_unstickied_text';
  }
}
