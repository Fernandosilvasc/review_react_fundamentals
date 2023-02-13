import {ThumbsUp, Trash} from 'phosphor-react';
import styles from './Comment.module.css';
import {Avatar} from './Avatar';

export function Comment() {
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
            <button title="Delete the comment">
              <Trash size={24} />
            </button>
          </header>
          <p>Well Done Fernando, my congrats 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Thumbs Up <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}