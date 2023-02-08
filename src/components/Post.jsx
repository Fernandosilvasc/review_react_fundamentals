import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/58282921?v=4" alt="Avatar - Fernando Silva"
          />
          <div className={styles.authorInfo}>
            <strong>Fernando Correa da Silva</strong>
            <span>FullStack Engineer</span>
          </div>
        </div>

        <time
          title="February 7 at 09:40pm"
          dateTime="February 7 at 09:40"
        >
          Published at 1hr ago
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <a href="#">👉 jane.design/doctorcare</a>
        <p>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Give us your feedback:</strong>
        <textarea placeholder='Leave your comment here!'/>
        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>
    </article>
  )
}