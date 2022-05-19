import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("pla-expandable-panel")
export default class PlaExpandablePanel extends LitElement {
  static styles = css``;

  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pla-expandable-panel": PlaExpandablePanel;
  }
}
