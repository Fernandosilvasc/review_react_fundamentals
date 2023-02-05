import {Header} from './components/Header'
import {Post} from './components/Post'
import './global.css'
import styles from './App.module.css'
import {Sidebar} from './components/Sidebar'

function App() {

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
