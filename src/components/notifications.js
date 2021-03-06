import { html, LitElement } from 'lit-element';
import sharedStyles from '../../style/app.scss';
import TopnavButtonStyles from '../../style/topnav-buttons.scss';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/iron-icons/av-icons.js';
import '@polymer/iron-icons/hardware-icons.js';

class Notifications extends LitElement {
  static get styles() {
    return [sharedStyles, TopnavButtonStyles];
  }

  render() {
    return html`
      <div class="navbar-item has-dropdown is-hoverable notifications-button">
        <a class="navbar-link">
          <span class="icon notification-icon">
            <iron-icon icon="social:notifications-none"></iron-icon>
          </span>
          <span class="notifications-label">Notifications</span>
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item">
            Notification 1
          </a>
          <a class="navbar-item">
            Notification 2
          </a>
          <a class="navbar-item">
            Notification 3
          </a>
          <hr class="navbar-divider" />
          <div class="navbar-item">
            See all
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('notifications-button', Notifications);
