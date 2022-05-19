import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("pla-is-alpha")
export default class PlaIsAlpha extends LitElement {
  @property({ type: Boolean })
  alpha: boolean = false;

  @property({ type: Boolean })
  icononly: boolean = false;

  static styles = css`
    svg {
      width: 1em;
      height: 1em;
      vertical-align: -0.125em;
      fill: var(--alpha-icon-color, hsl(0, 69%, 61%));
    }

    .alpha {
      color: var(--alpha-text-color, hsl(197, 96%, 33%));
      font-weight: bold;
    }
  `;

  render() {
    return this.alpha
      ? html`${this.icononly ? "" : html`<span class="alpha">Alpha!</span>`}
          <svg xmlns="http://www.w3.org/2000/svg">
            <use xlink:href="/img/icons.svg#alpha"></use>
          </svg>`
      : html`${this.icononly ? "" : html`<span>Not Alpha</span>`}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pla-alpha": PlaIsAlpha;
  }
}
