import type { Component } from "solid-js";
import * as styles from "./index.css";
import { computePosition, offset, flip } from "@floating-ui/dom"

interface InfoCardProps {
    name: string,
    icon: string,
    desc?: string
}

const InfoCard: Component<InfoCardProps> = (props) => {
    let img!: HTMLImageElement;
    let tooltip!: HTMLDivElement;


    function updateTooltip() {
        computePosition(img, tooltip, { placement: 'bottom-start', middleware: [offset(6), flip()] }).then(({ x, y }) => {
            Object.assign(tooltip.style, {
                left: `${x}px`,
                top: `${y}px`,
            });
        })
    }

    function showTooltip() {
        tooltip.style.display = 'block';
        updateTooltip();
    }

    function hideTooltip() {
        tooltip.style.display = 'none';
    }

    return (
        <div class={styles.card}>
            <img ref={img} loading="lazy" onPointerEnter={showTooltip} onPointerLeave={hideTooltip} src={`/api/logos/${props.icon}.svg`} />
            <div class={styles.tooltip} ref={tooltip}>
                <h5>{props.name}</h5>
                <hr style={{margin: '6px 0'}} />
                {props.desc}
            </div>
        </div>
    )
}

export default InfoCard;