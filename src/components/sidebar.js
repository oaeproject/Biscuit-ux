import { html, LitElement } from 'lit-element';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';

class Sidebar extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles];
  }

  render() {
    return html`
      <aside class="menu">
        <div class="navbar-brand sidebar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>
        </div>
        <ul class="menu-list">
          <li>
            <a class="dashboard">
              Dashboard
            </a>
          </li>
          <li>
            <a class="library">
              Library
            </a>
          </li>
          <li>
            <a class="discussions">
              Discussions
            </a>
          </li>
          <li>
            <a class="groups">
              Groups
            </a>
          </li>
          <li>
            <a class="network">
              Network
            </a>
          </li>
          <hr class="navbar-divider" />
          <li>
            <a class="user-settings">
              User Settings
            </a>
          </li>
        </ul>
      </aside>
    `;
  }
}

window.customElements.define('sidebar-nav', Sidebar);
