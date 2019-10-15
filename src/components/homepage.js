import { html } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import sharedStyles from '../../style/app.scss';
import landingStyles from '../../style/landing-page.scss';
import { PageViewElement } from './page-view-element.js';

class OAEHomepage extends PageViewElement {
  static get styles() {
    return [sharedStyles, landingStyles];
  }

  render() {
    return html`
      <nav class="navbar home-nav">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div class="columns is-gapless is-flex">
        <div class="column home-leftCol">
          <div class="home-right">
            <h1 class="home-title">Welcome to the OAE.</h1>
            <h6>
              Try searching for tags like "meeting" or "document"
            </h6>
            <div class="field home-search">
              <div class="control has-icons-left">
                <input class="input is-rounded" type="search" placeholder="Search for folders, people or documents" />
                <span class="icon is-left home-searchIcon">
                  <iron-icon icon="search"></iron-icon>
                </span>
              </div>
            </div>
            <div class="dropdown is-hoverable">
              <div class="dropdown-trigger">
                <button class="button home-drop" aria-haspopup="true" aria-controls="dropdown-menu4">
                  <span>Sort by</span>
                  <span class="icon is-small">
                    <iron-icon icon="arrow-drop-down"></iron-icon>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                <div class="dropdown-content">
                  <div class="dropdown-item">
                    <p>Recent</p>
                  </div>
                  <div class="dropdown-item">
                    <p>Oldest</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="dropdown is-hoverable">
              <div class="dropdown-trigger">
                <button class="button home-drop" aria-haspopup="true" aria-controls="dropdown-menu4">
                  <span>Search only</span>
                  <span class="icon is-small">
                    <iron-icon icon="arrow-drop-down"></iron-icon>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                <div class="dropdown-content">
                  <div class="dropdown-item">
                    <p>Documents</p>
                  </div>
                  <div class="dropdown-item">
                    <p>Groups</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="dropdown is-hoverable">
              <div class="dropdown-trigger">
                <button class="button home-drop" aria-haspopup="true" aria-controls="dropdown-menu4">
                  <span>Search in</span>
                  <span class="icon is-small">
                    <iron-icon icon="arrow-drop-down"></iron-icon>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                <div class="dropdown-content">
                  <div class="dropdown-item">
                    <p>Documents</p>
                  </div>
                  <div class="dropdown-item">
                    <p>Groups</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-5">
          <figure class="image home-img is-16by9">
            <img
              src="https://images.pexels.com/photos/356086/pexels-photo-356086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          </figure>
        </div>
      </div>
    `;
  }
}

window.customElements.define('oae-landing-page', OAEHomepage);
