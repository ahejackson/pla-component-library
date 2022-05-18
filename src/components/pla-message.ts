import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("pla-message")
export default class PlaMessage extends LitElement {
  @property()
  type: "error" | "warn" | "info" = "info";

  @property({ type: String })
  message: string = "";

  static styles = css`
    :host {
      --corner-radius: 2px;
      --spacing1: 0.4rem;
      --spacing2: 0.6rem;
      --color: black;
      --background-color: red;
    }

    div {
      text-align: left;
      border-radius: var(--corner-radius);
      padding: var(--spacing1) var(--spacing2);
      margin: var(--spacing2) 0;
      color: var(--color);
      background-color: var(--background-color);
      border: 1px solid var(--color);
    }

    .pla-message-error {
      color: var(--red);
      background-color: var(--red-bg);
      border: 1px solid var(--red);
    }

    .pla-message-info {
      color: var(--text1);
      background-color: rgba(var(--brand-rgb), 0.8);
      border: 1px solid var(--text2);
    }
  `;

  render() {
    return html`<div>${this.message}</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pla-message": PlaMessage;
  }
}
