import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

import type { IVs } from "../types";
import { Nature } from "../types";

@customElement("pla-ivs")
export default class PlaIVs extends LitElement {
	@property({ type: Array })
	ivs: IVs = [0, 0, 0, 0, 0, 0];

	@property({ type: String })
	nature: Nature = Nature.Serious;

	@property({ type: Boolean })
	highlightperfect: boolean = false;

	private static natureEffects = getNatureEffects();

	static override styles = css`
		:host {
			--plus-nature-default: light-dark(hsl(196 84% 42%), hsl(196 84% 52%));
			--minus-nature-default: light-dark(hsl(0 82% 66%), hsl(0 92% 76%));
			--iv-perfect-default: inherit;
		}

		ul {
			display: inline;
			list-style: none;
			margin: 0;
			padding: 0;
		}

		li {
			display: inline-block;
		}

		li:not(:first-child)::before {
			content: " / ";
			margin-left: 0.1rem;
		}

		.highlight-perfect {
			--iv-perfect-default: bold;
		}

		.iv-perfect {
			font-weight: var(--font-weight-perfect, var(--iv-perfect-default));
		}

		.iv-plus {
			font-weight: bold;
			color: var(--plus-nature-color, var(--plus-nature-default));
		}

		.iv-minus {
			font-weight: bold;
			color: var(--minus-nature-color, var(--minus-nature-default));
		}
	`;

	override render() {
		const [plus, minus] = PlaIVs.natureEffects.get(this.nature) ?? [-1, -1];
		const highlightClass = { "highlight-perfect": this.highlightperfect };

		return html`<ul class=${classMap(highlightClass)}>
			${this.ivs.map((iv, index) => {
				const displayIV = iv >= 0 ? iv : "x";
				const ivClasses = {
					"iv-perfect": iv === 31,
					"iv-plus": index === plus,
					"iv-minus": index === minus,
				};

				if (ivClasses["iv-perfect"] || ivClasses["iv-plus"] || ivClasses["iv-minus"]) {
					return html`<li><span class=${classMap(ivClasses)}>${displayIV}</span></li>`;
				} else {
					return html`<li>${displayIV}</li>`;
				}
			})}
		</ul>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"pla-ivs": PlaIVs;
	}
}

function getNatureEffects(): Map<Nature, [plus: number, minus: number]> {
	const natureEffects = new Map<Nature, [plus: number, minus: number]>();
	natureEffects.set(Nature.Lonely, [1, 2]);
	natureEffects.set(Nature.Adamant, [1, 3]);
	natureEffects.set(Nature.Naughty, [1, 4]);
	natureEffects.set(Nature.Brave, [1, 5]);
	natureEffects.set(Nature.Bold, [2, 1]);
	natureEffects.set(Nature.Impish, [2, 3]);
	natureEffects.set(Nature.Lax, [2, 4]);
	natureEffects.set(Nature.Relaxed, [2, 5]);
	natureEffects.set(Nature.Modest, [3, 1]);
	natureEffects.set(Nature.Mild, [3, 2]);
	natureEffects.set(Nature.Rash, [3, 4]);
	natureEffects.set(Nature.Quiet, [3, 5]);
	natureEffects.set(Nature.Calm, [4, 1]);
	natureEffects.set(Nature.Gentle, [4, 2]);
	natureEffects.set(Nature.Careful, [4, 3]);
	natureEffects.set(Nature.Sassy, [4, 5]);
	natureEffects.set(Nature.Timid, [5, 1]);
	natureEffects.set(Nature.Hasty, [5, 2]);
	natureEffects.set(Nature.Jolly, [5, 3]);
	natureEffects.set(Nature.Naive, [5, 4]);
	natureEffects.set(Nature.Serious, [-1, -1]);
	natureEffects.set(Nature.Hardy, [-1, -1]);
	natureEffects.set(Nature.Bashful, [-1, -1]);
	natureEffects.set(Nature.Quirky, [-1, -1]);
	natureEffects.set(Nature.Docile, [-1, -1]);
	return natureEffects;
}
