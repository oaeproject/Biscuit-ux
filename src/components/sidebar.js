import { html, LitElement } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/iron-icons/av-icons.js';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';

class Sidebar extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles];
  }

  render() {
    let version2 = html`
      <aside class="menu">
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

    let version1 = html`
      <aside class="menu">
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

    return version2;
  }
}

window.customElements.define('sidebar-nav', Sidebar);
