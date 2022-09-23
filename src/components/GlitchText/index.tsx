import type { ParentComponent } from "solid-js";
import * as styles from './index.css';

const GlitchText: ParentComponent = (props) => {
  return <span class={styles.text}>{props.children}</span>
}

export default GlitchText;