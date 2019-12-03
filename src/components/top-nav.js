import { html, LitElement } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/iron-icons/av-icons.js';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';

class topNav extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles];
  }

  render() {
    return html`
        <section>
          <nav class="navbar" role="navigation" aria-label="dropdown navigation">
            <div class="navbar-item">
            <div class="field has-addons has-addons-centered">
              <p class="control">
                <span class="icon topbar-search-icon">
                  <iron-icon icon="search"></iron-icon>
                </span>
                  <p class="control">
                    <input class="input" type="text" placeholder="Type to search">
                  </p>
                  </p>
                </div>
                
              </div>
              <div class="navbar-end is-small">
                <div class="navbar-item has-dropdown is-hoverable notifications-button">
                  <a class="navbar-link">
                  <img class="top-menu" src="./../../node_modules/@mdi/svg/svg/bell-outline.svg"/>
                    Notifications
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
                  </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                  <img class="top-menu" src="./../../node_modules/@mdi/svg/svg/map-outline.svg"/>
                    Switch Context
                  </a>
                  <div class="navbar-dropdown">
                    <a class="navbar-item">
                      User Area
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item">
                      OAE Design
                    </a>
                    <a class="navbar-item">
                      Open Apereo 2017
                    </a>
                  </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable is-small">
                  <a class="navbar-link avatar">
                    Hi, Rita Carvalho
                  <img class="top-menu avatar" src="./../../node_modules/@mdi/svg/svg/account-outline.svg"/>
                  </a>
                  <div class="navbar-dropdown">
                    <a class="navbar-item">
                      Settings
                    </a>
                    <a class="navbar-item">
                      Dark Mode
                    </a>
                    <a class="navbar-item">
                      Help
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item">
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </nav>
        </section>
    `;
  }
}

window.customElements.define('top-nav', topNav);
