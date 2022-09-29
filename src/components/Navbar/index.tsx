import Link from "../Link";
import * as styles from "./index.css";

function Navbar() {
  return (
    <nav class={styles.navbar}>
      <a class={styles.title} href="/">
        T<span class={styles.hideWhenSmall}>he</span>C
        <span class={styles.hideWhenSmall}>omputer</span>M
      </a>
      <div class={styles.navitems}>
        <Link href="/">Blog</Link>
        <Link href="/">Projects</Link>
      </div>
    </nav>
  );
}

export default Navbar;
