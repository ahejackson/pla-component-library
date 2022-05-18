import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("pla-message")
export default class PlaMessage extends LitElement {
  @property()
  type: "info" | "success" | "warn" | "error" = "info";

  @property({ type: String })
  message: string = "";

  @property({ type: Boolean })
  closable: boolean = true;

  static styles = css`
    :host {
      --corner-radius: 4px;
      --spacing-vertical: 0.4rem;
      --spacing-horizontal: 0.6rem;
    }

    .info {
      --text-color: var(--info-text-color, hsl(197, 96%, 33%));
      --background-color: var(--info-background-color, hsl(197, 96%, 33%, 0.2));
      --border-color: var(--info-border-color, hsl(197, 96%, 33%));
    }

    .success {
      --text-color: var(--success-text-color, hsl(142, 76%, 36%));
      --background-color: var(
        --success-background-color,
        hsl(142, 76%, 36%, 0.2)
      );
      --border-color: var(--success-border-color, hsl(142, 76%, 36%));
    }

    .warn {
      --text-color: var(--warn-text-color, hsl(32, 95%, 44%));
      --background-color: var(--warn-background-color, hsl(32, 95%, 44%, 0.2));
      --border-color: var(--warn-border-color, hsl(32, 95%, 44%));
    }

    .error {
      --text-color: var(--error-text-color, hsl(0, 72%, 51%));
      --background-color: var(--error-background-color, hsl(0, 72%, 51%, 0.2));
      --border-color: var(--error-border-color, hsl(0, 72%, 51%));
    }

    div {
      text-align: left;
      border-radius: var(--corner-radius);
      padding: var(--spacing-vertical) var(--spacing-horizontal);

      color: var(--text-color);
      background-color: var(--background-color);
      border: 1px solid var(--border-color);
      margin: var(--spacing-vertical) 0;
      display: flex;
      justify-content: space-between;
    }

    slot {
      display: block;
    }

    button {
      border: 1px solid var(--border-color);
      background-color: transparent;
      align-self: right;
      width: 1.2rem;
      height: 1.2rem;
      padding: 0;
      margin: 0;
      border-radius: 50%;
      display: grid;
      place-content: center;
      flex-shrink: 0;
    }

    button:hover {
      background-color: var(--border-color);
    }

    button svg {
      width: 1rem;
      height: 1rem;
      fill: var(--border-color);
      transition: fill;
      transition-duration: 200ms;
    }

    button:hover svg {
      width: 1rem;
      height: 1rem;
      fill: hsl(0, 100%, 100%, 0.8);
    }
  `;

  render() {
    return html`<div class=${this.type}>
      ${this.message ? this.message : html`<slot></slot>`}
      ${this.closable
        ? html`<button
            type="button"
            aria-label="Close"
            @click=${this.closeButton}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
              />
            </svg>
          </button>`
        : ""}
    </div>`;
  }

  closeButton() {
    this.remove();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pla-message": PlaMessage;
  }
}
