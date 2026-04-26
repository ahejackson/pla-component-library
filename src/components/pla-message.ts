import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("pla-message")
export default class PlaMessage extends LitElement {
	@property({ type: String })
	type: "info" | "success" | "warn" | "error" = "info";

	@property({ type: String })
	message: string = "";

	@property({ type: Boolean })
	closable: boolean = false;

	static override styles = css`
		:host {
			--corner-radius: 4px;
			--spacing-vertical: 0.4rem;
			--spacing-horizontal: 0.6rem;
			--close-button-size: 1.2rem;
			--close-button-offset: 0.2rem;

			--info-color-default: light-dark(hsl(197 96% 33%), hsl(197 96% 43%));
			--success-color-default: light-dark(hsl(142 76% 32%), hsl(142 76% 42%));
			--warn-color-default: light-dark(hsl(32 95% 42%), hsl(32 95% 52%));
			--error-color-default: light-dark(hsl(0 72% 47%), hsl(0 72% 57%));
		}

		div {
			--background-default: hsl(from var(--text-color) h s l / 0.2);
			--border-default: var(--text-color);
		}

		.info {
			--text-color: var(--info-text-color, var(--info-color-default));
			--background-color: var(--info-background-color, var(--background-default));
			--border-color: var(--info-border-color, var(--text-color));
		}

		.success {
			--text-color: var(--success-text-color, var(--success-color-default));
			--background-color: var(--success-background-color, var(--background-default));
			--border-color: var(--success-border-color, var(--border-default));
		}

		.warn {
			--text-color: var(--warn-text-color, var(--warn-color-default));
			--background-color: var(--warn-background-color, var(--background-default));
			--border-color: var(--warn-border-color, var(--border-default));
		}

		.error {
			--text-color: var(--error-text-color, var(--error-color-default));
			--background-color: var(--error-background-color, var(--background-default));
			--border-color: var(--error-border-color, var(--border-default));
		}

		div {
			position: relative;
			color: var(--text-color);
			background-color: var(--background-color);
			border: 1px solid var(--border-color);
			border-radius: var(--corner-radius);
			text-align: left;
			padding-block: var(--spacing-vertical);
			padding-inline-start: var(--spacing-horizontal);
			padding-inline-end: calc(
				var(--close-button-offset) + var(--close-button-offset) + var(--close-button-size)
			);
			margin: var(--spacing-vertical) 0;
		}

		button {
			border: 1px solid var(--border-color);
			border-radius: 50%;
			background-color: transparent;
			width: var(--close-button-size);
			height: var(--close-button-size);
			padding: 0;
			margin: 0;
			display: grid;
			place-content: center;
			position: absolute;
			inset-block-start: var(--close-button-offset);
			inset-inline-end: var(--close-button-offset);
		}

		button:hover {
			background-color: var(--border-color);
		}

		button svg {
			width: calc(var(--close-button-size) * 0.8);
			height: calc(var(--close-button-size) * 0.8);
			fill: var(--border-color);
			transition: fill 200ms ease;
		}

		button:hover svg {
			fill: hsl(0, 100%, 100%, 0.8);
		}
	`;

	override render() {
		return html`<div class=${this.type}>
			${this.message ? this.message : html`<slot></slot>`}
			${this.closable
				? html`<button type="button" aria-label="Close" @click=${this.closeButton}>
						<svg xmlns="http://www.w3.org/2000/svg">
							<use href="/img/icons.svg#close"></use>
						</svg>
					</button>`
				: ""}
		</div>`;
	}

	closeButton() {
		this.remove();
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"pla-message": PlaMessage;
	}
}
