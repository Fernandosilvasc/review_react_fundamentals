import {Header} from './components/Header'
import {Post} from './components/Post'
import {Sidebar} from './components/Sidebar'

import {posts} from './data/Posts';

import './global.css'
import styles from './App.module.css'

function App() {
  
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
