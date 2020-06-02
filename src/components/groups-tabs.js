import { html, LitElement } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/iron-icons/av-icons.js';
import tabsStyles from '../../style/groups-tabs.scss';

class tabsGroups extends LitElement {
  static get styles() {
    return [tabsStyles];
  }

  render() {
    return html`
      <div class="tab">
        <button class="tablinks" onclick="openTab(event, 'Home')">
          <span class="icon is-small button-icon">
            <iron-icon icon="icons:home"></iron-icon>
          </span>
          <span>Home</span>
        </button>
        <button class="tablinks" onclick="openTab(event, 'About')">
          <span class="icon is-small button-icon">
            <iron-icon icon="icons:error-outline"></iron-icon>
          </span>
          <span>About</span>
        </button>
        <button class="tablinks" onclick="openTab(event, 'Library')">
          <span class="icon is-small button-icon">
            <iron-icon icon="av:library-books"></iron-icon>
          </span>
          <span>Library</span>
        </button>
        <button class="tablinks" onclick="openTab(event, 'Members')">
          <span class="icon is-small button-icon">
            <iron-icon icon="social:people-outline"></iron-icon>
          </span>
          <span>Members</span>
        </button>
        <button class="tablinks" onclick="openTab(event, 'Settings')">
          <span class="icon is-small button-icon">
            <iron-icon icon="icons:settings"></iron-icon>
          </span>
          <span>Settings</span>
        </button>
      </div>

      <hr class="section-divider">
    `;
  }
}

window.customElements.define('groups-tabs', tabsGroups);
