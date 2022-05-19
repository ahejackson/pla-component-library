import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("pla-ivs")
export default class PlaIVs extends LitElement {
  static styles = css``;

  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pla-ivs": PlaIVs;
  }
}
