import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("pla-is-alpha")
export default class PlaIsAlpha extends LitElement {
	@property({ type: Boolean })
	alpha: boolean = false;

	@property({ type: Boolean })
	icononly: boolean = false;

	static override styles = css`
		:host {
			--alpha-text-default: light-dark(hsl(197 96% 33%), hsl(197 96% 43%));
			--alpha-icon-default: light-dark(hsl(0 69% 61%), hsl(0 79% 71%));
		}

		svg {
			width: 1em;
			height: 1em;
			vertical-align: -0.125em;
			fill: var(--alpha-icon-color, var(--alpha-icon-default));
		}

		.alpha {
			color: var(--alpha-text-color, var(--alpha-text-default));
			font-weight: bold;
		}
	`;

	override render() {
		if (this.alpha) {
			return html`${this.icononly ? "" : html`<span class="alpha">Alpha!</span>`}
				<svg xmlns="http://www.w3.org/2000/svg">
					<use href="/img/icons.svg#alpha"></use>
				</svg>`;
		} else {
			return this.icononly ? html`` : html`<span>Not Alpha</span>`;
		}
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"pla-is-alpha": PlaIsAlpha;
	}
}
