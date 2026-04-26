import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("pla-gender")
export default class PlaGender extends LitElement {
	@property({ type: String })
	gender: "male" | "female" | "genderless" = "genderless";

	@property({ type: Boolean })
	icononly: boolean = false;

	static override styles = css`
		:host {
			--male-default: light-dark(hsl(234 42% 55%), hsl(234 52% 65%));
			--female-default: light-dark(hsl(340 70% 49%), hsl(340 80% 59%));
			--genderless-default: light-dark(hsl(210 7% 56%), hsl(210 17% 56%));
		}

		svg {
			width: 1em;
			height: 1em;
			vertical-align: -0.125em;
		}

		.male {
			fill: var(--male-color, var(--male-default));
		}

		.female {
			fill: var(--female-color, var(--female-default));
		}

		.genderless {
			fill: var(--genderless-color, var(--genderless-default));
		}
	`;

	override render() {
		if (this.gender === "male") {
			return html`${this.icononly ? "" : "Male"}
				<svg xmlns="http://www.w3.org/2000/svg" class="male">
					<use href="/pla-component-library/img/icons.svg#male"></use>
				</svg>`;
		} else if (this.gender === "female") {
			return html`${this.icononly ? "" : "Female"}
				<svg xmlns="http://www.w3.org/2000/svg" class="female">
					<use href="/pla-component-library/img/icons.svg#female"></use>
				</svg>`;
		} else {
			return html`${this.icononly ? "" : "Genderless"}
				<svg xmlns="http://www.w3.org/2000/svg" class="genderless">
					<use href="/pla-component-library/img/icons.svg#genderless"></use>
				</svg>`;
		}
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"pla-gender": PlaGender;
	}
}
