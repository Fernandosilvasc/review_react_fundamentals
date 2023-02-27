import {format, formatDistanceToNow} from 'date-fns';
import {useState} from 'react';
import {v4 as uuid} from 'uuid'

import {Avatar} from './Avatar';
import {Comment} from './Comment';

import styles from './Post.module.css';

export function Post({author, content, publishedAt}) {
  const [comments, setComments] = useState([])
  const [newCommentText, setNewCommentText] = useState('')
  const publishedDateFormatted = format(publishedAt, "LLLL d 'at' HH:mm'h'");
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {addSuffix: true})
  const hashTags = content.filter(item => item.type === 'hashtags');

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText({id: uuid(), text: ''})
  }

  function handleNewCommentChange() {
    setNewCommentText({
      id: uuid(),
      text: event.target.value
    });
  }

  function deleteComment(comment) {
    setComments(() => comments.filter((item) => item.id !== comment.id))
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
            alt={`Avatar - ${author.name}`}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === 'paragraph') {
            return (
              <p key={item.id}>{item.data}</p>
            )
          } else if (item.type === 'anchor') {
            return (
              <a href="#" key={item.id}>{item.data}</a>
            )
          }
        })}
        <p>
          {
            hashTags[0].data.map((item) => (
              <a href="#" key={item.id}>{item.hashTag}</a>
            ))
          }
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Give us your feedback:</strong>
        <textarea
          name='comment'
          placeholder='Leave your comment here!'
          value={newCommentText.text}
          onChange={handleNewCommentChange} />
        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}