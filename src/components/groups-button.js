import { html, LitElement } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import sharedStyles from '../../style/app.scss';
import buttonStyles from '../../style/groups-button.scss';

class buttonGroups extends LitElement {
  static get styles() {
    return [sharedStyles, buttonStyles];
  }

  render() {
    return html`
      <button class="button group-join-button">
        <span class="icon is-small group-join-icon">
          <iron-icon icon="social:group-add"></iron-icon>
        </span>
        <span>Join Group</span>
      </button>
    `;
  }
}

window.customElements.define('groups-button', buttonGroups);
