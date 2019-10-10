import { html } from 'lit-element';
import sharedStyles from '../../style/app.scss';
import landingStyles from '../../style/landing-page.scss';
import { PageViewElement } from './page-view-element.js';

class OAEHomepage extends PageViewElement {
  static get styles() {
    return [sharedStyles, landingStyles];
  }

  render() {
    return html`
      <div class="columns is-gapless">
        <div class="column is-5">
          dkfsdgkhsdkghkdsjhkgsjhdkfgjhfskdhgjkfdshjg
        </div>

        <div class="column" style="overflow: auto;">
          <h1>hfdhdshsogh</h1>
        </div>
      </div>
    `;
  }
}

window.customElements.define('oae-landing-page', OAEHomepage);
