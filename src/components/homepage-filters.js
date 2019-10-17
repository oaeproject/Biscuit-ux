import { html, LitElement } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import sharedStyles from '../../style/app.scss';
import landingStyles from '../../style/landing-page.scss';
import homeFiltersStyles from '../../style/homepage-filters.scss';

class homeFilters extends LitElement {
  static get styles() {
    return [sharedStyles, landingStyles, homeFiltersStyles];
  }

  render() {
    return html`
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
    `;
  }
}

window.customElements.define('home-filters', homeFilters);
