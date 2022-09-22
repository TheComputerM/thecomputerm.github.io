import Link from '../Link';
import * as styles from './index.css';

function Navbar() {
  return <nav class={styles.navbar}>
    <a class={`initial ${styles.title}`} href='/'>TheComputerM</a>
    <div class={styles.navitems}>
      <Link href="/">Blog</Link>
      <Link href="/">Projects</Link>
      <Link href="/">Contact</Link>
    </div>
  </nav>
}

export default Navbar;