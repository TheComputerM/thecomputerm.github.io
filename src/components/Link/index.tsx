import type { ParentComponent } from "solid-js";
import * as styles from './index.css';

const Link: ParentComponent<{ href: string }> = (props) => {
  return <a class={styles.link} href={props.href}>{props.children}</a>;
};

export default Link;
