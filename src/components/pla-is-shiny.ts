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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        class="shiny"
      >
        <path
          d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
        ></path>
      </svg>`;

    const squareHtml = html`${this.icononly
        ? ""
        : html`<span class="shiny">Square Shiny!</span>`}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        class="square"
      >
        <path
          d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"
        ></path>
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
