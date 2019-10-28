import { html, LitElement } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import sharedStyles from '../../style/app.scss';
import landingStyles from '../../style/landing-page.scss';
import homeSearchStyles from '../../style/homepage-search.scss';

class homeSearchV2 extends LitElement {
  static get styles() {
    return [sharedStyles, landingStyles, homeSearchStyles];
  }

  render() {
    return html`
      <div class="field home-search">
        <div class="control has-icons-left home-searchIcon">
          <input class="input is-rounded" type="search" placeholder="Hint: press ENTER to search" />
          <span class="icon is-left ">
            <iron-icon icon="search"></iron-icon>
          </span>
        </div>
      </div>
    `;
  }
}

window.customElements.define('home-search-v2', homeSearchV2);
