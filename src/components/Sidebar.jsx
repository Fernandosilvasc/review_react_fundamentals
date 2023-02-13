import styles from './Sidebar.module.css';
import {PencilLine} from "phosphor-react";
import {Avatar} from './Avatar';


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://tinyurl.com/4b8yhscc"
      />
      <div className={styles.profile}>
        <Avatar 
          src="https://avatars.githubusercontent.com/u/58282921?v=4"
          alt="Avatar - Fernando Silva"
        />
        <strong>Fernando Correa da Silva</strong>
        <span>FullStack Engineer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edit your profile
        </a>
      </footer>
    </aside>
  )
}