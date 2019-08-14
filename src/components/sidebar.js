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
        <ul class="menu-list">
          <li>
<<<<<<< HEAD
            <a class="dashboard">
=======
            <a>
              <span class="icon">
                <i class="fas fa-home"></i>
              </span>
>>>>>>> feat: icons
              Dashboard
            </a>
          </li>
          <li>
            <a>
              <img class="sidebar" src="./../../node_modules/@mdi/svg/svg/book-open-outline.svg" />
              Library
            </a>
          </li>
          <li>
            <a>
              <img class="sidebar" src="./../../node_modules/@mdi/svg/svg/format-list-bulleted-square.svg" />
              Discussions</a
            >
          </li>
          <li>
            <a>
              <img class="sidebar" src="./../../node_modules/@mdi/svg/svg/account-group-outline.svg" />
              Groups</a
            >
          </li>
          <li>
            <a>
              <img class="sidebar" src="./../../node_modules/@mdi/svg/svg/wan.svg" />
              Network</a
            >
          </li>
          <hr class="navbar-divider" />
          <li>
            <a>
              <img class="sidebar" src="./../../node_modules/@mdi/svg/svg/settings-outline.svg" />
              User Settings</a
            >
          </li>
        </ul>
      </aside>
    `;
  }
}

window.customElements.define('sidebar-nav', Sidebar);
