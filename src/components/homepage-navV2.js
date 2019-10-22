import { html, LitElement } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import sharedStyles from '../../style/app.scss';
import landingStyles from '../../style/landing-page.scss';
import homeNavStyles from '../../style/homepage-navv2.scss';

class homeNavV2 extends LitElement {
  static get styles() {
    return [sharedStyles, landingStyles, homeNavStyles];
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
        </div>
        <div class="navbar-end navEnd">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-round signIn-button">Sign In</a>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

window.customElements.define('home-nav-v2', homeNavV2);
