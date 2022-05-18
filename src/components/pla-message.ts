import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("pla-message")
export default class PlaMessage extends LitElement {
  @property()
  type: "info" | "success" | "warn" | "error" = "info";

  @property({ type: String })
  message: string = "";

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
      margin: var(--spacing-vertical) 0;
      color: var(--text-color);
      background-color: var(--background-color);
      border: 1px solid var(--border-color);
    }
  `;

  render() {
    return html`<div class="${this.type}">
      ${this.message ? this.message : html`<slot></slot>`}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pla-message": PlaMessage;
  }
}
