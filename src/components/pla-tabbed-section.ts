import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("pla-tabbed-section")
export default class PlaTabbedSection extends LitElement {
  static styles = css``;

  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pla-tabbed-section": PlaTabbedSection;
  }
}
