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
      animation-delay: -0.036s;
    }

    .lds-roller div:nth-child(1):after {
      top: calc(0.7875 * var(--size, 80px));
      left: calc(0.7875 * var(--size, 80px));
    }

    .lds-roller div:nth-child(2) {
      animation-delay: -0.072s;
    }

    .lds-roller div:nth-child(2):after {
      top: calc(0.85 * var(--size, 80px));
      left: calc(0.7 * var(--size, 80px));
    }

    .lds-roller div:nth-child(3) {
      animation-delay: -0.108s;
    }

    .lds-roller div:nth-child(3):after {
      top: calc(0.8875 * var(--size, 80px));
      left: calc(0.6 * var(--size, 80px));
    }

    .lds-roller div:nth-child(4) {
      animation-delay: -0.144s;
    }

    .lds-roller div:nth-child(4):after {
      top: calc(0.9 * var(--size, 80px));
      left: calc(0.5 * var(--size, 80px));
    }

    .lds-roller div:nth-child(5) {
      animation-delay: -0.18s;
    }

    .lds-roller div:nth-child(5):after {
      top: calc(0.8875 * var(--size, 80px));
      left: calc(0.4 * var(--size, 80px));
    }

    .lds-roller div:nth-child(6) {
      animation-delay: -0.216s;
    }

    .lds-roller div:nth-child(6):after {
      top: calc(0.85 * var(--size, 80px));
      left: calc(0.3 * var(--size, 80px));
    }

    .lds-roller div:nth-child(7) {
      animation-delay: -0.252s;
    }

    .lds-roller div:nth-child(7):after {
      top: calc(0.7875 * var(--size, 80px));
      left: calc(0.2125 * var(--size, 80px));
    }

    .lds-roller div:nth-child(8) {
      animation-delay: -0.288s;
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
    return html` <div class="lds-roller">
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
