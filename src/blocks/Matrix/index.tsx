// @ts-nocheck
import { onCleanup, onMount } from "solid-js";
import * as styles from "./index.css";

function getRandomCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 94 + 33));
}

function Matrix() {
  let canvas!: HTMLCanvasElement;
  let intervalId: number;

  function init() {
    const ctx = canvas.getContext("2d");
    const w = (canvas.width = document.documentElement.clientWidth);
    const h = (canvas.height = document.documentElement.clientHeight - 125);

    ctx.clearRect(0, 0, w, h);

    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);
    ctx.font = "15pt monospace";

    function matrix() {
      ctx.fillStyle = "#0001";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "#00ff00";
      for (let i = 0; i < ypos.length; i++) {
        const text = getRandomCharacter();
        const y = ypos[i];
        const x = i * 20;
        ctx.fillText(text, x, y);
        if (y > h + Math.random() * 1000 - 100) ypos[i] = 0;
        else ypos[i] = y + 20;
      }
    }

    intervalId = setInterval(matrix, 50);
  }

  function destroy() {
    clearInterval(intervalId);
  }

  function onResize() {
    destroy();
    init();
  }

  onMount(() => {
    init();
    window.addEventListener('resize', onResize, {passive: true});
  });
  onCleanup(() => {
    destroy();
    window.removeEventListener('resize', onResize);
  });

  return (
    <div class={styles.container}>
      <canvas class={styles.canvas} ref={canvas} />
      <div class={styles.text}>
        <h1>TCM</h1>
      </div>
    </div>
  );
}

export default Matrix;