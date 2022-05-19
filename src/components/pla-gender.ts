import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("pla-gender")
export default class PlaGender extends LitElement {
  @property({ type: String })
  gender: "male" | "female" | "genderless" = "genderless";

  @property({ type: Boolean })
  icononly: boolean = false;

  static styles = css`
    svg {
      width: 1em;
      height: 1em;
      vertical-align: -0.125em;
      fill: var(--alpha-icon-color, hsl(0, 69%, 61%));
    }

    .male {
      fill: var(--male-color, hsl(234, 42%, 55%));
    }

    .female {
      fill: var(--male-color, hsl(340, 70%, 49%));
    }

    .genderless {
      fill: var(--male-color, hsl(210, 7%, 56%));
    }
  `;

  render() {
    if (this.gender === "male") {
      return html`${this.icononly ? "" : "Male"}
        <svg xmlns="http://www.w3.org/2000/svg" class="male">
          <use xlink:href="/img/icons.svg#male"></use>
        </svg>`;
    } else if (this.gender === "female") {
      return html`${this.icononly ? "" : "Female"}
        <svg xmlns="http://www.w3.org/2000/svg" class="female">
          <use xlink:href="/img/icons.svg#female"></use>
        </svg>`;
    } else {
      return html`${this.icononly ? "" : "Genderless"}
        <svg xmlns="http://www.w3.org/2000/svg" class="genderless">
          <use xlink:href="/img/icons.svg#genderless"></use>
        </svg>`;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pla-gender": PlaGender;
  }
}
