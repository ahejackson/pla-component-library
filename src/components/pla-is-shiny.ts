import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("pla-is-shiny")
export default class PlaIsShiny extends LitElement {
  @property({ type: Boolean })
  shiny: boolean = false;

  @property({ type: Boolean })
  square: boolean = false;

  @property({ type: Boolean })
  icononly: boolean = false;

  static styles = css`
    svg {
      width: 1em;
      height: 1em;
      vertical-align: -0.125em;
    }

    span.shiny {
      color: var(--shiny-text-color, hsl(197, 96%, 33%));
      font-weight: bold;
    }

    svg.shiny {
      fill: var(--shiny-icon-color, hsl(168, 64%, 57%));
    }

    span.square {
      color: var(--square-text-color, hsl(197, 96%, 33%));
      font-weight: bold;
    }

    svg.square {
      fill: var(--square-icon-color, hsl(168, 64%, 57%));
    }
  `;

  render() {
    const shinyHtml = html`${this.icononly
        ? ""
        : html`<span class="shiny">Shiny!</span>`}
      <svg xmlns="http://www.w3.org/2000/svg" class="shiny">
        <use xlink:href="/img/icons.svg#shiny"></use>
      </svg>`;

    const squareHtml = html`${this.icononly
        ? ""
        : html`<span class="shiny">Square Shiny!</span>`}
      <svg xmlns="http://www.w3.org/2000/svg" class="square">
        <use xlink:href="/img/icons.svg#square"></use>
      </svg>`;

    return html`${this.square
      ? squareHtml
      : this.shiny
      ? shinyHtml
      : this.icononly
      ? ""
      : "Not Shiny"}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pla-is-shiny": PlaIsShiny;
  }
}
