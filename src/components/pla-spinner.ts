import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("pla-spinner")
export class PlaSpinner extends LitElement {
  static styles = css`
    .lds-roller {
      display: inline-block;
      position: relative;
      width: var(--size, 80px);
      height: var(--size, 80px);
      transform-origin: center;
    }

    .lds-roller div {
      animation: lds-roller var(--speed, 1.2s) cubic-bezier(0.5, 0, 0.5, 1)
        infinite;
      transform-origin: calc(0.5 * var(--size, 80px))
        calc(0.5 * var(--size, 80px));
    }

    .lds-roller div:after {
      content: " ";
      display: block;
      position: absolute;
      width: calc(0.0875 * var(--size, 80px));
      height: calc(0.0875 * var(--size, 80px));
      border-radius: 50%;
      background: var(--color, white);
      margin: calc(-0.05 * var(--size, 80px)) 0 0
        calc(-0.05 * var(--size, 80px));
    }

    .lds-roller div:nth-child(1) {
      animation-delay: calc(-0.03 * var(--speed, 1.2s));
    }

    .lds-roller div:nth-child(1):after {
      top: calc(0.7875 * var(--size, 80px));
      left: calc(0.7875 * var(--size, 80px));
    }

    .lds-roller div:nth-child(2) {
      animation-delay: calc(-0.06 * var(--speed, 1.2s));
    }

    .lds-roller div:nth-child(2):after {
      top: calc(0.85 * var(--size, 80px));
      left: calc(0.7 * var(--size, 80px));
    }

    .lds-roller div:nth-child(3) {
      animation-delay: calc(-0.09 * var(--speed, 1.2s));
    }

    .lds-roller div:nth-child(3):after {
      top: calc(0.8875 * var(--size, 80px));
      left: calc(0.6 * var(--size, 80px));
    }

    .lds-roller div:nth-child(4) {
      animation-delay: calc(-0.12 * var(--speed, 1.2s));
    }

    .lds-roller div:nth-child(4):after {
      top: calc(0.9 * var(--size, 80px));
      left: calc(0.5 * var(--size, 80px));
    }

    .lds-roller div:nth-child(5) {
      animation-delay: calc(-0.15 * var(--speed, 1.2s));
    }

    .lds-roller div:nth-child(5):after {
      top: calc(0.8875 * var(--size, 80px));
      left: calc(0.4 * var(--size, 80px));
    }

    .lds-roller div:nth-child(6) {
      animation-delay: calc(-0.18 * var(--speed, 1.2s));
    }

    .lds-roller div:nth-child(6):after {
      top: calc(0.85 * var(--size, 80px));
      left: calc(0.3 * var(--size, 80px));
    }

    .lds-roller div:nth-child(7) {
      animation-delay: calc(-0.21 * var(--speed, 1.2s));
    }

    .lds-roller div:nth-child(7):after {
      top: calc(0.7875 * var(--size, 80px));
      left: calc(0.2125 * var(--size, 80px));
    }

    .lds-roller div:nth-child(8) {
      animation-delay: calc(-0.24 * var(--speed, 1.2s));
    }

    .lds-roller div:nth-child(8):after {
      top: calc(0.7 * var(--size, 80px));
      left: calc(0.15 * var(--size, 80px));
    }

    @keyframes lds-roller {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  render() {
    return html`<div class="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pla-spinner": PlaSpinner;
  }
}
