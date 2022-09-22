import type { ParentComponent } from "solid-js";
import * as styles from "./index.css";

const Section: ParentComponent = (props) => {
  return <section class={styles.section}>{props.children}</section>;
};

export default Section;
