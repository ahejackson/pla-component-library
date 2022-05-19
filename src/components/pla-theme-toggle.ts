import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("pla-theme-toggle")
export default class PlaThemeToggle extends LitElement {
  render() {
    return html`<button
      id="nav-theme-toggle"
      class="nav-button theme-toggle"
      title="Toggles light and dark mode"
    >
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <use xlink:href="/img/icons.svg#sun"></use>
        <use xlink:href="/img/icons.svg#moon"></use>
      </svg>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pla-theme-toggle": PlaThemeToggle;
  }
}
