import {ThumbsUp, Trash} from 'phosphor-react';
import styles from './Comment.module.css';
import {Avatar} from './Avatar';
import {useState} from 'react';

export function Comment({content, onDeleteComment}) {
  const [likes, setLikes] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleNewLikeComment() {
    setLikes(likes + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/58282921?v=4"
        alt="Avatar - Fernando Silva"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fernando Correa da Silva</strong>
              <time
                title="February 8 at 09:00pm"
                dateTime="February 8 at 09:00"
              >
                Posted about 1hr ago
              </time>
            </div>
            <button
              onClick={handleDeleteComment}
              title="Delete the comment">
              <Trash size={24} />
            </button>
          </header>
          <p>{content.text}</p>
        </div>

        <footer>
          <button
            onClick={handleNewLikeComment}>
            <ThumbsUp />
            Thumbs Up <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}