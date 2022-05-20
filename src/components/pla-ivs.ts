import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { IVs } from "../types";
import { Nature } from "../types";

@customElement("pla-ivs")
export default class PlaIVs extends LitElement {
  @property({ type: Array })
  ivs: IVs = [0, 0, 0, 0, 0, 0];

  @property({ type: String })
  nature: Nature = Nature.Serious;

  private static natureEffects = getNatureEffects();

  static styles = css`
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

    .plus {
      font-weight: bold;
      color: var(--plus-nature-color, hsl(0, 82%, 66%));
    }

    .minus {
      font-weight: bold;
      color: var(--minus-nature-color, hsl(196, 84%, 52%));
    }
  `;

  render() {
    const [plus, minus] = PlaIVs.natureEffects.get(this.nature) ?? [-1, -1];

    return html`<ul>
      ${this.ivs.map((iv, index) => {
        if (index == plus) {
          return html`<li><span class="plus">${iv >= 0 ? iv : "x"}</span></li>`;
        } else if (index == minus) {
          return html`<li>
            <span class="minus">${iv >= 0 ? iv : "x"}</span>
          </li>`;
        } else {
          return html`<li>${iv >= 0 ? iv : "x"}</li>`;
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
