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

	static override styles = css`
		:host {
			--shiny-text-default: light-dark(hsl(197 96% 33%), hsl(197 96% 43%));
			--shiny-icon-default: light-dark(hsl(168 64% 57%), hsl(168 64% 67%));
			--square-text-default: light-dark(hsl(197 96% 33%), hsl(197 96% 43%));
			--square-icon-default: light-dark(hsl(168 64% 57%), hsl(168 64% 67%));
		}

		svg {
			width: 1em;
			height: 1em;
			vertical-align: -0.125em;
		}

		span.shiny {
			color: var(--shiny-text-color, var(--shiny-text-default));
			font-weight: bold;
		}

		svg.shiny {
			fill: var(--shiny-icon-color, var(--shiny-icon-default));
		}

		span.square {
			color: var(--square-text-color, var(--square-text-default));
			font-weight: bold;
		}

		svg.square {
			fill: var(--square-icon-color, var(--square-icon-default));
		}
	`;

	override render() {
		const shinyHtml = html`${this.icononly ? "" : html`<span class="shiny">Shiny!</span>`}
			<svg xmlns="http://www.w3.org/2000/svg" class="shiny">
				<use href="/pla-component-library/img/icons.svg#shiny"></use>
			</svg>`;

		const squareHtml = html`${this.icononly ? "" : html`<span class="square">Square Shiny!</span>`}
			<svg xmlns="http://www.w3.org/2000/svg" class="square">
				<use href="/pla-component-library/img/icons.svg#square"></use>
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
