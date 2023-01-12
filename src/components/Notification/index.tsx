import { Component, onMount } from "solid-js";
import toast, { Toaster } from "solid-toast";
import { palette } from '../../styles/themes.css';

function notify(message: string) {
  toast(message, {
    style: {
      border: `2px solid ${palette.green}`,
      "background-color": palette.black,
      color: palette.foreground,
      "border-radius": '4px',
      "box-shadow": `0 0 12px ${palette.green}`
    },
    position: "top-center"
  });
}

const Notification: Component = () => {
  onMount(() => {
    notify("Website Under Development");
  });
  return <Toaster />;
};

export default Notification;
