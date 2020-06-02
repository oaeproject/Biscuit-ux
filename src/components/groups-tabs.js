import { html, LitElement } from 'lit-element';
import tabsStyles from '../../style/groups-tabs.scss';

class tabsGroups extends LitElement {
  static get styles() {
    return [tabsStyles];
  }

  render() {
    return html`
      <div class="tab">
        <button class="tablinks" onclick="openTab(event, 'Home')">Home</button>
        <button class="tablinks" onclick="openTab(event, 'About')">About</button>
        <button class="tablinks" onclick="openTab(event, 'Library')">Library</button>
        <button class="tablinks" onclick="openTab(event, 'Members')">Members</button>
        <button class="tablinks" onclick="openTab(event, 'Settings')">Settings</button>
      </div>
    `;
  }
}

window.customElements.define('groups-tabs', tabsGroups);
