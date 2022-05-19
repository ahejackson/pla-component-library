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

    span {
      color: var(--alpha-text-color, hsl(197, 96%, 33%));
      font-weight: bold;
    }
  `;

  render() {
    return html`${this.alpha
      ? html`${this.icononly ? "" : html`<span>Alpha!</span>`}
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32 2C33.9972 2 42.6517 16.6615 43.9831 16.6615C45.3146 16.6615 49.9747 11.3301 49.9747 11.3301C49.9747 11.3301 58.6292 39.3202 57.9635 43.3188C57.2977 47.3174 39.323 62.6454 32 61.9789C24.677 62.6454 6.70226 47.3174 6.03653 43.3188C5.3708 39.3202 14.0253 11.3301 14.0253 11.3301C14.0253 11.3301 18.6854 16.6615 20.0169 16.6615C21.3483 16.6615 30.0028 2 32 2ZM49.309 32.6559C42.6517 39.9866 35.9944 44.6517 35.9944 44.6517C35.9944 44.6517 41.9859 47.3174 44.6489 46.651C47.3118 45.9845 49.309 32.6559 49.309 32.6559ZM14.691 32.6559C21.3483 39.9866 28.0056 44.6517 28.0056 44.6517C28.0056 44.6517 22.014 47.3174 19.3511 46.651C16.6882 45.9845 14.691 32.6559 14.691 32.6559Z"
            />
          </svg>`
      : ""}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pla-alpha": PlaIsAlpha;
  }
}
