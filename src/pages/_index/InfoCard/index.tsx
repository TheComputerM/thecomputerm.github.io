import type { Component } from "solid-js";
import * as styles from "./index.css";
import { computePosition, offset, flip } from "@floating-ui/dom"

interface InfoCardProps {
    name: string,
    icon: string,
    desc?: string
}

const InfoCard: Component<InfoCardProps> = (props) => {
    let target!: HTMLDivElement;
    let tooltip!: HTMLDivElement;


    function updateTooltip() {
        computePosition(target, tooltip, { placement: 'bottom-start', middleware: [offset(6), flip()] }).then(({ x, y }) => {
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
        <div role="listitem" onFocus={showTooltip} onBlur={hideTooltip} tabIndex={0} ref={target} class={styles.card}>
            <img loading="lazy" onPointerEnter={showTooltip} onPointerLeave={hideTooltip} src={`/api/logos/${props.icon}.svg`} />
            <div class={styles.tooltip} ref={tooltip}>
                <h5>{props.name}</h5>
                <hr style={{margin: '6px 0'}} />
                {props.desc}
            </div>
        </div>
    )
}

export default InfoCard;