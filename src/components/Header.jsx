import styles from './Header.module.css';
import igniteLogo from '../assets/Ignite-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Ignite Logo" />
      <h1>FCS Feed</h1>
    </header>
  )
}