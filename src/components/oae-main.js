import {html, css} from 'lit-element';
import {LitElement} from 'lit-element';

// These are the shared styles needed by this element.
import {SharedStyles} from './shared-styles.js';

class Main extends LitElement {
	static get styles() {
		return [
			css`
				:host {
					flex: 1;
					display: block;
					box-sizing: border-box;
				}
				:host div {
					border: 1px dashed cyan;
				}
			`
		];
	}

	render() {
		return html`
			<div>
				<section>
					<h2>This is OAE!!</h2>
					<p>
						THIS IS A TEST Head back
						<a href="/">home</a> and try again?
					</p>
				</section>
			</div>
		`;
	}
}

window.customElements.define('oae-main', Main);
