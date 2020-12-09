import { html, LitElement } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/iron-icons/av-icons.js';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';
import './library-tags-side.js';

class Sidebar extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles];
  }

  render() {
    let version2 = html`
      <aside class="menu">
        <nav class="level sidebar-dropdown">
          <!-- Left side -->
          <div class="level-left">
            <div class="level-item">
              <figure class="image is-64x64">
                <img class="is-rounded" src="/images/logo-01.svg" />
              </figure>
            </div>
            <div class="level-item">
              <div class="dropdown is-hoverable">
                <div class="dropdown-trigger">
                  <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span>Home</span>
                    <span class="icon is-small">
                      <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                  <div class="dropdown-content">
                    <div class="dropdown-item">
                      <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <ul class="menu-list">
          <li>
            <span class="icon sidebar-icon">
              <iron-icon icon="cloud-upload"></iron-icon>
            </span>
            <a class="dashboard">
              New File
            </a>
          </li>
          <li>
            <span class="icon sidebar-icon">
              <iron-icon icon="create"></iron-icon>
            </span>
            <a class="library">
              Create
            </a>
          </li>
          <li>
            <span class="icon sidebar-icon">
              <iron-icon icon="settings"></iron-icon>
            </span>
            <a class="groups">
              Settings
            </a>
          </li>
        </ul>
        <hr class="navbar-divider sidebar-divider" />
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
        </ul>
      </aside>
    `;

    return version2;
  }
}

window.customElements.define('sidebar-nav', Sidebar);
