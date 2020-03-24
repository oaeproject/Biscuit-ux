import { html, LitElement } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/iron-icons/av-icons.js';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';

class SidebarV2 extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles];
  }

  render() {
    return html`
      <aside class="menu">
        <div class="navbar-brand sidebar-brand">
          <a class="navbar-item" href="http://0.0.0.0:8080/oae">
            <img src="/images/logo-oae2.svg" width="112" height="28" />
          </a>
        </div>
        <ul class="menu-list">
          <li>
            <span class="icon sidebar-icon">
              <iron-icon icon="dashboard"></iron-icon>
            </span>
            <a class="dashboard">
              Dashboard
            </a>
          </li>
          <li>
            <span class="icon sidebar-icon">
              <iron-icon icon="av:library-books"></iron-icon>
            </span>
            <a class="library">
              Library
            </a>
          </li>
          <li>
            <span class="icon sidebar-icon">
              <iron-icon icon="content-paste"></iron-icon>
            </span>
            <a class="discussions">
              Discussions
            </a>
          </li>
          <li>
            <span class="icon sidebar-icon">
              <iron-icon icon="social:people-outline"></iron-icon>
            </span>
            <a class="groups">
              Groups
            </a>
          </li>
          <li>
            <span class="icon sidebar-icon">
              <iron-icon icon="social:public"></iron-icon>
            </span>
            <a class="network">
              Network
            </a>
          </li>
        </ul>
      </aside>
    `;
  }
}

window.customElements.define('sidebar-nav2', SidebarV2);
