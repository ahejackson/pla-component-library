import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("pla-gender")
export default class PlaGender extends LitElement {
  static styles = css``;

  @property({ type: String })
  gender: "male" | "female" | "genderless" = "genderless";

  render() {
    return html`${this.gender}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pla-gender": PlaGender;
  }
}
