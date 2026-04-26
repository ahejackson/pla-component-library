import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

type Theme = "light" | "dark";

@customElement("pla-theme-toggle")
export default class PlaThemeToggle extends LitElement {
	@property({ type: String, reflect: true })
	theme: Theme = "light";

	static override styles = css`
		:host {
			--size: 2rem;
			--base-opacity: 0.7;
			--hover-opacity: 1;
			--dark-color: hsl(210 17% 98%);
			--light-color: hsl(210 11% 15%);
			--transition-duration: 0.5s;
		}

		button {
			cursor: pointer;
			border: none;
			background-color: transparent;
			padding: var(--spacing1);
		}

		button svg {
			stroke-linecap: round;
			stroke-linejoin: round;
			width: var(--size);
			height: var(--size);
		}

		.light {
			fill: var(--light-color);
			opacity: var(--base-opacity);
			transition: opacity var(--transition-duration);
		}

		button:hover .light {
			opacity: var(--hover-opacity);
		}

		.dark {
			stroke: var(--dark-color);
			fill: var(--dark-color);
			opacity: var(--base-opacity);
			transition: opacity var(--transition-duration);
		}

		button:hover .dark {
			opacity: var(--hover-opacity);
		}

		.hidden,
		button:hover .hidden {
			opacity: 0;
		}
	`;

	override render() {
		return html`<button
			id="nav-theme-toggle"
			class="nav-button theme-toggle"
			title="Toggles light and dark mode"
			@click=${this.toggleTheme}
		>
			<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<use
					href="/pla-component-library/img/icons.svg#moon"
					class=${this.theme === "light" ? "light" : "light hidden"}
				></use>
				<use
					href="/pla-component-library/img/icons.svg#sun"
					class=${this.theme === "dark" ? "dark" : "dark hidden"}
				></use>
			</svg>
		</button>`;
	}

	override connectedCallback() {
		super.connectedCallback();
		const saved = localStorage.getItem("theme");
		if (saved === "light" || saved === "dark") {
			this.theme = saved;
		} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			this.theme = "dark";
		}
		document.documentElement.setAttribute("color-scheme", this.theme);
	}

	toggleTheme() {
		this.theme = this.theme === "light" ? "dark" : "light";
		localStorage.setItem("theme", this.theme);
		document.documentElement.setAttribute("color-scheme", this.theme);
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"pla-theme-toggle": PlaThemeToggle;
	}
}
