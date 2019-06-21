import {html, css, LitElement} from 'lit-element';

class Sidebar extends LitElement {
	static get styles() {
		return [
			css`
				:host div {
					display: block;
					box-sizing: border-box;
					border: 1px dashed orange;
				}
			`
		];
	}

	render() {
		return html`
			<div>
				<ul>
					<li>My dashboard</li>
					<li>My Library</li>
					<li>My Groups</li>
					<li>My Discussions</li>
					<li>My Network</li>
				</ul>
			</div>
		`;
	}
}

window.customElements.define('oae-sidebar', Sidebar);
