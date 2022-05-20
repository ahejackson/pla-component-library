import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("pla-expandable")
export default class PlaExpandable extends LitElement {
  @property()
  temp: string = "";

  static styles = css``;

  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pla-expandable": PlaExpandable;
  }
}
