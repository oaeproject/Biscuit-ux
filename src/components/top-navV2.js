import { html, LitElement } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/iron-icons/maps-icons.js';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';
import './notifications.js';
import './context.js';
import './user-button.js';

class topNavV2 extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles];
  }

  render() {
    return html`
      <header class="navbar">
        <div class="container top-nav">
            <div class="navbar-item">
              <div class="field has-addons has-addons-centered">
                <p class="control">
                  <span class="icon topbar-search-icon">
                    <iron-icon icon="search"></iron-icon>
                  </span>
                </p>
                <p class="control">
                  <input class="input top-nav-input" type="text" placeholder="Type to search" />
                </p>
              </div>
            </div>
            <span class="navbar-burger burger" data-target="navbarMenuHeroC">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroC" class="navbar-menu">
            <div class="navbar-end">
            <notifications-button></notifications-button>
            <context-button></context-button>
            <userprofile-button></userprofile-button>
            </div>
          </div>
        </div>
      </header>
    `;
  }
}

window.customElements.define('top-nav2', topNavV2);
